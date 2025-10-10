const projects: any[] = [
  // 1️⃣ DoorHub
  {
    id: 1,
    url: "doorhub",
    banner:
      "/Logo.png",
    title: "DoorHub",
    type: "Mobile App",
    description:
      "A Flutter-based mobile app connecting users with nearby handymen. Includes authentication, real-time chat, and booking using Google Maps.",
    tags: [{ name: "Client Project" }],
    tech: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Google Maps API" }],
    status: "Completed",
    year: "2022",
  },

  // 2️⃣ School Management System
  {
    id: 2,
    url: "https://school-management-lime-nine.vercel.app",
    banner:
      "/ss.png",
    title: "School Management System",
    type: "Web Platform",
    description:
      "An advanced school system with roles for admin, teachers, parents, and students. Includes attendance, performance, Mobile Money fees, and AI-powered analytics.",
    tags: [{ name: "Enterprise" }],
    tech: [{ name: "Next.js" }, { name: "Supabase" }, { name: "Tailwind CSS" }],
    status: "In Progress",
    year: "2025",
  },

  // 3️⃣ eLearning Platform
  {
    id: 3,
    url: "https://regular-academy-web2.vercel.app/",
    banner:
      "/ee.png",
    title: "eLearning Platform",
    type: "Website",
    description:
      "An eLearning system offering online courses, video lessons, quizzes, and payments via Paystack. Designed for secondary and tertiary schools in Ghana.",
    tags: [{ name: "Education" }],
    tech: [{ name: "React" }, { name: "Fastapi" }, { name: "PostgreSQL" }, { name: "Paystack" }],
    status: "Completed",
    year: "2024",
  },

  // 4️⃣ Payroll System
  {
    id: 4,
    url: "payroll-system",
    banner:
      "https://images.unsplash.com/photo-1620812098433-67c7d1a3ad89?auto=format&fit=crop&w=1200&q=80",
    title: "Payroll Management System",
    type: "Mobile App",
    description:
      "Payroll app for automating salary computation, deductions, and payslip generation. Includes secure authentication and reporting tools.",
    tags: [{ name: "Finance" }],
    tech: [{ name: "Flutter" }, { name: "Supabase" },],
    status: "Completed",
    year: "2024",
  },

  // 5️⃣ Rent It GH
  {
    id: 5,
    url: "rentitgh",
    banner:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: "Rent It GH",
    type: "Cross-Platform App",
    description:
      "A Ghana-based rental platform where users can post and rent items within 5 miles. Features escrow payments, location filters, and in-app chat.",
    tags: [{ name: "Marketplace" }],
    tech: [{ name: "Next.js" }, { name: "Supabase" }, { name: "Google Maps API" }, { name: "Flutter" }],
    status: "Prototype",
    year: "2025",
  },

  // 6️⃣ Regular Academy Admin Dashboard
  {
    id: 6,
    url: "academy-dashboard",
    banner:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    title: "Regular Academy Admin Dashboard",
    type: "Web App",
    description:
      "Admin dashboard for managing courses, blogs, users, and analytics for Regular Academy's platform. Includes pagination and dark mode.",
    tags: [{ name: "Admin Tools" }],
    tech: [{ name: "Next.js" }, { name: "Clerk Auth" }, { name: "Tailwind CSS" }],
    status: "Completed",
    year: "2024",
  },

  // 7️⃣ Microfinance (Susu & Loan Manager)
  {
    id: 7,
    url: "susu-loan-manager",
    banner:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437e6?auto=format&fit=crop&w=1200&q=80",
    title: "Susu & Loan Manager",
    type: "SaaS App",
    description:
      "A microfinance system that helps Susu collectors and credit unions manage member savings, loans, and repayments with automated SMS reminders.",
    tags: [{ name: "Fintech" }],
    tech: [{ name: "Next.js" }, { name: "PostgreSQL" }, { name: "Twilio API" }],
    status: "In Development",
    year: "2025",
  },

  // 8️⃣ AI Student Analytics
  {
    id: 8,
    url: "ai-student-analytics",
    banner:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
    title: "AI Student Analytics Engine",
    type: "AI System",
    description:
      "AI model predicting academic performance and recommending personalized study plans using TensorFlow and real-time data visualization.",
    tags: [{ name: "Artificial Intelligence" }],
    tech: [{ name: "Python" }, { name: "TensorFlow" }, { name: "Next.js" }],
    status: "Research",
    year: "2025",
  },

  // 9️⃣ Moving Company Website
  {
    id: 9,
    url: "https://pmoving-services.vercel.app/",
    banner:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80",
    title: "City Movers Ghana",
    type: "Website",
    description:
      "Corporate website for a Ghanaian moving company providing residential and commercial relocation services. Built with Payload CMS.",
    tags: [{ name: "Corporate" }],
    tech: [{ name: "Next.js" }, { name: "Payload CMS" }, { name: "PostgreSQL" }],
    status: "Completed",
    year: "2024",
  },

  // 🔟 AfriMart Marketplace
  {
    id: 10,
    url: "afrimart-marketplace",
    banner:
      "https://images.unsplash.com/photo-1515165562835-c3b8b67d2f12?auto=format&fit=crop&w=1200&q=80",
    title: "AfriMart Marketplace",
    type: "Web Platform",
    description:
      "Country-based marketplace for goods, housing, vehicles, and services with tiered seller subscriptions and mobile money payment integration.",
    tags: [{ name: "E-Commerce" }],
    tech: [{ name: "Next.js" }, { name: "Prisma" }, { name: "Supabase" }, { name: "Paystack" }],
    status: "In Progress",
    year: "2025",
  },

  // 11️⃣ Flutter Language Translator App
  {
    id: 11,
    url: "https://github.com/rafissaka/translator-app",
    banner:
      "/mana.png",
    title: "Language Translator App",
    type: "Mobile App",
    description:
      "A multilingual mobile app for instant translation between languages, speech recognition, and text-to-speech. Built for global travelers and learners.",
    tags: [{ name: "AI/ML" }],
    tech: [{ name: "Flutter" }, { name: "Google ML Kit" }],
    status: "Completed",
    year: "2024",
  },

  // 12️⃣ Construction Sales App
  {
    id: 12,
    url: "construction-sales",
    banner:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    title: "Construction Sales & Supply System",
    type: "Mobile + Web",
    description:
      "A two-part system — a Flutter app for construction suppliers and an admin web app for tracking sales, orders, and inventory.",
    tags: [{ name: "Logistics" }],
    tech: [{ name: "Flutter" }, { name: "Next.js" }, { name: "Supabase" }],
    status: "In Progress",
    year: "2025",
  },

  // 13️⃣ Admin Website for Construction App
  {
    id: 13,
    url: "construction-admin",
    banner:
      "https://images.unsplash.com/photo-1590420485286-891fa83a3b37?auto=format&fit=crop&w=1200&q=80",
    title: "Construction Admin Dashboard",
    type: "Admin Website",
    description:
      "Admin control panel for managing suppliers, sales reports, and analytics for the Construction Sales app.",
    tags: [{ name: "Admin Tools" }],
    tech: [{ name: "Next.js" }, { name: "Supabase" }, { name: "Tailwind CSS" }],
    status: "In Development",
    year: "2025",
  },

  // 14️⃣ E-Commerce Website
  {
    id: 14,
    url: "https://www.zipohub.com/",
    banner:
      "/ecommerce.png",
    title: "ZipoHub",
    type: "Website",
    description:
      "An online shopping platform built with Next.js and Supabase. Includes secure checkout, wishlist, and AI product recommendations.",
    tags: [{ name: "E-Commerce" }],
    tech: [{ name: "Next.js" }, { name: "Supabase" }, { name: "Tailwind CSS" }],
    status: "Completed",
    year: "2025",
  },

  // 15️⃣ E-Commerce Mobile App + Agent App
  {
    id: 15,
    url: "ecommerce-mobile",
    banner:
      "https://images.unsplash.com/photo-1556741533-f6acd647c6a6?auto=format&fit=crop&w=1200&q=80",
    title: "E-Commerce Mobile & Agent App",
    type: "Mobile App",
    description:
      "A React Native mobile app for customers and field agents to manage e-commerce orders, deliveries, and earnings. Features offline access and push notifications.",
    tags: [{ name: "Mobile Commerce" }],
    tech: [{ name: "React Native" }, { name: "Expo" }, { name: "Supabase" }],
    status: "In Development",
    year: "2025",
  },

  // 16️⃣ eLibrary Platform
  {
    id: 16,
    url: "https://elibrary-rosy.vercel.app/",
    banner:
      "/elibrary.png",
    title: "eLibrary Platform",
    type: "Web Platform",
    description:
      "A comprehensive digital library system with book cataloging, borrowing management, and digital reading features. Includes advanced search, user reviews, and admin controls for library staff.",
    tags: [{ name: "Education" }],
    tech: [{ name: "Next.js" }, { name: "PostgreSQL" }, { name: "Prisma" }, { name: "Supabase" }],
    status: "In Progress",
    year: "2025",
  },
];

export default projects;