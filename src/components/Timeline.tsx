import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

const events = [
    { time: '21:15', title: 'Chegada', desc: 'Abertura das portas — recepção dos convidados' },
    { time: '21:25', title: 'Início — Apresentação', desc: 'Início das apresentações do TCC' },
    { time: '21:45', title: 'Fim da apresentação — Comentários', desc: 'Comentários e parecer da banca' },
    { time: '22:15', title: 'Encerramento da defesa', desc: 'Agradecimentos finais e término da defesa' },
];

export default function Timeline() {
    return (
        <motion.div
            className="w-full max-w-3xl mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <h3 className="text-sm text-accent font-semibold mb-4" aria-hidden>Programação</h3>

            <div className="space-y-4">
                {events.map((e) => (
                    <motion.div key={e.time} className="flex items-center gap-4" variants={fadeUp}>
                        <div className="w-20 text-right text-sm text-gray-400">{e.time}</div>
                        <div className="flex-1 card p-4 rounded-lg hover:scale-[1.01] transition-transform">
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-1">
                                    {renderIconFor(e.title)}
                                </div>
                                <div>
                                    <div className="font-medium text-gray-100">{e.title}</div>
                                    <div className="text-sm text-gray-300 mt-1">{e.desc}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

function renderIconFor(title: string) {
    if (title.toLowerCase().includes('chegada')) {
        return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" fill="rgba(0,194,255,0.06)" />
                <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (title.toLowerCase().includes('início')) {
        return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" fill="rgba(0,194,255,0.06)" />
                <path d="M10 8v8l6-4-6-4z" fill="currentColor" />
            </svg>
        );
    }
    if (title.toLowerCase().includes('coment')) {
        return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(0,194,255,0.06)" />
            </svg>
        );
    }
    // default
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" fill="rgba(0,194,255,0.06)" />
        </svg>
    );
}
