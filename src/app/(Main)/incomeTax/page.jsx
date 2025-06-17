"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const taxServices = [
  {
    name: "E-Filing",
    description: "File all your tax forms online securely through the government-authorized portal.",
    icon: FileBarChart2,
    color: "from-blue-600 via-purple-600 to-pink-500",
  },
  {
    name: "Business Filing",
    description: "ITR filing for businesses including firms, LLPs, and companies as per Income Tax Act.",
    icon: Building,
    color: "from-green-600 via-emerald-500 to-lime-400",
  },
  {
    name: "ITR-1 (Sahaj)",
    description: "For salaried individuals with income up to ₹50L, single house property & no business.",
    icon: User,
    color: "from-sky-500 via-indigo-500 to-blue-500",
  },
  {
    name: "ITR-2",
    description: "For individuals/HUFs with capital gains, foreign income, or more than one property.",
    icon: FileText,
    color: "from-orange-400 via-amber-500 to-yellow-400",
  },
  {
    name: "ITR-3",
    description: "For individuals and HUFs having income from business or profession.",
    icon: FilePlus,
    color: "from-pink-500 via-fuchsia-500 to-violet-500",
  },
  {
    name: "ITR-4 (Sugam)",
    description: "For freelancers or small businesses under presumptive taxation scheme.",
    icon: UserCog,
    color: "from-cyan-500 via-teal-400 to-green-400",
  },
  {
    name: "ITR-5",
    description: "Applicable to LLPs, AOPs, BOIs and other non-individual taxpayers (excluding companies).",
    icon: FolderKanban,
    color: "from-purple-500 via-indigo-600 to-sky-500",
  },
  {
    name: "ITR-6",
    description: "For companies other than those claiming exemption under section 11 (charitable).",
    icon: ClipboardCheck,
    color: "from-rose-500 via-red-500 to-orange-400",
  },
  {
    name: "ITR-7",
    description: "For trusts, political parties, institutions claiming exemption under sections 139(4A) to 139(4F).",
    icon: Stamp,
    color: "from-indigo-500 via-blue-500 to-green-400",
  },
  {
    name: "15CA / 15CB",
    description: "Required for remittances to foreign entities to ensure tax compliance.",
    icon: Banknote,
    color: "from-yellow-400 via-amber-500 to-orange-500",
  },
  {
    name: "TAN Registration",
    description: "Get your Tax Deduction and Collection Account Number for TDS compliance.",
    icon: ShieldAlert,
    color: "from-red-500 via-rose-500 to-pink-500",
  },
  {
    name: "TDS Filing",
    description: "Quarterly TDS/TCS return filing for salary, rent, contractor and other deductions.",
    icon: FileSearch,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    name: "Tax Notice Assistance",
    description: "Received a tax notice? We help respond professionally with proper representation.",
    icon: FileBarChart2,
    color: "from-gray-600 via-slate-600 to-zinc-600",
  },
];

export default function TaxServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
          Stress-Free Tax Filing Services
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Whether you’re salaried, self-employed, a company or trust—we offer expert tax solutions from ITR filing to TAN and TDS compliance.
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {taxServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform"
          >
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full shadow-md bg-gradient-to-r ${service.color}`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
            <p className="text-gray-700 text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
