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
                            <div className="font-medium text-gray-100">{e.title}</div>
                            <div className="text-sm text-gray-300 mt-1">{e.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
