"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileWarning, KeyRound, CalendarClock } from "lucide-react";

export default function DINReactivation() {
  const steps = [
    {
      icon: <FileWarning className="w-6 h-6 text-white" />,
      title: "Identify Non-Compliance",
      desc: "Check if the DIN was deactivated due to missed eKYC or other issues.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <CalendarClock className="w-6 h-6 text-white" />,
      title: "Prepare Filing Docs",
      desc: "Get ready with KYC documents, DSC, and updated contact details.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: <KeyRound className="w-6 h-6 text-white" />,
      title: "File DIR-3 KYC with Penalty",
      desc: "Submit updated KYC with ₹5,000 penalty for reactivation.",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      title: "DIN Reactivated",
      desc: "DIN becomes active again upon successful approval by MCA.",
      color: "from-lime-500 to-emerald-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-xl px-6 text-white bg-gradient-to-br from-fuchsia-600 via-red-500 to-orange-400">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center py-20"
        >
          <div className="flex justify-center mb-6">
            <ShieldAlert className="w-14 h-14 text-white animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-200 via-white to-orange-100 text-transparent bg-clip-text drop-shadow-lg">
            DIN Reactivation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Missed your eKYC? Get your Director Identification Number (DIN) reactivated quickly by filing with penalty.
          </p>
        </motion.div>
      </section>

      {/* PROCESS CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
              className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-br ${step.color}`}
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

      {/* ELIGIBILITY */}
      <section className="py-16 px-6 bg-gradient-to-tr from-orange-50 via-yellow-100 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-red-600 mb-12 drop-shadow-md">
            🔁 Who Needs DIN Reactivation?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "⛔",
                title: "DIN Holders with Deactivated Status",
                desc: "If you missed eKYC in past years and MCA deactivated your DIN.",
                bg: "from-red-400 to-rose-500",
              },
              {
                emoji: "💰",
                title: "Willing to Pay Penalty",
                desc: "Reactivation requires paying ₹5,000 penalty as per MCA rules.",
                bg: "from-amber-500 to-yellow-400",
              },
              {
                emoji: "📧",
                title: "Valid Email & Mobile",
                desc: "You must have access to the registered email and mobile for OTP.",
                bg: "from-indigo-400 to-sky-500",
              },
              {
                emoji: "📅",
                title: "Pending Filing Year",
                desc: "Must file for the year the DIN was deactivated.",
                bg: "from-teal-500 to-green-400",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-tr ${item.bg} text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
