import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function Hero() {
    const { scrollY } = useScroll();
    // Parallax: move background up slowly as user scrolls
    const y = useTransform(scrollY, [0, 600], [0, -120]);

    return (
        <section id="home" className="relative flex flex-col justify-center items-center text-center min-h-[60vh] md:min-h-[65vh] overflow-hidden">
            <motion.div className="absolute inset-0" style={{ y }} aria-hidden>
                <img
                    src="/background.png"
                    alt="Coursekeeper background"
                    className="w-full h-full object-cover md:scale-105 opacity-90 blur-xs"
                />
            </motion.div>

            <motion.div
                className="relative z-10 mb-8 md:mb-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0}
                variants={fadeUp}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                    Coursekeeper
                </h1>
            </motion.div>
        </section>
    );
}
