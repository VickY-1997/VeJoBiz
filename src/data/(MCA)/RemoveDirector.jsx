"use client";

import { motion } from "framer-motion";
import { UserX2, ShieldX, FileWarning, Gavel, AlertCircle, BadgeMinus, CalendarX } from "lucide-react";

export default function RemoveDirector() {
  const steps = [
    {
      icon: <UserX2 className="w-6 h-6 text-white" />,
      title: "Board Resolution",
      desc: "Pass a resolution in the board meeting for removal.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <FileWarning className="w-6 h-6 text-white" />,
      title: "Notice to Director",
      desc: "Issue a formal notice and give opportunity to respond.",
      color: "from-orange-400 to-yellow-500",
    },
    {
      icon: <Gavel className="w-6 h-6 text-white" />,
      title: "Shareholder Approval",
      desc: "Conduct EGM and obtain shareholders’ approval.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <ShieldX className="w-6 h-6 text-white" />,
      title: "File DIR-12",
      desc: "File DIR-12 with MCA to update the director’s status.",
      color: "from-sky-500 to-blue-600",
    },
  ];

  const eligibility = [
    {
      emoji: "⚖️",
      title: "Non-Participating Director",
      desc: "Director not attending meetings or inactive in decisions.",
      bg: "from-pink-500 to-rose-500",
    },
    {
      emoji: "❌",
      title: "Resigned Director",
      desc: "Director who submitted a resignation willingly.",
      bg: "from-orange-400 to-yellow-500",
    },
    {
      emoji: "🚫",
      title: "Disqualified Director",
      desc: "Due to legal issues, court order, or MCA disqualification.",
      bg: "from-indigo-500 to-blue-600",
    },
    {
      emoji: "📉",
      title: "Fraudulent Activities",
      desc: "If found guilty of misconduct or fraud.",
      bg: "from-teal-500 to-green-500",
    },
  ];

  const reminders = [
    {
      icon: <BadgeMinus className="w-7 h-7 text-red-600" />,
      title: "Must Follow Legal Process",
      desc: "Improper removal may lead to legal consequences.",
    },
    {
      icon: <AlertCircle className="w-7 h-7 text-yellow-600" />,
      title: "Board & Shareholder Involvement",
      desc: "Both parties must agree for legal removal.",
    },
    {
      icon: <CalendarX className="w-7 h-7 text-purple-600" />,
      title: "Timely Filing is Crucial",
      desc: "File DIR-12 within 30 days to avoid penalties.",
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
            <UserX2 className="w-14 h-14 text-rose-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-300 via-rose-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
            Remove a Director
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Remove a director legally from your company with proper filing and compliance.
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
      <section className="py-16 px-6 bg-gradient-to-br from-rose-50 via-yellow-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-rose-700 mb-12 drop-shadow-md">
            👤 Who Can Be Removed?
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

      {/* REMINDERS */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-red-100 via-yellow-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-rose-600 mb-2">📌 Important Points to Remember</h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto">
              Ensure compliance and avoid MCA penalties during director removal.
            </p>
          </div>

          <div className="space-y-8">
            {reminders.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white border-l-4 border-rose-300 shadow-lg rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-rose-700">{item.title}</h3>
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
