"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const gstServices = [
  {
    name: "GST Registration",
    description:
      "Get your business GST registered quickly with expert guidance. Mandatory for businesses above ₹40 lakhs turnover.",
    icon: FileText,
    color: "from-blue-500 to-sky-400",
  },
  {
    name: "GST Return",
    description:
      "Timely and accurate filing of GSTR-1, GSTR-3B, and others. Avoid penalties and stay compliant.",
    icon: RefreshCcw,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "E-Invoicing",
    description:
      "Compliant electronic invoicing setup for businesses with turnover above ₹5 crores. Seamless integration support.",
    icon: Receipt,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "LUT Form",
    description:
      "File LUT (Letter of Undertaking) to export goods/services without paying IGST. Hassle-free process.",
    icon: Stamp,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "GST Notice",
    description:
      "Received a GST notice? Our experts help you draft replies and resolve issues with confidence.",
    icon: AlertTriangle,
    color: "from-red-500 to-rose-500",
  },
  {
    name: "Foreigners",
    description:
      "We help foreign individuals and companies register under GST in India with full compliance.",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Amendment",
    description:
      "Need to change details in your GST certificate (address, contact, etc.)? We handle it end-to-end.",
    icon: PenLine,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    name: "Revocation",
    description:
      "If your GST was cancelled, we help you file for revocation and get your registration active again.",
    icon: Ban,
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "GSTR-10",
    description:
      "Final return filing when you cancel your GST registration. Mandatory to avoid penalties.",
    icon: FileMinus2,
    color: "from-lime-500 to-green-500",
  },
];

export default function GSTServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-900 px-4 py-16">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
          Simplify Your GST Journey with Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're a new business or an established one, navigating GST can be complex. 
          We're here to make it simple — from registration to returns, invoicing to notices, 
          and everything in between.
        </p>
        <div className="mt-6 text-sm text-gray-500">
          <p>Stay compliant. Avoid penalties. Let us handle your GST needs smoothly and professionally.</p>
        </div>
      </motion.div>

      {/* GST Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gstServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="flex items-center justify-center mb-4">
              <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} shadow-md`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
            <p className="text-sm text-gray-700 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
