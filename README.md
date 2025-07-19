# Fusorum Billing ERP - Landing Page

A modern, responsive landing page for Fusorum Billing ERP built with Next.js, React, Tailwind CSS, and Framer Motion. This project showcases a comprehensive ERP solution designed specifically for the apparel and footwear industry.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Animated sections with scroll-triggered effects
- **Modular Architecture**: Well-organized component structure
- **Performance Optimized**: Built with Next.js App Router
- **Accessibility**: Following best practices for web accessibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: \`node --version\`

2. **VS Code**
   - Download from: https://code.visualstudio.com/

3. **Git** (optional but recommended)
   - Download from: https://git-scm.com/

## 🚀 Getting Started

### Step 1: Create Project Directory
\`\`\`bash
# Open terminal/command prompt and create a new directory
mkdir fusorum-billing-erp
cd fusorum-billing-erp
\`\`\`

### Step 2: Initialize Next.js Project
\`\`\`bash
# Create a new Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
\`\`\`

When prompted, choose:
- ✅ Yes to TypeScript
- ✅ Yes to ESLint
- ✅ Yes to Tailwind CSS
- ✅ Yes to \`src/\` directory
- ✅ Yes to App Router
- ✅ Yes to import alias

### Step 3: Install Required Dependencies
\`\`\`bash
# Install additional dependencies
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
\`\`\`

### Step 4: Install shadcn/ui Components
\`\`\`bash
# Initialize shadcn/ui
npx shadcn@latest init
\`\`\`

When prompted, choose:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

\`\`\`bash
# Install required shadcn/ui components
npx shadcn@latest add button card
\`\`\`

### Step 5: Open in VS Code
\`\`\`bash
# Open the project in VS Code
code .
\`\`\`

### Step 6: Create Component Files

Create the following folder structure in VS Code:

\`\`\`
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── WhySection.jsx
│   ├── BusinessSegmentsSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── DownloadFormSection.jsx
│   ├── TeamSection.jsx
│   ├── AwardsSection.jsx
│   ├── ContactFormSection.jsx
│   ├── Footer.jsx
│   └── ChatWidget.jsx
└── public/
    └── images/
        └── (your image files)
\`\`\`

### Step 7: Copy Component Code

1. **Replace \`src/app/page.tsx\`** with the main page component code
2. **Create each component file** in \`src/components/\` and copy the respective code
3. **Add images** to \`public/images/\` folder (you can use placeholder images for now)

### Step 8: Update Configuration Files

**Update \`tailwind.config.ts\`:**
\`\`\`typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
\`\`\`

### Step 9: Install Additional Dependencies
\`\`\`bash
# Install tailwindcss-animate if not already installed
npm install tailwindcss-animate
\`\`\`

### Step 10: Run the Development Server
\`\`\`bash
# Start the development server
npm run dev
\`\`\`

### Step 11: View Your Application

Open your browser and go to: **http://localhost:3000**

## 🛠️ Recommended VS Code Extensions

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Auto Rename Tag**
4. **Bracket Pair Colorizer**
5. **Prettier - Code formatter**
6. **ESLint**
7. **GitLens**

## 📁 Project Structure

\`\`\`
fusorum-billing-erp/
├── public/
│   ├── images/
│   │   ├── fusorum-logo.png
│   │   ├── business-people-bg.png
│   │   ├── tech-outsourcing-bg.png
│   │   ├── team-photo-bg.png
│   │   └── (other images...)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WhySection.jsx
│   │   ├── BusinessSegmentsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── DownloadFormSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── AwardsSection.jsx
│   │   ├── ContactFormSection.jsx
│   │   ├── Footer.jsx
│   │   └── ChatWidget.jsx
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
\`\`\`

## 🎨 Component Overview

### Core Components

- **Header**: Navigation bar with logo and menu items
- **HeroSection**: Main landing section with animated images and CTAs
- **ServicesSection**: ERP modules and solutions showcase
- **WhySection**: Benefits and features of Fusorum ERP
- **BusinessSegmentsSection**: Industry segments served
- **TestimonialsSection**: Customer testimonials with carousel
- **DownloadFormSection**: Free guide download form
- **TeamSection**: Company values and implementation ease
- **AwardsSection**: Awards and achievements display
- **ContactFormSection**: Contact and inquiry form
- **Footer**: Complete footer with links and contact information
- **ChatWidget**: Floating chat support widget

### Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user experience
- **Scroll Animations**: Elements animate as they come into view
- **Interactive Elements**: Hover effects and micro-interactions
- **Modular Architecture**: Easy to maintain and extend

## 🐛 Common Issues & Solutions

### Issue 1: Module not found errors
\`\`\`bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Issue 2: Tailwind styles not working
\`\`\`bash
# Make sure Tailwind is properly configured
npm run build
\`\`\`

### Issue 3: Image loading issues
- Make sure images are in the \`public/images/\` folder
- Use correct paths starting with \`/images/\`

### Issue 4: TypeScript errors
- Convert \`.jsx\` files to \`.tsx\` if needed
- Add proper type definitions

## 📝 Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Amplify console
- **Railway**: Connect and deploy from GitHub

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **shadcn/ui** for beautiful UI components
- **Lucide React** for the icon library

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Common Issues](#-common-issues--solutions) section
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Contact the development team

---

**Happy Coding! 🎉**

Built with ❤️ using Next.js, React, and Tailwind CSS
