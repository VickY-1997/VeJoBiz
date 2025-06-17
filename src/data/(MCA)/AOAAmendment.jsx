"use client";

import { motion } from "framer-motion";
import { FilePenLine, Landmark, Settings, ScrollText, Pencil } from "lucide-react";

export default function AOAAmendment() {
  const reasons = [
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "Change in Share Capital",
      desc: "Update AOA to reflect changes in authorized or paid-up capital.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Alter Company Rules",
      desc: "Revise operational rules, quorum, or director powers.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <ScrollText className="w-6 h-6 text-white" />,
      title: "Adopt Table F",
      desc: "Switch to standard format under Companies Act, 2013.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Pencil className="w-6 h-6 text-white" />,
      title: "Internal Restructuring",
      desc: "Reflect changes in management or internal decision-making.",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-2xl px-6 text-white bg-gradient-to-br from-purple-900 via-violet-700 to-indigo-800 py-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <FilePenLine className="w-14 h-14 text-pink-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
            AOA Amendment
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Amend the Articles of Association to align your company’s governance structure with evolving business needs.
          </p>
        </motion.div>
      </section>

      {/* REASONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700 drop-shadow">
          🔍 Why Amend Your AOA?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-br ${item.color}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NOTES / INSIGHTS */}
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-10">
            🧠 What You Should Know
          </h2>
          <ul className="space-y-6 text-gray-800 text-base md:text-lg list-disc list-inside">
            <li>
              Amendments require **special resolution** and filing of **Form MGT-14** within 30 days.
            </li>
            <li>
              It must be consistent with the **Memorandum of Association (MOA)**.
            </li>
            <li>
              **Board approval** and proper **shareholder communication** are key to smooth processing.
            </li>
            <li>
              Updating AOA is crucial when **business structure, capital, or regulations** evolve.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
