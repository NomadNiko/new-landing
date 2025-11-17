'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        alert('Thank you for contacting Nomadsoft! We will get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-[var(--color-nomad-navy)]">
            <div className="max-w-3xl mx-auto">
                {/* Form Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-center text-[var(--color-nomad-light-blue)] mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Nomadsoft
                </motion.h2>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {/* Name Fields */}
                    <div>
                        <label className="block text-lg mb-3 text-[var(--color-nomad-blue)]">
                            Name <span className="text-red-400">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-[var(--color-nomad-blue)]/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-nomad-light-blue)] focus:ring-1 focus:ring-[var(--color-nomad-light-blue)] transition"
                                    placeholder="First Name"
                                />
                                <span className="text-sm text-gray-400 mt-1 block">First</span>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-[var(--color-nomad-blue)]/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-nomad-light-blue)] focus:ring-1 focus:ring-[var(--color-nomad-light-blue)] transition"
                                    placeholder="Last Name"
                                />
                                <span className="text-sm text-gray-400 mt-1 block">Last</span>
                            </div>
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-lg mb-3 text-[var(--color-nomad-blue)]">
                            Email <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-[var(--color-nomad-blue)]/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-nomad-light-blue)] focus:ring-1 focus:ring-[var(--color-nomad-light-blue)] transition"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-lg mb-3 text-[var(--color-nomad-blue)]">
                            Comment or Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-[var(--color-nomad-blue)]/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-nomad-light-blue)] focus:ring-1 focus:ring-[var(--color-nomad-light-blue)] transition resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-3 bg-[var(--color-nomad-light-blue)] hover:bg-[var(--color-nomad-blue)] text-white font-semibold rounded-md transition-colors duration-300 active:scale-95"
                        >
                            Submit
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
