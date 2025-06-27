"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FileBarChart2,
  FileText,
  FilePlus,
  User,
  Building,
  UserCog,
  FileSearch,
  ShieldAlert,
  Banknote,
  Stamp,
  FolderKanban,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

// Tilt hook
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

const taxServices = [
  { name: "E-Filing", description: "File all your tax forms online securely through the government-authorized portal.", icon: FileBarChart2, color: "#6366f1" },
  { name: "Business Filing", description: "ITR filing for businesses including firms, LLPs, and companies as per Income Tax Act.", icon: Building, color: "#22c55e" },
  { name: "ITR-1 (Sahaj)", description: "For salaried individuals with income up to ₹50L, single house property & no business.", icon: User, color: "#0ea5e9" },
  { name: "ITR-2", description: "For individuals/HUFs with capital gains, foreign income, or more than one property.", icon: FileText, color: "#f59e0b" },
  { name: "ITR-3", description: "For individuals and HUFs having income from business or profession.", icon: FilePlus, color: "#d946ef" },
  { name: "ITR-4 (Sugam)", description: "For freelancers or small businesses under presumptive taxation scheme.", icon: UserCog, color: "#14b8a6" },
  { name: "ITR-5", description: "Applicable to LLPs, AOPs, BOIs and other non-individual taxpayers (excluding companies).", icon: FolderKanban, color: "#8b5cf6" },
  { name: "ITR-6", description: "For companies other than those claiming exemption under section 11 (charitable).", icon: ClipboardCheck, color: "#f43f5e" },
  { name: "ITR-7", description: "For trusts, political parties, institutions claiming exemption under sections 139(4A) to 139(4F).", icon: Stamp, color: "#3b82f6" },
  { name: "15CA / 15CB", description: "Required for remittances to foreign entities to ensure tax compliance.", icon: Banknote, color: "#f97316" },
  { name: "TAN Registration", description: "Get your Tax Deduction and Collection Account Number for TDS compliance.", icon: ShieldAlert, color: "#ef4444" },
  { name: "TDS Filing", description: "Quarterly TDS/TCS return filing for salary, rent, contractor and other deductions.", icon: FileSearch, color: "#10b981" },
  { name: "Tax Notice Assistance", description: "Received a tax notice? We help respond professionally with proper representation.", icon: FileBarChart2, color: "#64748b" },
];

const TaxServiceCard = ({ service }) => {
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
            <div
              className="p-2 w-max rounded-md shadow"
              style={{ backgroundColor: `${service.color}33`, border: `1px solid ${service.color}88` }}
            >
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

const Heading = ({ children }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="max-w-4xl mx-auto text-center mb-12"
    >
      <motion.h1
        style={{ transform: "translateZ(50px)" }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-3"
      >
        {children}
      </motion.h1>
    </motion.div>
  );
};

export default function TaxServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 px-4 py-16 relative overflow-hidden">
      {/* Blurred Backgrounds */}
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
          <Heading>Stress-Free Tax Filing Services</Heading>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            Whether you’re salaried, self-employed, a company or trust—we offer expert tax solutions from ITR filing to TAN and TDS compliance.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {taxServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <TaxServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Need help choosing the right tax service?{" "}
            <a href="/contact" className="font-semibold text-blue-400 hover:underline">
              Contact our experts
            </a>
            .
          </p>
        </div>
      </div>

      {/* Global Styles */}
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
}
