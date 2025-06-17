"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  UserX,
  FileEdit,
  BadgeCheck,
  Landmark,
  ArrowRightLeft,
} from "lucide-react";

export default function DirectorChange() {
  const steps = [
    {
      icon: <UserX className="w-6 h-6 text-white" />,
      title: "Board Resolution",
      desc: "Pass a resolution approving the appointment or resignation of director.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FileEdit className="w-6 h-6 text-white" />,
      title: "Prepare DIR-12 Form",
      desc: "Fill out form DIR-12 with all relevant details and documents.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "ROC Filing",
      desc: "Submit the DIR-12 form to the Registrar of Companies within 30 days.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
      title: "Update Records",
      desc: "Ensure MCA records reflect the new changes post approval.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-xl px-6 text-white bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center py-20"
        >
          <div className="flex justify-center mb-6">
            <ArrowRightLeft className="w-14 h-14 text-white animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-200 via-white to-orange-100 text-transparent bg-clip-text drop-shadow-lg">
            Director Change
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Seamlessly update your company's director structure with legal compliance and ROC approval.
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
      <section className="py-16 px-6 bg-gradient-to-tr from-violet-50 via-indigo-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-md">
            👥 When Do You Need Director Change Filing?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧑‍💼",
                title: "New Director Appointment",
                desc: "When a new director is being added to the company board.",
                bg: "from-pink-400 to-rose-500",
              },
              {
                emoji: "📄",
                title: "Resignation of Director",
                desc: "If an existing director is leaving the organization.",
                bg: "from-orange-400 to-yellow-400",
              },
              {
                emoji: "🔁",
                title: "Change in Designation",
                desc: "When a director is reclassified (e.g., from alternate to full-time).",
                bg: "from-teal-400 to-green-400",
              },
              {
                emoji: "⚖️",
                title: "Legal Compliance",
                desc: "To comply with MCA regulations after board changes.",
                bg: "from-blue-500 to-indigo-600",
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
