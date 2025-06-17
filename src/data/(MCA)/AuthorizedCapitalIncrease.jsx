"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  HandCoins,
  ShieldCheck,
  BarChart3,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ScrollText,
  Landmark,
} from "lucide-react";

export default function AuthorizedCapitalIncrease() {
  const useCases = [
    {
      icon: <HandCoins className="w-6 h-6 text-white" />,
      title: "Equity Funding Round",
      desc: "Raise investment by issuing new shares to VCs or angel investors.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Regulatory Compliance",
      desc: "Meet minimum capital norms for licenses like NBFC or Startup India.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Business Expansion",
      desc: "Support growth into new verticals, markets, or product launches.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Internal Restructuring",
      desc: "Convert loans or sweat equity into authorized share capital.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const benefits = [
    "Enable future equity funding opportunities.",
    "Comply with capital norms for licenses or IPO.",
    "Issue bonus shares to existing shareholders.",
    "Prepare company for mergers or acquisitions.",
    "Demonstrate credibility to banks & investors.",
  ];

  const process = [
    "Hold Board Meeting to propose capital increase.",
    "Call and conduct EGM (Extraordinary General Meeting).",
    "Pass Special Resolution under Section 61 of Companies Act.",
    "File Form SH-7 with updated MOA to ROC.",
    "ROC approval confirms updated authorized capital.",
  ];

  const misconceptions = [
    "Authorized capital is not the same as paid-up capital.",
    "Increasing capital doesn’t require immediate fund inflow.",
    "ROC fee is based on new capital slab — not full amount.",
    "One-time change doesn’t mean shares are auto-issued.",
  ];

  const highlights = [
    {
      icon: <ScrollText className="w-6 h-6 text-white" />,
      title: "MOA Amendment Required",
      desc: "Clause V of the MOA must reflect the new authorized share capital.",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "Form SH-7 Filing",
      desc: "This ROC form is mandatory after passing the special resolution.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      title: "Fee Based on Capital Slab",
      desc: "Government fee increases based on your new authorized amount.",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative bg-gradient-to-br from-sky-900 via-indigo-900 to-blue-950 text-white py-24 px-6 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <TrendingUp className="w-14 h-14 text-cyan-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
            Authorized Capital Increase
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Increase your company’s share capital legally through ROC approval and special resolutions. A strategic step for fundraising and scaling.
          </p>
        </motion.div>
      </section>

      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 drop-shadow">
          🚀 When Should You Increase Authorized Capital?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl shadow-lg text-white bg-gradient-to-br ${item.color}`}
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

      {/* BENEFITS */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">🎯 Key Benefits</h2>
          <ul className="space-y-4 text-lg text-gray-800 list-disc pl-6">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-700 mb-10">📂 Process Overview</h2>
          <ol className="space-y-6 text-left max-w-3xl mx-auto list-decimal pl-6 text-gray-700 text-lg">
            {process.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <CalendarClock className="mx-auto mb-4 text-blue-600 w-10 h-10" />
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">⏳ Estimated Timeline</h2>
          <p className="text-lg text-gray-700">
            The entire process typically takes <strong>7–10 working days</strong> including board resolution, EGM, and ROC approval.
          </p>
        </div>
      </section>

      {/* MISCONCEPTIONS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-8">❗ Common Misconceptions</h2>
          <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
            {misconceptions.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* LEGAL HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-indigo-900 to-sky-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-cyan-200">
            ⚖️ Legal Highlights to Know
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-xl`}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
