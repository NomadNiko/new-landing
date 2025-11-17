import { motion } from "framer-motion";

export default function TechnologySection() {
    return (
        <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-semibold text-center text-[var(--color-nomad-light-blue)] mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technology Meets Purpose
                </motion.h2>

                {/* Content */}
                <motion.div
                    className="space-y-6 text-lg leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <p>
                        At Nomadsoft, we don't just build applications – we create digital ecosystems that solve problems. Our diverse portfolio demonstrates our versatility across frameworks and platforms, from WordPress to custom Node.js/React solutions.
                    </p>

                    <p>
                        Each project represents our commitment to clean code, intuitive user experiences, and scalable architecture. Whether you're looking for a custom solution or inspiration for your next digital venture, Nomadsoft demonstrates the power of purposeful development.
                    </p>
                </motion.div>

                {/* Decorative separator */}
                <motion.div
                    className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mx-auto mt-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* Call to action */}
                <motion.p
                    className="text-center text-xl italic mt-12 text-[var(--color-nomad-light-blue)]"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Let's build something remarkable together.
                </motion.p>

                {/* Final separator */}
                <motion.div
                    className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mx-auto mt-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                />
            </div>
        </section>
    );
}
