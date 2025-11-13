import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
    { id: 'home', label: 'Início' },
    { id: 'info', label: 'Informações' },
    { id: 'team', label: 'Integrantes' },
    { id: 'location', label: 'Localização' },
];

export default function TOC() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
        );

        items.forEach((it) => {
            const el = document.getElementById(it.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="hidden lg:flex fixed right-6 top-1/3 z-40">
            <motion.ul initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-3 bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/6">
                {items.map((it) => {
                    const isActive = active === it.id;
                    return (
                        <li key={it.id}>
                            <button onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth' })} className={`px-3 py-1 text-sm ${isActive ? 'text-accent font-semibold' : 'text-gray-300'}`}>
                                {it.label}
                            </button>
                        </li>
                    );
                })}
            </motion.ul>
        </aside>
    );
}
