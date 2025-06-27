"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FileText,
  RefreshCcw,
  Receipt,
  Stamp,
  AlertTriangle,
  Globe,
  PenLine,
  Ban,
  FileMinus2,
  ArrowRight,
  Star,
} from "lucide-react";

// Tilt hook for 3D card effect
const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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

// Updated GST services data with hex colors
const gstServices = [
  { name: "GST Registration", slug: "gst-registration", description: "Get your business GST registered. Mandatory for businesses above ₹40 lakhs turnover.", icon: FileText, color: "#3b82f6", featured: true },
  { name: "GST Return Filing", slug: "gst-return", description: "Timely and accurate filing of GSTR-1, GSTR-3B, and others to avoid penalties.", icon: RefreshCcw, color: "#22c55e" },
  { name: "E-Invoicing", slug: "e-invoicing", description: "Compliant electronic invoicing setup for businesses with turnover above ₹5 crores.", icon: Receipt, color: "#8b5cf6" },
  { name: "LUT Filing", slug: "lut-form", description: "File Letter of Undertaking to export goods/services without paying IGST.", icon: Stamp, color: "#eab308" },
  { name: "GST Notice Reply", slug: "gst-notice", description: "Expert help to draft replies and resolve GST notice issues with confidence.", icon: AlertTriangle, color: "#ef4444" },
  { name: "GST for Foreigners", slug: "gst-foreigners", description: "We help foreign individuals and companies register under GST in India.", icon: Globe, color: "#14b8a6" },
  { name: "GST Amendment", slug: "gst-amendment", description: "Need to change details in your GST certificate? We handle it end-to-end.", icon: PenLine, color: "#ec4899" },
  { name: "GST Revocation", slug: "gst-revocation", description: "If your GST was cancelled, we help you file for revocation and get it active again.", icon: Ban, color: "#6b7280" },
  { name: "GSTR-10 Filing", slug: "gstr-10", description: "Final return filing when you cancel your GST registration. Mandatory to avoid penalties.", icon: FileMinus2, color: "#84cc16" },
];


// Reusable 3D Service Card Component
const GSTServiceCard = ({ service }) => {
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
            Essential
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
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};


// Component for the 3D heading
const Heading = ({ children }) => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px" 
      }}
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

export default function GSTServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-800 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-800 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center mb-12"
        >
            <Heading>Simplify Your GST Journey</Heading>
            <p className="text-md text-gray-400 max-w-2xl mx-auto">
                From registration to returns, invoicing to notices—we handle your GST needs smoothly and professionally so you can stay compliant and avoid penalties.
            </p>
        </motion.div>

        {/* Using a responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {gstServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <GSTServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Unsure where to start?{" "}
            <a href="#" className="font-semibold text-blue-400 hover:underline">
              Contact our GST experts
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(80px, -100px) scale(1.2); }
          66% { transform: translate(-50px, 50px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}
