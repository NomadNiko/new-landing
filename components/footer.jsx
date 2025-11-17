'use client';
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer className="w-full py-6 text-center border-t border-[var(--color-nomad-blue)]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <p className="text-sm text-[var(--color-nomad-blue)]">
                © {currentYear} Nomadsoft
            </p>
        </motion.footer>
    );
};