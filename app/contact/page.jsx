import { Suspense } from "react";
import ContactSection from "@/sections/contact-section";

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="py-20 px-6 text-center">Loading...</div>}>
            <ContactSection />
        </Suspense>
    );
}
