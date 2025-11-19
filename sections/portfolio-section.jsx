"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
    {
        title: "FormBotz",
        url: "https://formbotz.nomadsoft.us/",
        github: "https://github.com/NomadNiko/formbotz-nextjs",
        images: ["/images/formbotz_ss_01.JPG", "/images/formbotz_ss_02.JPG"],
        description: "A conversational form builder that transforms traditional forms into engaging chat-style conversations. Create forms where questions appear one at a time like a messaging app, complete with typing indicators and smooth animations. Features powerful conditional logic for branching flows, variable interpolation for personalized messages, replay functionality to re-collect answers, automated email notifications and webhooks, CSV/JSON export, analytics dashboard with completion rates, and embeddable widget mode. Perfect for surveys, lead generation, onboarding flows, and any data collection that benefits from a conversational approach. Built with Next.js 15, React 19, TypeScript, and MongoDB, self-hosted in AWS EC2."
    },
    {
        title: "BarVibez",
        url: "https://barvibez.app/",
        appStore: "https://apps.apple.com/us/app/bar-vibez/id6749613591",
        image: "/images/BarVibezScreenshot.png",
        description: "Discover and craft perfect cocktails with 2300+ recipes! A cocktail recipe and bar inventory management app featuring search by name or ingredients, venue management for multiple locations, custom cocktail creation, and offline support. Perfect for bartenders and cocktail enthusiasts. Built with React Native/Expo, available on iOS App Store."
    },
    {
        title: "Quotable by Nomadsoft",
        url: "https://apps.apple.com/us/app/quotable-by-nomadsoft/id6749051384",
        image: "/images/QuotableScreenshot.png",
        description: "Inspiration at your fingertips! A free quotes app with 5000+ curated quotes, offline support, favorites, swipe browsing, and adjustable font size. Works offline - perfect for flights, travel, or quiet moments. Find wisdom, motivation, and clarity whenever you need it. Built with React Native/Expo, available on iOS App Store."
    },
    {
        title: "iXplor",
        url: "https://ixplor.app/",
        image: "/images/iXplorScreeShot02.png",
        description: "A comprehensive multi-vendor marketplace connecting adventure seekers with outdoor activities and tourism experiences. iXplor creates seamless connections between travelers and local experience providers. Built with Node.js and React, self-hosted in AWS EC2."
    },
    {
        title: "MenuTraining",
        url: "https://menutraining.com/",
        image: "/images/MenuTrainingScreeShot01.png",
        description: "Revolutionizing restaurant staff training with our Node.js/React application. Streamline menu knowledge, improve service quality, and boost customer satisfaction. Coming soon: Back-of-house operations and recipe management features. Built with Node.js and React, self-hosted in AWS EC2."
    },
    {
        title: "EasyTix",
        url: "https://easytix.nomadsoft.us/",
        image: "/images/EasyTixScreeShot01.png",
        description: "Our efficient trouble ticketing system built on Node.js, React, and MongoDB, self-hosted in AWS EC2. Simplifying issue tracking and resolution for small to medium sized businesses."
    },
    {
        title: "iXplor Merch",
        url: "https://shop.ixplor.app/",
        image: "/images/iXplorShopScreeShot01.png",
        description: "Our iXplor merchandise store featuring branded gear for outdoor enthusiasts. Quality products that carry the spirit of adventure wherever you go. Built with WordPress, self-hosted in AWS EC2."
    },
    {
        title: "iXplor Travel",
        url: "https://travel.ixplor.app",
        image: "/images/iXplorTravelScreeShot01.png",
        description: "Stay informed with our curated WordPress travel blog covering destinations, tips, and trends for the modern explorer. Your reliable source for travel inspiration and practical advice. Built with WordPress, self-hosted in AWS EC2."
    }
];

export default function PortfolioSection() {
    const [lightboxImage, setLightboxImage] = useState(null);

    return (
        <section id="portfolio" className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            {/* Section Title */}
            <motion.h2
                className="text-4xl md:text-5xl font-semibold text-center text-[var(--color-nomad-light-blue)] mb-16"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Our Solutions Portfolio
            </motion.h2>

            {/* Product Cards */}
            <div className="space-y-20 max-w-5xl mx-auto">
                {products.map((product, index) => (
                    <motion.article
                        key={product.title}
                        className="flex flex-col"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        {/* Product Title */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                <Link
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-nomad-light-blue)] hover:text-[var(--color-nomad-blue)] transition-colors"
                                >
                                    {product.title}
                                </Link>
                            </h3>
                            {product.appStore && (
                                <Link
                                    href={product.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <span className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors">
                                        View on App Store
                                    </span>
                                </Link>
                            )}
                            {product.github && (
                                <Link
                                    href={product.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <span className="text-xs bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-md transition-colors">
                                        View on GitHub
                                    </span>
                                </Link>
                            )}
                        </div>

                        {/* Product Image(s) */}
                        {product.images ? (
                            <div className="w-full mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.images.map((img, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
                                        onClick={() => setLightboxImage({ src: img, alt: `${product.title} ${imgIndex + 1}` })}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.title} ${imgIndex + 1}`}
                                            width={800}
                                            height={533}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="relative w-full lg:w-[91%] lg:mx-auto mb-6 rounded-lg overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
                                onClick={() => setLightboxImage({ src: product.image, alt: product.title })}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={1040}
                                    height={585}
                                    className="w-full h-auto"
                                />
                            </div>
                        )}

                        {/* Product Description */}
                        <p className="text-lg leading-relaxed">
                            {product.description}
                        </p>
                    </motion.article>
                ))}
            </div>

            {/* Decorative separator */}
            <motion.div
                className="w-24 h-1 bg-[var(--color-nomad-light-blue)] mx-auto mt-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            />

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    onClick={() => setLightboxImage(null)}
                >
                    <div className="relative max-w-7xl max-h-[90vh] w-full">
                        {/* Close button */}
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl font-light"
                            onClick={() => setLightboxImage(null)}
                        >
                            ×
                        </button>
                        {/* Image */}
                        <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={lightboxImage.src}
                                alt={lightboxImage.alt}
                                width={1920}
                                height={1080}
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
