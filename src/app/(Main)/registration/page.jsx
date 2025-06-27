"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Store,
  FileText,
  ReceiptText,
  Banknote,
  ShieldAlert,
  BadgePercent,
  BookOpen,
  PenTool,
  Briefcase,
  Landmark,
  ShieldCheck,
  Fingerprint,
  ScrollText,
  Book,
  Globe,
  ArrowRight,
  Star,
} from "lucide-react";

// Tilt hook for 3D card effect
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Increased stiffness and damping for a faster, more responsive animation
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!e.currentTarget) return;
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

// Updated services data with hex colors for the new style
const services = [
  { name: "Startup India", slug: "startupIndia", description: "Govt. recognition & benefits for DPIIT-registered startups.", icon: Store, color: "#a855f7" },
  { name: "Trade License", slug: "tradeLicense", description: "Local authority permit for running a business legally.", icon: FileText, color: "#6366f1" },
  { name: "FSSAI Registration", slug: "fSSAIRegistration", description: "Food safety registration for small food businesses (FBOs).", icon: ReceiptText, color: "#10b981" },
  { name: "FSSAI License", slug: "fSSAILicense", description: "Central/State license for medium and large food businesses.", icon: FileText, color: "#ec4899" },
  { name: "ICEGATE", slug: "iCEGATERegistration", description: "Import/export registration via Indian Customs EDI portal.", icon: Banknote, color: "#eab308" },
  { name: "ISO", slug: "iSORegistration", description: "Get ISO-certified for global quality & process standards.", icon: ShieldAlert, color: "#3b82f6", featured: true },
  { name: "PF Registration", slug: "pFRegistration", description: "Provident Fund registration for employee retirement benefits.", icon: BadgePercent, color: "#d946ef" },
  { name: "ESI Registration", slug: "eSIRegistration", description: "Employee State Insurance for worker health protection.", icon: BookOpen, color: "#10b981" },
  { name: "Professional Tax", slug: "professionalTaxRegistration", description: "Tax registration for salaried individuals & professionals.", icon: PenTool, color: "#f97316" },
  { name: "RCMC", slug: "rCMCRegistration", description: "Registration-Cum-Membership Certificate for exporters.", icon: Briefcase, color: "#0ea5e9" },
  { name: "12A & 80G", slug: "Registration_12A_and_80G", description: "Get tax exemption & donation benefits for your NGO.", icon: Landmark, color: "#ef4444" },
  { name: "Digital Signature", slug: "digitalSignature", description: "Get a DSC for signing documents securely and legally online.", icon: Fingerprint, color: "#22d3ee" },
  { name: "Shop Act", slug: "shopActRegistration", description: "Register your shop/establishment under local law.", icon: ScrollText, color: "#ec4899" },
  { name: "Udyam", slug: "udyamRegistration", description: "MSME registration for businesses under Udyam portal.", icon: Book, color: "#6366f1" },
  { name: "FCRA", slug: "fCRARegistration", description: "Foreign Contribution Regulation Act license for NGOs.", icon: Globe, color: "#14b8a6" },
];

// Reusable card component with the premium style
const RegistrationCard = ({ service }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  const Icon = service.icon;

  return (
    <a href={`/service/${service.slug}`} className="block cursor-pointer group">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full min-h-[220px] rounded-2xl bg-[#161B22]/80 backdrop-blur-sm border border-gray-800 shadow-xl transition-all duration-300 group-hover:border-blue-500/80 group-hover:shadow-blue-500/20"
      >
        {service.featured && (
          <div className="absolute -top-3 right-4 z-20 flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            <Star size={12} className="fill-white" />
            Featured
          </div>
        )}
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
            background: `radial-gradient(circle at 50% 50%, ${service.color}1A, transparent 60%)`,
          }}
          className="absolute inset-3 p-4 rounded-xl flex flex-col"
        >
          <div>
            <div className="p-2 w-max rounded-md shadow" style={{ backgroundColor: `${service.color}33`, border: `1px solid ${service.color}88`}}>
              <Icon className="w-6 h-6" style={{ color: service.color }} />
            </div>
            <h3 className="text-lg font-semibold text-white mt-2">{service.name}</h3>
            <p className="text-gray-400 mt-1 text-sm leading-snug">{service.description}</p>
          </div>
          <div className="mt-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>
            <div className="flex items-center justify-end text-sm font-semibold text-blue-300">
              Details
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default function RegistrationsPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 mb-3">
            Business Registrations & Licenses
          </h1>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Explore essential licenses, certificates, and government registrations to launch, operate, and legitimize your business in India.
          </p>
        </motion.div>

        {/* Using 4 columns for larger screens to better fit the content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <RegistrationCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Need help?{" "}
            <a href="#" className="font-semibold text-blue-400 hover:underline">
              Contact our experts
            </a>{" "}
            for guidance.
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(80px, -100px) scale(1.2); }
          66% { transform: translate(-50px, 50px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}
