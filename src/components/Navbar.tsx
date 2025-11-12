import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'home', label: 'Início' },
    { id: 'info', label: 'Informações' },
    { id: 'team', label: 'Integrantes' },
    { id: 'about', label: 'Sobre' },
    { id: 'location', label: 'Localização' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const opts = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0.1,
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, opts);
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        observers.push(observer);

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-auto lg:hidden">
            <div className="w-full max-w-[980px] mx-3 flex items-center justify-between">
                {/* Hamburger button */}
                <button
                    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="cursor-pointer p-2 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-gray-200"
                >
                    <div className="w-6 h-6 relative">
                        <motion.span
                            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                            className="block absolute left-0 right-0 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{ opacity: open ? 0 : 1 }}
                            className="block absolute left-0 right-0 top-2 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                            className="block absolute left-0 right-0 top-4 h-0.5 bg-white"
                        />
                    </div>
                </button>

                {/* optional: center title small on mobile */}
                <div className="flex-1 text-center pointer-events-none">
                    <span className="text-sm font-semibold text-gray-100">Coursekeeper</span>
                </div>

                {/* placeholder to balance */}
                <div className="w-8" />
            </div>

            {/* Dropdown menu */}
            <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className={`absolute top-16 left-0 right-0 z-40 px-4 ${open ? '' : 'pointer-events-none'} `}
            >
                <div className="mx-auto max-w-[980px] bg-black/60 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-lg">
                    <div className="flex flex-col gap-2">
                        {sections.map((s) => {
                            const isActive = active === s.id;
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => scrollTo(s.id)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-gray-100'}`}
                                >
                                    {s.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}
