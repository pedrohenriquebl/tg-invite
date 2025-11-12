import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function Footer() {
    return (
        <motion.footer className="py-6 text-center text-gray-600 bg-black border-t border-gray-800 text-sm" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            © 2025 Coursekeeper — Projeto TG desenvolvido por Pedro Henrique, Júlio
            Cesar e Antonio Lima.
        </motion.footer>
    );
}
