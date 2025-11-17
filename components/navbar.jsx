'use client';

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.nav className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 bg-white"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        className="h-12 w-auto"
                        src="/images/HexNomadsoftLogo.png"
                        width={48}
                        height={48}
                        alt="Nomadsoft"
                    />
                    <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold text-lg leading-tight">Nomadsoft</span>
                        <span className="text-gray-600 text-xs leading-tight">For Nomads, By Nomads</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/#story" className="text-gray-900 hover:text-blue-600 transition">
                        Our Story
                    </Link>
                    <Link href="/#portfolio" className="text-gray-900 hover:text-blue-600 transition">
                        Portfolio
                    </Link>
                    <Link href="/niko-halley" className="text-gray-900 hover:text-blue-600 transition">
                        Meet Niko
                    </Link>
                    <Link href="/#contact" className="text-gray-900 hover:text-blue-600 transition">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden active:scale-90 transition text-gray-900">
                    <MenuIcon className="size-6.5" />
                </button>
            </motion.nav>
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-400 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link href="/#story" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-300 transition">
                    Our Story
                </Link>
                <Link href="/#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-300 transition">
                    Portfolio
                </Link>
                <Link href="/niko-halley" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-300 transition">
                    Meet Niko
                </Link>
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-300 transition">
                    Contact
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}