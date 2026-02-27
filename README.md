<div align="center">
  <img src="public/images/HexNomadsoftLogo.png" alt="Nomadsoft Logo" width="120"/>
  
  # Nomadsoft
  
  **For Nomads, By Nomads**
  
  *Innovations Through Code • Solutions Through Vision*
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
  
</div>

---

## 🌟 About

Nomadsoft is a digital innovation studio where cutting-edge development meets practical business solutions. This repository contains the official landing page and portfolio website showcasing our diverse range of web and mobile applications.

We craft responsive web applications that solve real-world problems across multiple industries, powered by modern tech stacks and driven by creative vision.

**Live Site:** [https://nomadsoft.us](https://nomadsoft.us)

---

## 🚀 Featured Projects

### Web Applications
- **[FormBotz](https://formbotz.nomadsoft.us/)** - Conversational form builder with chat-style UX, conditional logic, and analytics
- **[iXplor](https://ixplor.app/)** - Multi-vendor marketplace for outdoor activities and tourism experiences
- **[MenuTraining](https://menutraining.com/)** - Restaurant staff training platform for menu knowledge and operations
- **[EasyTix](https://easytix.nomadsoft.us/)** - Trouble ticketing system for small to medium businesses

### Mobile Applications (iOS)
- **[BarVibez](https://barvibez.app/)** - Cocktail recipe app with 2300+ recipes and bar inventory management
- **[Fridge Raid](https://nomadsoft.us/fridge-raid)** - AI-powered recipe matcher with 500+ recipes and OCR import
- **[Quotable](https://apps.apple.com/us/app/quotable-by-nomadsoft/id6749051384)** - Curated quotes app with 5000+ quotes and offline support

### Content Platforms
- **[iXplor Merch](https://shop.ixplor.app/)** - E-commerce store for outdoor enthusiast gear
- **[iXplor Travel](https://travel.ixplor.app)** - Travel blog with destination guides and tips

---

## 🛠️ Tech Stack

This landing page is built with:

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://reactjs.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [Resend](https://resend.com/)
- **Deployment:** Self-hosted on AWS EC2 with PM2
- **Language:** JavaScript/JSX

---

## 📋 Features

### 🎨 Modern Design
- Responsive layout optimized for all devices
- Smooth scroll animations with Framer Motion
- Dark theme with custom color palette
- Interactive portfolio showcase with lightbox gallery

### 📧 Contact Form
- Integrated contact form with email notifications
- Support for URL query parameters to prefill fields
- Application-specific contact routing
- RevenueCat ID support for app users

### 🔗 URL Prefill Parameters
Link directly to the contact form with pre-populated data:

**Supported Parameters:**
- `firstName` or `firstname` - User's first name
- `lastName` or `lastname` - User's last name
- `email` - User's email address
- `application` or `app` - Application name (e.g., "BarVibez", "Fridge Raid")
- `revenueCatId` or `rcId` - RevenueCat user ID
- `message` - Pre-filled message or comment text

**Example URLs:**
```
https://nomadsoft.us/contact?firstName=John&lastName=Doe&email=john@example.com&application=BarVibez&revenueCatId=abc123

https://nomadsoft.us/#contact?app=Fridge%20Raid&rcId=xyz789&message=AppCrash:%20
```

### 📱 Pages
- **Home** (`/`) - Hero section, portfolio, technology overview, and contact form
- **Contact** (`/contact`) - Standalone contact page
- **Support** (`/support`) - Support contact page
- **Fridge Raid** (`/fridge-raid`) - Detailed project showcase
- **About Niko** (`/niko`) - Developer biography and contact
- **Privacy Policy** (`/privacy`) - GDPR-compliant privacy policy

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NomadNiko/nomadsoft.git
cd nomadsoft
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env` file with required environment variables:
```env
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM_NAME=Nomadsoft
EMAIL_FROM_ADDRESS=no-reply@nomadsoft.us
EMAIL_RECIPIENT=your@email.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nomadsoft/
├── app/                      # Next.js App Router pages
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── contact/             # Contact page
│   ├── fridge-raid/         # Fridge Raid showcase
│   ├── niko/                # Developer bio page
│   ├── privacy/             # Privacy policy
│   ├── support/             # Support page
│   └── page.jsx             # Home page
├── components/              # Reusable components
│   └── navbar.jsx           # Navigation bar
├── sections/                # Page sections
│   ├── hero-section.jsx     # Hero/story section
│   ├── portfolio-section.jsx # Portfolio showcase
│   ├── technology-section.jsx # Tech overview
│   └── contact-section.jsx  # Contact form
├── lib/
│   └── utils/
│       └── email.js         # Email utility functions
├── public/
│   └── images/              # Static assets
└── styles/
    └── globals.css          # Global styles
```

---

## 🎨 Color Palette

```css
--color-nomad-navy: #0f172a      /* Primary dark background */
--color-nomad-blue: #1e40af      /* Secondary blue */
--color-nomad-light-blue: #3b82f6 /* Accent light blue */
```

---

## 📧 Contact Form Integration

The contact form uses Resend for email delivery and supports prefilling via URL parameters. Perfect for:
- iOS app support links
- Deep linking from mobile apps
- Pre-populated bug reports
- Customer support workflows

---

## 🌐 Deployment

This site is deployed on AWS EC2 using PM2 for process management:

```bash
# Build the application
npm run build

# Start with PM2
pm2 start npm --name "nomadsoft" -- start

# Restart after updates
pm2 restart nomadsoft
```

---

## 📄 License

Copyright © 2026 Nomadsoft. All rights reserved.

---

## 👤 About the Developer

**Niko** is a versatile IT professional with extensive experience in technical support, cloud engineering, and system administration. Specializing in full-stack development, DevOps, and creating practical solutions for real-world problems.

[Learn more about Niko →](https://nomadsoft.us/niko)

---

## 🔗 Links

- **Website:** [nomadsoft.us](https://nomadsoft.us)
- **GitHub:** [@NomadNiko](https://github.com/NomadNiko)
- **Email:** [Contact Form](https://nomadsoft.us/contact)

---

<div align="center">
  
  **Built with ❤️ by Nomadsoft**
  
  *For Nomads, By Nomads*
  
</div>
