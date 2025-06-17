"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
} from "lucide-react";

const services = [
  {
    name: "Startup India",
    slug: "startupIndia",
    description:
      "Government recognition & benefits for DPIIT-registered startups.",
    icon: Store,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Trade License",
    slug: "tradeLicense",
    description: "Local authority permit for running a business legally.",
    icon: FileText,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "FSSAI Registration",
    slug: "fSSAIRegistration",
    description: "Food safety registration for small food businesses (FBOs).",
    icon: FileText,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "FSSAI License",
    slug: "fSSAILicense",
    description: "Central/State license for medium and large food businesses.",
    icon: FileText,
    color: "from-pink-500 to-red-600",
  },
  {
    name: "ICEGATE",
    slug: "iCEGATERegistration",
    description: "Import/export registration via Indian Customs EDI portal.",
    icon: Banknote,
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "ISO",
    slug: "iSORegistration",
    description: "Get ISO-certified for global quality & process standards.",
    icon: ShieldAlert,
    color: "from-blue-500 to-sky-600",
  },
  {
    name: "PF Registration",
    slug: "pFRegistration",
    description:
      "Provident Fund registration for employee retirement benefits.",
    icon: BadgePercent,
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "ESI Registration",
    slug: "eSIRegistration",
    description: "Employee State Insurance for worker health protection.",
    icon: BookOpen,
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Professional Tax",
    slug: "professionalTaxRegistration",
    description: "Tax registration for salaried individuals & professionals.",
    icon: PenTool,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "RCMC",
    slug: "rCMCRegistration",
    description: "Registration-Cum-Membership Certificate for exporters.",
    icon: Briefcase,
    color: "from-sky-600 to-sky-800",
  },
  {
    name: "12A & 80G",
    slug: "Registration_12A_and_80G",
    description: "Get tax exemption & donation benefits for your NGO.",
    icon: Landmark,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "12A",
    slug: "Registration_12A",
    description: "Apply for income tax exemption under 12A for NGOs.",
    icon: ShieldCheck,
    color: "from-green-600 to-green-800",
  },
  {
    name: "80G",
    slug: "GRegistration_80",
    description: "Enable tax deduction on donations to your NGO under 80G.",
    icon: ShieldCheck,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Digital Signature",
    slug: "digitalSignature",
    description: "Get a DSC for signing documents securely and legally online.",
    icon: Fingerprint,
    color: "from-cyan-600 to-blue-500",
  },
  {
    name: "Shop Act",
    slug: "shopActRegistration",
    description: "Register your shop/establishment under local law.",
    icon: ScrollText,
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Udyam",
    slug: "udyamRegistration",
    description: "MSME registration for businesses under Udyam portal.",
    icon: Book,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "FCRA",
    slug: "fCRARegistration",
    description: "Foreign Contribution Regulation Act license for NGOs.",
    icon: Globe,
    color: "from-teal-600 to-teal-800",
  },
];

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 mb-4">
          Explore Registrations
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from essential licenses, certificates, and government
          registrations to launch and legitimize your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={`/service/${service.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="cursor-pointer rounded-2xl p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
