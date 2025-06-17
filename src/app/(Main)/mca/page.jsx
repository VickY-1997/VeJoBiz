"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const complianceServices = [
  {
    name: "Company Compliance",
    description:
      "Annual return filing, board meetings, and other ROC obligations for active private and public companies.",
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "LLP Compliance",
    description:
      "LLPs must file Form 8 and Form 11 annually, even with zero transactions, to stay compliant.",
    icon: Landmark,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "OPC Compliance",
    description:
      "One Person Companies (OPC) need annual filing and compliance with MGT-7A and AOC-4.",
    icon: UserPlus,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Name Change",
    description:
      "Legally change your company name via board resolution and ROC approval with proper documentation.",
    icon: PenSquare,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Office Change",
    description:
      "Shift your registered office within or outside city/state with ROC form submission.",
    icon: MapPin,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "DIN eKYC",
    description:
      "Directors must file DIN KYC annually by verifying OTP on mobile and email.",
    icon: SmartphoneNfc,
    color: "from-blue-600 to-cyan-400",
  },
  {
    name: "DIN Reactivation",
    description:
      "Re-activate your DIN if deactivated for missing KYC by paying the penalty and refiling.",
    icon: UserCog,
    color: "from-amber-500 to-yellow-400",
  },
  {
    name: "Director Change",
    description:
      "Add or remove directors with proper board resolutions and ROC DIR-12 form.",
    icon: UserMinus,
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "Remove Director",
    description:
      "Legally remove inactive or resigned directors with supporting documents.",
    icon: Undo2,
    color: "from-red-500 to-red-700",
  },
  {
    name: "ADT-1 Filing",
    description:
      "File ADT-1 within 15 days of AGM to report auditor appointment to ROC.",
    icon: FileCheck,
    color: "from-lime-500 to-green-400",
  },
  {
    name: "DPT-3 Filing",
    description:
      "Annual return for loan/deposit details. Mandatory even for NIL returns.",
    icon: FileDigit,
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "LLP Form 11",
    description:
      "Annual summary of LLP partners and activities due by May 30th every year.",
    icon: FileText,
    color: "from-indigo-400 to-blue-400",
  },
  {
    name: "Dormant Status",
    description:
      "Apply for dormant company status if inactive, to avoid annual compliance burden.",
    icon: BedDouble,
    color: "from-gray-500 to-slate-600",
  },
  {
    name: "MOA Amendment",
    description:
      "Modify your company’s objectives or business activities through MOA changes.",
    icon: FileSignature,
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    name: "AOA Amendment",
    description:
      "Change internal governance rules like share transfer, voting rights etc.",
    icon: FilePlus,
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "Capital Increase",
    description:
      "Raise your authorized or paid-up share capital with necessary resolutions and ROC filing.",
    icon: FolderPlus,
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Share Transfer",
    description:
      "Transfer ownership of shares with legal documents, stamping, and board approvals.",
    icon: Users2,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Demat of Shares",
    description:
      "Convert your physical shares into digital format as per MCA mandate.",
    icon: Banknote,
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Winding Up LLP",
    description:
      "Close your LLP through Form 24 and complete the strike-off process legally.",
    icon: Undo2,
    color: "from-red-600 to-rose-600",
  },
];

export default function MCA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-900 px-4 py-16">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-500 mb-4">
          MCA Compliance Made Effortless
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our compliance services ensure your company or LLP meets all legal
          obligations—on time, every time. From filings to amendments, we've got
          your back.
        </p>
      </motion.div>

      {/* Compliance Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {complianceServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="flex items-center justify-center mb-4">
              <div
                className={`p-4 rounded-full bg-gradient-to-r ${service.color} shadow-md`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-gray-700 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
