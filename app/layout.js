import { Carme, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis-scroll";
import Footer from "@/components/footer";

const carme = Carme({
    subsets: ["latin"],
    variable: "--font-carme",
    weight: ["400"],
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Nomadsoft – For Nomads, By Nomads",
    description: "Innovations through code, solutions through vision. We craft responsive web applications that solve real-world problems across multiple industries.",
    appleWebApp: {
        title: "Nomadsoft",
    },
    icons: {
        icon: [
            { url: '/favicon.ico?v=20251121', sizes: '48x48', type: 'image/x-icon' }
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${carme.variable} ${poppins.variable}`}>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}