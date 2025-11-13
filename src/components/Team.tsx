import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Team() {
    const members = [
        { src: '/ph.jpeg', name: 'Pedro Henrique', alt: 'Pedro Henrique', style: '-rotate-2', linkedin: 'https://www.linkedin.com/in/pedro-henrique-barcellos-lopes-997365bb/' },
        { src: '/julio.jpeg', name: 'Júlio Cesar', alt: 'Júlio Cesar', style: 'translate-y-1 rotate-[1.5deg]', linkedin: 'https://www.linkedin.com/in/juliosalem/' },
        { src: '/junior.jpeg', name: 'Antonio Lima', alt: 'Antonio Lima', style: '-translate-y-1 rotate-2', linkedin: 'https://www.linkedin.com/in/junior-lima-analyst/' },
    ];

    const advisor = [
        { src: '/advisor.jpeg', name: 'Prof.ª Drª. Andreia Rodrigues Casare', alt: 'Prof.ª Drª. Andreia Rodrigues Casare', style: '' },
    ];

    return (
        <>
            {/* ===== INTEGRANTES ===== */}
            <motion.section
                id="team"
                className="relative flex flex-col items-center justify-center px-4 py-12 md:py-24 bg-gradient-to-b from-gray-950 to-black text-center overflow-hidden min-h-[60vh] md:min-h-[65vh]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-3xl font-semibold mb-12 md:mb-16 text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    variants={fadeUp}
                >
                    Integrantes
                </motion.h2>

                <div
                    className="
                        relative w-full max-w-5xl 
                        flex flex-col md:flex-row 
                        justify-center items-center 
                        gap-14 md:gap-20
                        md:space-y-0 space-y-16
                    "
                >
                    {members.map((m) => (
                        <motion.div
                            key={m.name}
                            className={`relative ${m.style}`}
                            variants={fadeUp}
                        >
                            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
                                <a
                                    href={m.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={m.src}
                                        alt={m.alt}
                                        className="
                                            w-40 h-40 
                                            md:w-64 md:h-64 
                                            object-cover 
                                            grayscale hover:grayscale-0 
                                            transition-all duration-500
                                        "
                                    />
                                </a>
                            </div>
                            <p className="mt-3 text-gray-300 font-medium">{m.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ===== ORIENTADORA ===== */}
            <motion.section
                id="advisor"
                className="relative flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-gradient-to-b from-gray-950 to-black text-center overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-3xl font-semibold mb-12 md:mb-16 text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    variants={fadeUp}
                >
                    Orientadora
                </motion.h2>

                <div className="w-full max-w-3xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                    {advisor.map((a) => (
                        <motion.div
                            key={a.name}
                            className={`relative ${a.style}`}
                            variants={fadeUp}
                        >
                            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
                                <img
                                    src={a.src}
                                    alt={a.alt}
                                    className="
                                        w-60 h-60 
                                        md:w-64 md:h-64 
                                        object-cover 
                                        grayscale hover:grayscale-0 
                                        transition-all duration-500
                                    "
                                />
                            </div>
                        </motion.div>
                    ))}
                    <p className="mt-4 md:mt-3 text-gray-300 font-medium text-center md:text-left">
                        Prof.ª Drª. Andreia Rodrigues Casare
                    </p>
                </div>
            </motion.section>
        </>
    );
}
