import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Team() {
    const members = [
        { src: '/ph.jpeg', name: 'Pedro Henrique', alt: 'Pedro Henrique', style: '-rotate-2' },
        { src: '/julio.jpeg', name: 'Júlio Cesar', alt: 'Júlio Cesar', style: 'translate-y-6 rotate-[1.5deg]' },
        { src: '/junior.jpeg', name: 'Antonio Lima', alt: 'Antonio Lima', style: '-translate-y-4 rotate-2' },
    ];

    return (
        <motion.section
            className="relative flex flex-col items-center justify-center px-6 py-24 bg-linear-to-b from-gray-950 to-black text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <motion.h2 className="text-3xl font-semibold mb-16 text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" variants={fadeUp}>
                Integrantes
            </motion.h2>

            <div className="relative w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                {members.map((m) => (
                    <motion.div key={m.name} className={`relative ${m.style}`} variants={fadeUp}>
                        <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
                            <img src={m.src} alt={m.alt} className="w-64 h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <p className="mt-3 text-gray-300 font-medium">{m.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
