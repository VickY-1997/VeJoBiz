"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Landmark,
  UserPlus,
  PenSquare,
  MapPin,
  SmartphoneNfc,
  UserCog,
  UserMinus,
  FileCheck,
  FileDigit,
  FileText,
  BedDouble,
  FileSignature,
  FilePlus,
  FolderPlus,
  Users2,
  Banknote,
  Undo2,
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

const complianceServices = [
  { name: "Company Compliance", description: "Annual return filing, board meetings, and other ROC obligations for active private and public companies.", icon: ShieldCheck, color: "#3b82f6" },
  { name: "LLP Compliance", description: "LLPs must file Form 8 and Form 11 annually, even with zero transactions, to stay compliant.", icon: Landmark, color: "#10b981" },
  { name: "OPC Compliance", description: "One Person Companies (OPC) need annual filing and compliance with MGT-7A and AOC-4.", icon: UserPlus, color: "#06b6d4" },
  { name: "Name Change", description: "Legally change your company name via board resolution and ROC approval with proper documentation.", icon: PenSquare, color: "#a855f7" },
  { name: "Office Change", description: "Shift your registered office within or outside city/state with ROC form submission.", icon: MapPin, color: "#f59e0b" },
  { name: "DIN eKYC", description: "Directors must file DIN KYC annually by verifying OTP on mobile and email.", icon: SmartphoneNfc, color: "#2563eb" },
  { name: "DIN Reactivation", description: "Re-activate your DIN if deactivated for missing KYC by paying the penalty and refiling.", icon: UserCog, color: "#fbbf24" },
  { name: "Director Change", description: "Add or remove directors with proper board resolutions and ROC DIR-12 form.", icon: UserMinus, color: "#ec4899" },
  { name: "Remove Director", description: "Legally remove inactive or resigned directors with supporting documents.", icon: Undo2, color: "#ef4444" },
  { name: "ADT-1 Filing", description: "File ADT-1 within 15 days of AGM to report auditor appointment to ROC.", icon: FileCheck, color: "#84cc16" },
  { name: "DPT-3 Filing", description: "Annual return for loan/deposit details. Mandatory even for NIL returns.", icon: FileDigit, color: "#fb923c" },
  { name: "LLP Form 11", description: "Annual summary of LLP partners and activities due by May 30th every year.", icon: FileText, color: "#6366f1" },
  { name: "Dormant Status", description: "Apply for dormant company status if inactive, to avoid annual compliance burden.", icon: BedDouble, color: "#6b7280" },
  { name: "MOA Amendment", description: "Modify your company’s objectives or business activities through MOA changes.", icon: FileSignature, color: "#e879f9" },
  { name: "AOA Amendment", description: "Change internal governance rules like share transfer, voting rights etc.", icon: FilePlus, color: "#0ea5e9" },
  { name: "Capital Increase", description: "Raise your authorized or paid-up share capital with necessary resolutions and ROC filing.", icon: FolderPlus, color: "#06b6d4" },
  { name: "Share Transfer", description: "Transfer ownership of shares with legal documents, stamping, and board approvals.", icon: Users2, color: "#f472b6" },
  { name: "Demat of Shares", description: "Convert your physical shares into digital format as per MCA mandate.", icon: Banknote, color: "#059669" },
  { name: "Winding Up LLP", description: "Close your LLP through Form 24 and complete the strike-off process legally.", icon: Undo2, color: "#dc2626" },
];

const Card = ({ service }) => {
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
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-3"
      >
        {children}
      </motion.h1>
    </motion.div>
  );
};

export default function MCA() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 px-4 py-16 relative overflow-hidden">
      {/* Blurred Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <Heading>MCA Compliance Made Effortless</Heading>
        <p className="text-md text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Our compliance services ensure your company or LLP meets all legal obligations—on time, every time. From filings to amendments, we've got your back.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {complianceServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Need help choosing the right compliance service?{" "}
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
