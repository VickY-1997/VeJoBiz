"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  LayoutDashboard,
  Smartphone,
  Globe,
  User,
  FileText,
  ShoppingCart,
  ClipboardSignature,
  BarChart,
  TrendingUp,
  RefreshCw,
  Search,
  Paintbrush,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

const services = [
  { name: "Responsive Website Design", description: "Mobile-friendly layouts that look great on any device.", icon: Smartphone, color: "#22c55e" },
  { name: "Landing Page Development", description: "Conversion-focused pages for campaigns or ads.", icon: LayoutDashboard, color: "#f59e0b" },
  { name: "Business Website", description: "Professional websites for small and local businesses.", icon: Globe, color: "#3b82f6" },
  { name: "Personal Portfolio", description: "Modern portfolios to showcase your work.", icon: User, color: "#8b5cf6" },
  { name: "Blog Integration", description: "SEO-ready blog setup using headless CMS.", icon: FileText, color: "#ec4899" },
  { name: "E-Commerce Store", description: "Custom stores with product, payment & cart.", icon: ShoppingCart, color: "#14b8a6" },
  { name: "Custom Web Forms", description: "Quote, booking, or contact forms.", icon: ClipboardSignature, color: "#f97316" },
  { name: "Admin Dashboard UI", description: "Interactive dashboards built with React/Next.js.", icon: BarChart, color: "#6366f1" },
  { name: "SEO Optimization", description: "Better visibility with structured data & meta tags.", icon: Search, color: "#22d3ee" },
  { name: "Performance Optimization", description: "Improve speed, Lighthouse score, and caching.", icon: TrendingUp, color: "#ef4444" },
  { name: "Website Redesign", description: "Upgrade outdated sites with new UI/UX.", icon: Paintbrush, color: "#a855f7" },
  { name: "Maintenance & Support", description: "Ongoing updates and bug fixes.", icon: LifeBuoy, color: "#0ea5e9" },
];

const WebServiceCard = ({ service }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  const Icon = service.icon;

  return (
    <div className="group cursor-pointer">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full min-h-[220px] rounded-2xl bg-[#161B22]/80 backdrop-blur-sm border border-gray-800 shadow-xl transition-all duration-300 group-hover:border-blue-500/80 group-hover:shadow-blue-500/20"
      >
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
            background: `radial-gradient(circle at 50% 50%, ${service.color}1A, transparent 60%)`,
          }}
          className="absolute inset-3 p-4 rounded-xl flex flex-col"
        >
          <div>
            <div className="p-2 w-max rounded-md shadow" style={{ backgroundColor: `${service.color}33`, border: `1px solid ${service.color}88` }}>
              <Icon className="w-6 h-6" style={{ color: service.color }} />
            </div>
            <h3 className="text-lg font-semibold text-white mt-2">{service.name}</h3>
            <p className="text-gray-400 mt-1 text-sm leading-snug">{service.description}</p>
          </div>
          <div className="mt-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>
            <div className="flex items-center justify-end text-sm font-semibold text-blue-300">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 px-4 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-3">
            Build Powerful Websites That Perform
          </h1>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Whether you need a sleek portfolio, dynamic dashboard, or an SEO-friendly business website—we offer professional solutions for every idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <WebServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Ready to bring your idea online? {" "}
            <a href="/contact" className="font-semibold text-blue-400 hover:underline">
              Let’s build it together
            </a>
            .
          </p>
        </div>
      </div>

      <style jsx global>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: -2s;
        }
        .animation-delay-4000 {
          animation-delay: -4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(80px, -100px) scale(1.2);
          }
          66% {
            transform: translate(-50px, 50px) scale(0.8);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default WebDevelopmentPage;
