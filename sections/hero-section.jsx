import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="story" className="relative flex flex-col items-center min-h-[90vh] justify-center py-20">
            {/* Our Story Banner */}
            <motion.div
                className="w-full bg-blue-900/30 py-6 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl font-semibold text-white">Our Story</h1>
            </motion.div>

            {/* Hero Image with hooded figures */}
            <motion.div
                className="relative w-full max-w-md mb-8"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <Image
                    src="/images/HoodyGuysShirt_RedBlue-1024x617.png"
                    alt="Nomadsoft Logo"
                    width={1024}
                    height={617}
                    className="w-full h-auto"
                />
            </motion.div>

            {/* Main Tagline */}
            <motion.h2
                className="text-2xl md:text-3xl font-semibold text-[var(--color-nomad-light-blue)] text-center max-w-3xl mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Innovations Through Code<br />
                Solutions Through Vision
            </motion.h2>

            {/* Welcome Text */}
            <motion.p
                className="text-center text-lg max-w-3xl px-6 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                Welcome to Nomadsoft, the digital innovation studio where cutting-edge development meets practical business solutions. We craft responsive web applications that solve real-world problems across multiple industries, powered by modern tech stacks and driven by creative vision.
            </motion.p>

            {/* Meet Niko Button */}
            <motion.div
                className="mt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Link
                    href="/niko-halley"
                    className="inline-block px-8 py-3 bg-[var(--color-nomad-light-blue)] hover:bg-[var(--color-nomad-blue)] text-white font-semibold rounded-md transition-colors duration-300 active:scale-95"
                >
                    Meet Niko
                </Link>
            </motion.div>

            {/* Decorative separator */}
            <motion.div
                className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mt-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
            />
        </section>
    );
}