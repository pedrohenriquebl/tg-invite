import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function About() {
    return (
        <motion.section className="flex flex-col items-center justify-center px-6 py-10 bg-linear-to-b from-black via-gray-900 to-black text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className="max-w-3xl">
                <motion.h2 className="text-3xl font-semibold mb-6 text-gray-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" variants={fadeUp}>
                    Sobre o projeto
                </motion.h2>
                <motion.p className="text-gray-300 text-lg leading-relaxed" variants={fadeUp}>
                    O <strong>Coursekeeper</strong> é um sistema que tem como objetivo facilitar o acesso
                    do usuário à suas informações de estudo, de forma rápida e prática, para que ele tenha o controle de
                    seus estudos
                </motion.p>
            </div>
        </motion.section>
    );
}
