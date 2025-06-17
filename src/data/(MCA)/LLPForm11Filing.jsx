"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ScrollText,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

export default function LLPForm11Filing() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Prepare Financial Summary",
      desc: "Include total contributions, partners’ details, and key activity summary.",
      bg: "from-sky-600 to-indigo-600",
    },
    {
      icon: <ScrollText className="w-6 h-6 text-white" />,
      title: "Fill Form 11",
      desc: "Accurately complete partner names, obligations, and compliance sections.",
      bg: "from-pink-500 to-fuchsia-600",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-white" />,
      title: "File Before 30th May",
      desc: "The due date for all LLPs, regardless of business activity.",
      bg: "from-yellow-500 to-orange-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "DSC & Certification",
      desc: "Digitally sign using Designated Partner’s DSC, get it certified by CA/CS.",
      bg: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 p-8 bg-gradient-to-r from-orange-50 via-pink-100 to-rose-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            <ShieldCheck className="w-14 h-14 text-rose-400 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            LLP Form 11 Filing
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
            Annual return filing is mandatory for all LLPs, even if there's no business. Avoid penalties by filing before the deadline!
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
