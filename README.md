# 🖥️ Nimix Computers - Professional Computer Store Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-11.1-FFCA28?style=for-the-badge&logo=firebase)

**A modern, full-stack e-commerce website for Nimix Computers**  
*Nagpur's trusted technology partner since 2007*

[Live Demo](#) | [Report Bug](../../issues) | [Request Feature](../../issues)

</div>

---

## 📖 About The Project

Nimix Computers is a cutting-edge e-commerce platform showcasing computer hardware, accessories, and services. Built with modern web technologies, the site features smooth NVIDIA-inspired animations, responsive design, and a comprehensive business showcase with integrated Firebase backend services.

### ✨ Key Features

- 🎭 **Stunning Animations** - Smooth scroll-reveal and NVIDIA-inspired animations using Framer Motion
- 🎨 **Modern UI/UX** - Glass morphism design with interactive glow effects
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🛒 **Product Catalog** - Dynamic product showcase with detailed information
- 🔧 **Service Listings** - Comprehensive service offerings and solutions
- 📬 **Contact Integration** - Firebase-powered contact form with real-time submissions
- 🗺️ **Google Maps** - Embedded location map for easy navigation
- 🔐 **Firebase Backend** - Authentication, Firestore database, and cloud storage
- 🚀 **SEO Optimized** - Built-in Next.js SEO features for better discoverability
- 📊 **Analytics Ready** - Firebase Analytics integration for insights

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icon system
- **[clsx](https://github.com/lukeed/clsx)** - Conditional CSS classes utility

### Backend & Services
- **[Firebase 11](https://firebase.google.com/)** - Complete backend solution
  - Firestore - NoSQL cloud database
  - Authentication - User management
  - Cloud Storage - File uploads
  - Analytics - User insights

### Development Tools
- ESLint - Code linting
- PostCSS & Autoprefixer - CSS processing
- TypeScript - Static type checking

---

## 📂 Project Structure

```
nimix-computers/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── products/     # Products page
│   │   ├── services/     # Services page
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   └── privacy/      # Privacy policy
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions & Firebase config
│   └── styles/          # Global styles
├── public/              # Static assets
├── .next/              # Next.js build output
├── package.json        # Dependencies & scripts
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase account** (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharvayuzade/Nimix-Computers-Website.git
   cd Nimix-Computers-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore, Authentication, Storage, and Analytics
   - Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero slideshow, featured products, and services |
| **Products** | `/products` | Complete product catalog with categories |
| **Services** | `/services` | Service offerings and solutions |
| **About** | `/about` | Company history and team information |
| **Contact** | `/contact` | Contact form and location map |
| **Privacy Policy** | `/privacy` | Privacy policy and terms |

---

## 🎨 Design Features

- **Hero Slideshow** - Auto-playing carousel with smooth transitions
- **Scroll Animations** - Elements reveal on scroll for engaging UX
- **Glass Morphism** - Modern frosted glass UI effects
- **Interactive Glows** - Dynamic lighting effects on hover
- **Responsive Grid** - Adaptive layouts for all screen sizes
- **Custom Components** - Reusable, well-documented components

---

## 🔧 Configuration

### Firebase Configuration

Update `src/lib/firebase.ts` with your Firebase credentials:

```typescript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
```

### Tailwind Configuration

Customize theme in `tailwind.config.ts` for brand-specific colors, fonts, and styles.

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is **private** and proprietary. All rights reserved.

---

## 📧 Contact

**Sharvayu Zade** - [@sharvayuzade](https://github.com/sharvayuzade)

**Project Link:** [https://github.com/sharvayuzade/Nimix-Computers-Website](https://github.com/sharvayuzade/Nimix-Computers-Website)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase](https://firebase.google.com/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

Made with ❤️ by [Sharvay Uzade](https://github.com/sharvayuzade)

⭐ Star this repo if you find it helpful!

</div>
