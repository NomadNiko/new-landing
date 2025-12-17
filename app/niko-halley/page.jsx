'use client';

import Script from "next/script";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NikoHalleyPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [contactStatus, setContactStatus] = useState({
        loading: false,
        message: '',
        error: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setContactStatus({ loading: true, message: '', error: false });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setContactStatus({
                    loading: false,
                    message: data.message || 'Message sent successfully!',
                    error: false
                });
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                setContactStatus({
                    loading: false,
                    message: data.error || 'Failed to send message. Please try again.',
                    error: true
                });
            }
        } catch (error) {
            setContactStatus({
                loading: false,
                message: 'An error occurred. Please try again later.',
                error: true
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <main>
            {/* Page Banner */}
            <motion.div
                className="w-full bg-blue-900/30 py-6 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-4xl font-semibold text-white">Niko Halley</h1>
            </motion.div>

            <div className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-5xl mx-auto">
                {/* Hero Image */}
                <motion.figure
                    className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/NikoHiking.jpeg"
                        alt="Niko atop Paintbrush Divide, Grand Teton National Park"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </motion.figure>

                {/* Separator */}
                <motion.div
                    className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mx-auto mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                />

                {/* Bio Content */}
                <motion.div
                    className="space-y-6 text-lg leading-relaxed mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <p>
                        I am a versatile IT professional with extensive experience in technical support, cloud engineering, and system administration.
                    </p>

                    <p>
                        My career spans roles in Site Operations, Cloud Engineering, DevOps, SysAdmin, Cyber Systems Operations and Technical Support.
                    </p>

                    <p>
                        I have worked in range of roles, but most have had a strong focus on customer service, first line troubleshooting, infrastructure automation, performance optimization, and streamlining complex technical environments.
                    </p>

                    <p>
                        In my free time I enjoy tinkering with web applications, hiking, travelling the globe and taking part in GameJams to improve my Game Development skills.
                    </p>
                </motion.div>

                {/* Separator */}
                <motion.div
                    className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mx-auto mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                />

                {/* Contact Form */}
                <motion.div
                    className="mb-20"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--color-nomad-light-blue)] mb-8">
                        Contact Niko
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
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
                                disabled={contactStatus.loading}
                                className="w-full md:w-auto px-12 py-3 bg-[var(--color-nomad-light-blue)] hover:bg-[var(--color-nomad-blue)] text-white font-semibold rounded-md transition-colors duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {contactStatus.loading ? 'Sending...' : 'Submit'}
                            </button>
                        </div>

                        {/* Status Message */}
                        {contactStatus.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-md ${
                                    contactStatus.error
                                        ? 'bg-red-500/20 border border-red-500/50 text-red-200'
                                        : 'bg-green-500/20 border border-green-500/50 text-green-200'
                                }`}
                            >
                                {contactStatus.message}
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
            </main>
            <Script
                src="https://formbotz.nomadsoft.us/api/widget/contact-nomadsoft-960d396d/loader.js"
                strategy="lazyOnload"
            />
        </>
    );
}
