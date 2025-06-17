"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  FileClock,
  FileCheck2,
  FileWarning,
  Landmark,
  CalendarDays,
  AlertCircle,
} from "lucide-react";

export default function DPT3Filing() {
  const steps = [
    {
      icon: <FileSearch className="w-6 h-6 text-white" />,
      title: "Collect Financial Data",
      desc: "Compile details of loans, advances, debentures, etc.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "Verify Company Type",
      desc: "Applicable for companies excluding government ones.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-white" />,
      title: "Prepare Form DPT-3",
      desc: "Include auditor certificate & financial statement extract.",
      color: "from-emerald-400 to-lime-500",
    },
    {
      icon: <FileClock className="w-6 h-6 text-white" />,
      title: "File with ROC",
      desc: "Submit DPT-3 before 30th June every year.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const eligibility = [
    {
      emoji: "🏢",
      title: "Private & Public Cos.",
      desc: "Except govt. companies, all must file DPT-3 annually.",
      bg: "from-fuchsia-500 to-pink-500",
    },
    {
      emoji: "📊",
      title: "Outstanding Loans",
      desc: "Includes secured/unsecured loans and advances.",
      bg: "from-teal-500 to-cyan-500",
    },
    {
      emoji: "📅",
      title: "Due by 30th June",
      desc: "Every year based on financial data up to 31st March.",
      bg: "from-amber-500 to-orange-500",
    },
    {
      emoji: "🧾",
      title: "Auditor Certificate",
      desc: "Mandatory for deposits & non-deposit DPT-3 types.",
      bg: "from-blue-500 to-indigo-500",
    },
  ];

  const reminders = [
    {
      icon: <CalendarDays className="w-7 h-7 text-orange-600" />,
      title: "Annual Compliance",
      desc: "Filing is compulsory even if company has no deposits.",
    },
    {
      icon: <FileWarning className="w-7 h-7 text-red-600" />,
      title: "Late Filing Penalty",
      desc: "High penalties for non-filing or delay in DPT-3 submission.",
    },
    {
      icon: <AlertCircle className="w-7 h-7 text-yellow-600" />,
      title: "Select Correct Purpose",
      desc: "Choose the right reason while filling the form.",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-xl px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <FileSearch className="w-14 h-14 text-purple-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 via-indigo-400 to-emerald-400 text-transparent bg-clip-text drop-shadow-lg">
            DPT-3 Filing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            File Form DPT-3 annually to report money received not treated as deposits under the Companies Act.
          </p>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
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
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-md">
            ✅ Who Should File DPT-3?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, idx) => (
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

      {/* NOTES */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-100 via-indigo-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-2">📝 Key Points to Note</h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto">
              Important compliance points for accurate and timely DPT-3 submission.
            </p>
          </div>

          <div className="space-y-8">
            {reminders.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white border-l-4 border-purple-300 shadow-lg rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
