'use client';

import Script from "next/script";
import HeroSection from "@/sections/hero-section";
import PortfolioSection from "@/sections/portfolio-section";
import TechnologySection from "@/sections/technology-section";
import ContactSection from "@/sections/contact-section";

export default function Page() {
    return (
        <>
            <main>
                <HeroSection />
                <PortfolioSection />
                <TechnologySection />
                <ContactSection />
            </main>
            <Script
                src="https://formbotz.nomadsoft.us/api/widget/contact-nomadsoft-960d396d/loader.js"
                strategy="lazyOnload"
            />
        </>
    );
}