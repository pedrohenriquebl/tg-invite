import Countdown from "./Countdown";
import AddToCalendar from './AddToCalendar';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function Info() {
    return (
        <motion.section
            id="info"
            className="relative z-10 flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-linear-to-b from-black to-[#111] min-h-[60vh] md:min-h-[65vh]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <div className="max-w-4xl w-full mx-auto space-y-6 text-center md:text-left">
                <motion.p className="text-gray-300 text-lg md:text-xl leading-relaxed" variants={fadeUp}>
                    Gostaríamos de convidá-los para nossa{' '}
                    <span className="font-semibold text-gray-100">
                        apresentação do nosso Trabalho de Graduação
                    </span>
                </motion.p>

                <motion.p className="text-lg md:text-2xl text-gray-200" variants={fadeUp}>
                    Fatec Itapetininga —{' '}
                    <span className="font-semibold text-gray-100">25 de novembro às 21:25</span>
                </motion.p>
                <motion.div className="w-full flex flex-col items-center m md:items-center gap-6" variants={fadeUp}>
                    <div className="w-full sm:w-auto max-w-md mx-auto md:mx-0 mt-4 inline-block bg-neutral-900/50 backdrop-blur-md px-6 md:px-8 py-6 rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.05)]">
                        <Countdown />
                    </div>

                    <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Contagem regressiva para o grande momento</p>

                    <div className="w-full flex flex-col sm:flex-row md:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-4">
                        <div className="w-full sm:w-auto">
                            <AddToCalendar />
                        </div>
                    </div>

                    <div className="w-full">
                        <Timeline />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
