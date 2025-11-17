'use client';

import HeroSection from "@/sections/hero-section";
import PortfolioSection from "@/sections/portfolio-section";
import TechnologySection from "@/sections/technology-section";
import ContactSection from "@/sections/contact-section";

export default function Page() {
    return (
        <main>
            <HeroSection />
            <PortfolioSection />
            <TechnologySection />
            <ContactSection />
        </main>
    );
}