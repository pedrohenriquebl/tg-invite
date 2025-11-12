import { useState, useEffect } from 'react';

const event = {
    title: 'Apresentação de TCC — Coursekeeper',
    description: 'Apresentação do Trabalho de Graduação - Coursekeeper',
    location: 'Rua Dr. João Vieira de Camargo, 104 — Itapetininga/SP — Brasil',
    // event start in local time
    start: '2025-11-25T21:25:00',
    // default duration 1.5 hours
    durationMinutes: 50,
};

function toICS() {
    const start = new Date(event.start);
    const end = new Date(start.getTime() + event.durationMinutes * 60 * 1000);

    const toUtcString = (d: Date) => {
        // format to YYYYMMDDTHHMMSSZ
        const YYYY = d.getUTCFullYear();
        const MM = String(d.getUTCMonth() + 1).padStart(2, '0');
        const DD = String(d.getUTCDate()).padStart(2, '0');
        const hh = String(d.getUTCHours()).padStart(2, '0');
        const mm = String(d.getUTCMinutes()).padStart(2, '0');
        const ss = String(d.getUTCSeconds()).padStart(2, '0');
        return `${YYYY}${MM}${DD}T${hh}${mm}${ss}Z`;
    };

    const icsLines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Coursekeeper//Invite//PT',
        'BEGIN:VEVENT',
        `UID:${Date.now()}@coursekeeper`,
        `DTSTAMP:${toUtcString(new Date())}`,
        `DTSTART:${toUtcString(start)}`,
        `DTEND:${toUtcString(end)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location}`,
        'END:VEVENT',
        'END:VCALENDAR',
    ];

    return icsLines.join('\r\n');
}

export default function AddToCalendar() {
    const [toast, setToast] = useState<string | null>(null);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(t);
    }, [toast]);

    const showToast = (msg: string) => setToast(msg);

    const downloadIcs = () => {
        const blob = new Blob([toICS()], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'coursekeeper_presentation.ics';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast('.ics baixado');
    };

    const openGoogle = () => {
        const start = new Date(event.start);
        const end = new Date(start.getTime() + event.durationMinutes * 60 * 1000);
        const fmt = (d: Date) => encodeURIComponent(d.toISOString().replace(/-|:|\.\d+/g, ''));
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            event.title
        )}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(
            event.location
        )}&sf=true&output=xml`;
        window.open(url, '_blank');
        showToast('Abrindo Google Calendar');
    };

    return (
        <div className="flex gap-3 items-center justify-center mt-4">
            <button
                onClick={downloadIcs}
                className="px-4 py-2 rounded-md card text-sm md:text-base hover:scale-[1.02] transition-transform flex items-center gap-2"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11v6H8v-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Baixar .ics
            </button>
            <button
                onClick={openGoogle}
                className="px-4 py-2 rounded-md bg-accent text-black font-medium hover:opacity-90 transition-opacity text-sm md:text-base flex items-center gap-2"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Adicionar ao Google Calendar
            </button>

            {toast && (
                <div className="toast" role="status" aria-live="polite">
                    {toast}
                </div>
            )}
        </div>
    );
}
