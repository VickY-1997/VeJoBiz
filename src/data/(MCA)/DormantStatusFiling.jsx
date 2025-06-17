"use client";

import { motion } from "framer-motion";
import {
  MoonStar,
  PauseCircle,
  FileCheck,
  Clock8,
} from "lucide-react";

export default function DormantStatusFiling() {
  const steps = [
    {
      icon: <PauseCircle className="w-6 h-6 text-white" />,
      title: "Eligibility Check",
      desc: "Company must have no significant financial transactions in the past 2 years.",
      bg: "from-indigo-500 to-blue-600",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "File MSC-1",
      desc: "Submit application with board resolution, statement of affairs & auditor certificate.",
      bg: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock8 className="w-6 h-6 text-white" />,
      title: "ROC Verification",
      desc: "Registrar will review and issue Dormant status after approval.",
      bg: "from-yellow-400 to-orange-500",
    },
    {
      icon: <MoonStar className="w-6 h-6 text-white" />,
      title: "Status Update",
      desc: "Company will be marked as 'Dormant' in the MCA records and exempted from filings.",
      bg: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 py-10 bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            <MoonStar className="w-14 h-14 text-indigo-400 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
            Dormant Status Filing
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
            Get your inactive company recognized as Dormant under Companies Act, 2013 and reduce compliance burden legally.
          </p>
        </motion.div>
      </section>

      {/* PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
              className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-br ${step.bg}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-white/90">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
