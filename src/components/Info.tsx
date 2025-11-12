import Countdown from "./Countdown";
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Info() {
    return (
        <motion.section
            className="relative z-10 flex flex-col items-center justify-center px-6 md:py-16 bg-linear-to-b from-black to-[#111] text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="max-w-3xl">
                <motion.p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed" variants={fadeUp}>
                    Gostaríamos de convidá-los para nossa{' '}
                    <span className="font-semibold text-gray-100">
                        apresentação do nosso Trabalho de Graduação
                    </span>
                </motion.p>

                <motion.p className="text-lg md:text-2xl mb-6 text-gray-200" variants={fadeUp}>
                    Apresentação —{' '}
                    <span className="font-semibold text-gray-100">25 de novembro às 21:25</span>
                </motion.p>

                <motion.div
                    className="inline-block bg-neutral-900/50 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.05)] mb-8"
                    variants={fadeUp}
                >
                    <Countdown />
                </motion.div>

                <motion.p className="text-sm uppercase tracking-widest text-gray-500" variants={fadeUp}>
                    Contagem regressiva para o grande momento
                </motion.p>
            </div>
        </motion.section>
    );
}
