'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

const mint = "#D8FFE2";

export default function FridgeRaidPage() {
    return (
        <main className="bg-black text-gray-200 font-carme">
            {/* Hero Section */}
            <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/images/fridge-raid-icon-light.png"
                            alt="Fridge Raid app icon"
                            width={160}
                            height={160}
                            className="mx-auto mb-8 rounded-3xl"
                        />

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
                            Fridge Raid
                        </h1>
                        <p className="text-xl md:text-2xl mb-6" style={{ color: mint }}>
                            Turn your ingredients into delicious meals
                        </p>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                            Never wonder what to cook again. Enter your ingredients, discover recipes ranked by what you already have, and manage your shopping list — all in one app.
                        </p>

                        <a href="https://testflight.apple.com/join/NxQFf45a" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 font-semibold rounded-xl transition cursor-pointer border-2" style={{ borderColor: mint, color: mint }}>
                            Download on the App Store
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Screenshot Showcase */}
            <section className="py-16 px-6 md:px-16 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-white mb-10 font-poppins text-center"
                        {...fadeUp}
                    >
                        See It In <span style={{ color: mint }}>Action</span>
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { src: "/images/fridge-view.PNG", alt: "Fridge ingredient management" },
                            { src: "/images/recipe-search.PNG", alt: "Recipe search and discovery" },
                            { src: "/images/shopping-list.PNG", alt: "Smart shopping list" },
                            { src: "/images/ocr-scan.PNG", alt: "AI-powered recipe OCR scanning" },
                        ].map((ss, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="rounded-2xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={ss.src}
                                    alt={ss.alt}
                                    width={375}
                                    height={812}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Links */}
            <section className="py-6 px-6 border-t border-b border-white/10">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm md:text-base">
                    <a href="#proposal" className="hover:underline transition" style={{ color: mint }}>Written Proposal</a>
                    <span className="text-gray-600">|</span>
                    <a href="#technical" className="hover:underline transition" style={{ color: mint }}>Technical Documentation</a>
                    <span className="text-gray-600">|</span>
                    <a href="#developer" className="hover:underline transition" style={{ color: mint }}>Developer Biography</a>
                </div>
            </section>

            {/* ============================================ */}
            {/* WRITTEN PROPOSAL                             */}
            {/* ============================================ */}
            <section id="proposal" className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-12 font-poppins text-center"
                        {...fadeUp}
                    >
                        Written <span style={{ color: mint }}>Proposal</span>
                    </motion.h2>

                    {/* The Problem */}
                    <motion.div className="mb-12" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">The Problem</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            People often have ingredients sitting in their fridge but have no idea what to make with them. Cookbooks gather dust on the shelf because cross-referencing available ingredients against hundreds of recipes is tedious and time-consuming. Existing recipe apps approach the problem backwards: they show you a recipe first, then send you shopping for a long list of ingredients you don't have.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            The result is wasted food, wasted money, and the nightly frustration of staring into a well-stocked fridge with nothing to cook. There is a clear gap in the market for a tool that <strong className="text-white">flips the traditional recipe search on its head</strong> — starting with what you already have and showing you what you can make right now.
                        </p>
                    </motion.div>

                    {/* Target Audience */}
                    <motion.div className="mb-12" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">Target Audience</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1" style={{ color: mint }}>&#9679;</span>
                                <span><strong className="text-white">Home cooks of all skill levels</strong> — from beginners who need guidance to experienced cooks looking for new inspiration with ingredients on hand.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1" style={{ color: mint }}>&#9679;</span>
                                <span><strong className="text-white">Budget-conscious households</strong> — individuals and families who want to reduce food waste and make the most of what they already have before buying more groceries.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1" style={{ color: mint }}>&#9679;</span>
                                <span><strong className="text-white">Busy professionals and students</strong> — people who need quick meal ideas without the overhead of meal-planning from scratch every night.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1" style={{ color: mint }}>&#9679;</span>
                                <span><strong className="text-white">Recipe collectors</strong> — users who clip recipes from magazines, websites, and social media and want a single place to import, organize, and cook from their collection.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Monetization Strategy */}
                    <motion.div className="mb-4" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">Monetization Strategy</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Fridge Raid uses a <strong className="text-white">freemium subscription model</strong> powered by <strong className="text-white">RevenueCat</strong> for subscription management across iOS.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Free Tier */}
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                                <h4 className="text-lg font-semibold text-white mb-3 font-poppins">Free Tier</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Browse and search 500 hand-refined recipes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Fridge ingredient management and smart suggestions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Personal cookbook with favorites and cook history</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Auto-generated shopping lists with quantities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Unit conversion (metric / imperial / original)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#10003;</span>
                                        <span>Manual recipe entry</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Premium Tier */}
                            <div className="p-6 rounded-xl border-2 bg-white/5" style={{ borderColor: mint }}>
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-lg font-semibold text-white font-poppins">Premium</h4>
                                    <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ backgroundColor: mint, color: "#000" }}>$4.99/mo</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-3">Everything in Free, plus:</p>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#9733;</span>
                                        <span>Scan recipes from photos using AI-powered OCR</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#9733;</span>
                                        <span>Import recipes from any URL automatically</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span style={{ color: mint }} className="mr-2">&#9733;</span>
                                        <span>Exclusive rotating sponsored chef recipes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm mt-6">
                            The free tier provides a full-featured cooking companion that drives organic growth and retention, while the premium tier monetizes power users who want AI-powered convenience features. RevenueCat handles subscription lifecycle, receipt validation, and cross-device restoration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto">
                <div className="h-px bg-white/10" />
            </div>

            {/* ============================================ */}
            {/* TECHNICAL DOCUMENTATION                      */}
            {/* ============================================ */}
            <section id="technical" className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-12 font-poppins text-center"
                        {...fadeUp}
                    >
                        Technical <span style={{ color: mint }}>Documentation</span>
                    </motion.h2>

                    {/* Tech Stack */}
                    <motion.div className="mb-12" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-6 font-poppins">Tech Stack</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-3 pr-6 font-semibold text-white">Layer</th>
                                        <th className="py-3 font-semibold text-white">Technology</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Framework</td>
                                        <td className="py-3">React Native 0.81 + Expo SDK 54</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Language</td>
                                        <td className="py-3">TypeScript 5.9</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Navigation</td>
                                        <td className="py-3">Expo Router (file-based routing with tabs)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Local Storage</td>
                                        <td className="py-3">AsyncStorage</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Monetization</td>
                                        <td className="py-3">RevenueCat (react-native-purchases v9 + react-native-purchases-ui v9)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>AI / LLM</td>
                                        <td className="py-3">Amazon Bedrock — Nova Pro v1 (recipe OCR and URL parsing)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>OCR</td>
                                        <td className="py-3">AWS Textract (image text extraction)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Camera</td>
                                        <td className="py-3">expo-camera + expo-image-picker</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-6 font-medium" style={{ color: mint }}>Animations</td>
                                        <td className="py-3">react-native-reanimated</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Architecture */}
                    <motion.div className="mb-12" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-6 font-poppins">Architecture</h3>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-6 overflow-x-auto">
                            <pre className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre font-mono">{`fridge-raid/
├── app/                          # Expo Router screens (tab-based)
│   ├── _layout.tsx               # Root layout, RevenueCat provider
│   ├── index.tsx                 # Home — recipe search & discovery
│   ├── fridge.tsx                # Fridge ingredient management
│   ├── collection.tsx            # Suggested recipes based on fridge
│   ├── cookbook.tsx               # Saved recipes, OCR/URL import
│   └── settings.tsx              # Preferences, unit system, subs
├── components/                   # Reusable UI components
│   ├── RecipeCard.tsx            # Compact recipe preview card
│   ├── RecipeDetailModal.tsx     # Full recipe view
│   ├── RecipeScannerModal.tsx    # Camera/gallery OCR import
│   ├── UrlImportModal.tsx        # URL-based recipe import
│   └── OnboardingModal.tsx       # First-launch walkthrough
├── lib/
│   ├── storage.ts                # AsyncStorage CRUD layer
│   ├── ingredientMatcher.ts      # Fuzzy matching with alt names
│   ├── unitConversion.ts         # Metric/imperial conversion
│   ├── revenueCat.tsx            # RevenueCat context provider
│   ├── ocr/
│   │   ├── recipeFormatter.ts    # LLM prompts for parsing
│   │   ├── recipeParser.ts       # Structured data extraction
│   │   ├── ocrService.ts         # AWS Textract integration
│   │   └── urlFetcher.ts         # Web page fetching
│   └── data/
│       ├── recipes.ts            # 500 hand-refined recipes
│       ├── ingredients.ts        # Ingredient catalog
│       └── unitConversions.ts    # Conversion tables
└── types/
    └── recipe.ts                 # Core type definitions`}</pre>
                        </div>

                        <h4 className="text-lg font-semibold text-white mb-3 font-poppins">Data Architecture</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                                <h5 className="font-semibold text-white text-sm mb-2">Application Data (read-only, bundled)</h5>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>500 hand-refined recipes across 20 cuisines</li>
                                    <li>Ingredient catalog with alternative names</li>
                                    <li>Cookware types and unit conversion tables</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                                <h5 className="font-semibold text-white text-sm mb-2">User Data (AsyncStorage)</h5>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>Fridge contents (IDs + metadata)</li>
                                    <li>Cookbook (saved recipes + notes + ratings)</li>
                                    <li>Custom imported recipes and ingredients</li>
                                    <li>Settings (unit system, onboarding state)</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="text-lg font-semibold text-white mb-3 font-poppins">Key Design Decisions</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3 mt-0.5 font-bold text-white">1.</span>
                                <span><strong className="text-white">Hybrid Reference Model</strong> — User data stores IDs referencing master data, plus user-specific metadata. Single source of truth with personalization overlay.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-0.5 font-bold text-white">2.</span>
                                <span><strong className="text-white">Automatic Data Refresh</strong> — Master data reloads on every app start to ensure latest content, while preserving all user data.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-0.5 font-bold text-white">3.</span>
                                <span><strong className="text-white">Reactive State Management</strong> — Direct state updates without full page reloads preserve scroll position and provide instant feedback.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-0.5 font-bold text-white">4.</span>
                                <span><strong className="text-white">LLM-Powered Import Pipeline</strong> — OCR images go through AWS Textract for text extraction, then Amazon Bedrock Nova Pro for structured recipe parsing. URL imports fetch page content and pass through the same LLM formatting step.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* RevenueCat Implementation */}
                    <motion.div className="mb-4" {...fadeUp}>
                        <h3 className="text-2xl font-semibold text-white mb-6 font-poppins">RevenueCat Implementation</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            RevenueCat powers the premium subscription tier in Fridge Raid, gating AI-powered recipe import features behind a paywall while keeping the core cooking experience free.
                        </p>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-6">
                            <h4 className="font-semibold text-white mb-3 font-poppins">Integration Details</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><strong className="text-white">SDK:</strong> react-native-purchases v9 + react-native-purchases-ui v9</li>
                                <li><strong className="text-white">Provider:</strong> RevenueCatProvider wraps the entire app in _layout.tsx, initializing the SDK on mount and listening for customer info updates</li>
                                <li><strong className="text-white">Context Hook:</strong> useRevenueCat() exposes isPremium, presentPaywall(), presentPaywallIfNeeded(), presentCustomerCenter(), and restorePurchases()</li>
                                <li><strong className="text-white">Entitlement Check:</strong> Premium status determined via customerInfo.entitlements.active[ENTITLEMENT_ID]</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-6">
                            <h4 className="font-semibold text-white mb-3 font-poppins">Paywall Flow</h4>
                            <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
                                <li>User taps "Scan Recipe" or "Import from URL" in the Cookbook tab</li>
                                <li>presentPaywallIfNeeded() checks entitlement — if already premium, proceeds directly</li>
                                <li>If not premium, RevenueCat's native paywall UI is presented automatically</li>
                                <li>On successful purchase, customerInfoUpdateListener fires and isPremium updates reactively</li>
                                <li>All gated UI updates instantly without requiring a restart</li>
                            </ol>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-6">
                            <h4 className="font-semibold text-white mb-3 font-poppins">Additional Features</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li><strong className="text-white">Restore Purchases</strong> — Available in Settings for users reinstalling or switching devices</li>
                                <li><strong className="text-white">Customer Center</strong> — presentCustomerCenter() accessible from Settings for subscription management</li>
                                <li><strong className="text-white">Debug Logging</strong> — LOG_LEVEL.DEBUG enabled in development builds</li>
                            </ul>
                        </div>

                        {/* RevenueCat Screenshots */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { src: "/images/paywall.PNG", alt: "RevenueCat paywall UI" },
                                { src: "/images/ocr-scan.PNG", alt: "Premium OCR recipe scanning" },
                                { src: "/images/import-from-url.PNG", alt: "Premium URL recipe import" },
                            ].map((ss, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-xl overflow-hidden border border-white/10"
                                >
                                    <Image
                                        src={ss.src}
                                        alt={ss.alt}
                                        width={375}
                                        height={812}
                                        className="w-full h-auto"
                                    />
                                    <p className="text-center text-xs text-gray-500 py-2">{ss.alt}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto">
                <div className="h-px bg-white/10" />
            </div>

            {/* ============================================ */}
            {/* DEVELOPER BIOGRAPHY                          */}
            {/* ============================================ */}
            <section id="developer" className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-12 font-poppins text-center"
                        {...fadeUp}
                    >
                        Developer <span style={{ color: mint }}>Biography</span>
                    </motion.h2>

                    <motion.div {...fadeUp}>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-48 flex-shrink-0">
                                <Image
                                    src="/images/NikoHiking.jpeg"
                                    alt="Niko atop Paintbrush Divide, Grand Teton National Park"
                                    width={400}
                                    height={300}
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <h3 className="text-2xl font-semibold text-white font-poppins">Niko</h3>
                                <p>
                                    Niko is a versatile IT professional with extensive experience in technical support, cloud engineering, and system administration. His career spans roles in Site Operations, Cloud Engineering, DevOps, SysAdmin, Cyber Systems Operations, and Technical Support.
                                </p>
                                <p>
                                    Across these roles, Niko has maintained a strong focus on customer service, first-line troubleshooting, infrastructure automation, performance optimization, and streamlining complex technical environments.
                                </p>
                                <p>
                                    In his free time, Niko enjoys tinkering with web and mobile applications, hiking, travelling the globe, and taking part in GameJams to sharpen his development skills. Fridge Raid is a product of that passion — built for the <a href="https://www.revenuecat.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: mint }}>RevenueCat</a> Ship-a-ton Hackathon using React Native, Expo, and AWS AI services.
                                </p>
                                <p className="text-sm text-gray-500">
                                    <a href="/niko" className="underline hover:text-gray-300 transition">Full bio and contact form &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto">
                <div className="h-px bg-white/10" />
            </div>

            {/* ============================================ */}
            {/* FEATURES & HOW IT WORKS                      */}
            {/* ============================================ */}
            <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-16 font-poppins text-center"
                        {...fadeUp}
                    >
                        How It <span style={{ color: mint }}>Works</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { step: "1", title: "Stock Your Fridge", desc: "Search and add the ingredients you have at home to your virtual fridge." },
                            { step: "2", title: "Discover Recipes", desc: "Browse 500 recipes ranked by how many matching ingredients you already own." },
                            { step: "3", title: "Cook & Shop Smart", desc: "Save favorites, generate shopping lists for missing items, and start cooking." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="text-center p-6 rounded-xl border border-white/10 bg-white/5"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ backgroundColor: mint, color: "#000" }}>
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 font-poppins">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature highlights */}
                    <motion.h2
                        className="text-4xl font-bold text-white mb-12 font-poppins text-center"
                        {...fadeUp}
                    >
                        Key <span style={{ color: mint }}>Features</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Smart recipe matching ranked by ingredient overlap",
                            "500 hand-refined recipes spanning 20 cuisines",
                            "AI-powered recipe import from photos (OCR) and URLs",
                            "Auto-generated shopping lists with quantities",
                            "Unit conversion between metric, imperial, and original",
                            "Ingredient alternative matching (e.g. coriander = cilantro)",
                            "Personal cookbook with favorites, notes, and cook history",
                            "Guided onboarding walkthrough for new users"
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start p-4 rounded-lg bg-white/5"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <span className="mr-3 mt-0.5 flex-shrink-0" style={{ color: mint }}>&#10003;</span>
                                <span className="text-gray-300 text-sm">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-center border-t border-white/10">
                <motion.div {...fadeUp}>
                    <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
                        Ready to raid your fridge?
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        Download Fridge Raid today and start cooking smarter.
                    </p>
                    <a href="https://testflight.apple.com/join/NxQFf45a" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 font-semibold rounded-xl transition cursor-pointer text-black" style={{ backgroundColor: mint }}>
                        Download on the App Store
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
