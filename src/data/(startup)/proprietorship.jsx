"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  ThumbsUp,
  Award,
  Star,
  CheckCircle,
  Briefcase,
  FilePlus,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["42.5deg", "-42.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-42.5deg", "42.5deg"]);

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

function Proprietorship() {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

  const highlights = [
    {
      icon: <Star className="w-10 h-10 text-yellow-400" />,
      title: "Quick & Easy Process",
      text: "Launch your business swiftly with our streamlined, user-friendly registration process.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
      title: "100% Legal Validity",
      text: "Gain full legal recognition, ensuring your business is compliant with all government norms.",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-rose-400" />,
      title: "Affordable Setup",
      text: "Start your entrepreneurial journey with minimal investment and zero hidden costs.",
    },
  ];

  const processSteps = [
    { icon: <FilePlus size={32} />, text: "Fill Out Application Form" },
    { icon: <Briefcase size={32} />, text: "Upload Required Documents" },
    { icon: <UserCheck size={32} />, text: "Expert Review & Filing" },
    { icon: <Award size={32} />, text: "Receive Your Certificate" },
  ];

  const benefits = [
    "No Corporate Filings",
    "Full Ownership Control",
    "Simple Bank Account Setup",
    "Ideal for Freelancers",
    "Perfect for Traders",
    "Convertible Structure",
  ];

  const documents = [
    "PAN Card of Proprietor",
    "Aadhar Card of Proprietor",
    "Passport Size Photograph",
    "Business Address Proof (e.g., Rent Agreement)",
    "Bank Account Statement/Cancelled Cheque",
  ];

  return (
    <div className="text-white bg-gray-900 min-h-screen font-sans overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-6 min-h-[70vh]">
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              Start Your Business Journey Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-gray-300 text-lg"
            >
              With a Sole Proprietorship, you can establish your business identity with minimal formalities, fast documentation, and affordable compliance.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.5)" }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-white shadow-lg"
            >
              <Link href="/contact">Get Started</Link>
            </motion.button>
          </div>

          {/* 3D Card */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-md h-80 rounded-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600 shadow-2xl"
          >
            <div
              style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
              className="absolute inset-5 flex flex-col items-center justify-center text-center"
            >
              <Briefcase className="w-20 h-20 text-pink-400 drop-shadow-lg" />
              <h2 className="text-2xl font-bold mt-3 text-white">Sole Proprietorship</h2>
              <p className="text-gray-400 mt-2 text-sm">The simplest way to run your business.</p>
            </div>
          </motion.div>
        </section>

        {/* Highlights */}
        <section className="py-12 px-4 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center flex flex-col items-center shadow-lg hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-4 bg-gray-700 rounded-full mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            A Simple 4-Step Process
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 hidden md:block" style={{ transform: 'translateY(-50%)' }}></div>
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-green-400 hidden md:block" style={{ transform: 'translateY(-50%)', width: '75%' }}></div>

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center gap-2 text-center z-10"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 border-2 border-cyan-400 text-cyan-400 shadow-md">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-white">Step {i + 1}</h4>
                <p className="text-gray-400 text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits & Documents */}
        <section className="py-12 px-4 bg-gray-900 bg-opacity-50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Proprietorship?</h2>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gray-800 p-3 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-white text-sm font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Documents You'll Need</h2>
              <ul className="space-y-2">
                {documents.map((doc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-2 text-gray-300 text-base"
                  >
                    <FileText className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold text-white">Ready to Start?</h2>
          <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">Let's turn your business idea into a reality. Our experts are here to guide you every step of the way.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(80, 230, 217, 0.6)" }}
            className="mt-6 px-10 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full font-bold text-white text-lg shadow-xl"
          >
            Register Your Business Now
          </motion.button>
        </section>
      </div>

      {/* Blob animation */}
      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Proprietorship;
