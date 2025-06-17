"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FilePlus,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function RegisteredOfficeChange() {
  const steps = [
    {
      icon: <MapPin className="text-white w-6 h-6" />,
      title: "Board Resolution",
      desc: "Pass resolution approving office address change.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FilePlus className="text-white w-6 h-6" />,
      title: "Utility Bill & NOC",
      desc: "Collect proof of new address & owner’s No Objection Certificate.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <ShieldCheck className="text-white w-6 h-6" />,
      title: "Form INC-22 Filing",
      desc: "File INC-22 within 30 days of the change with necessary attachments.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <BadgeCheck className="text-white w-6 h-6" />,
      title: "ROC Update",
      desc: "Registered office gets updated in MCA records officially.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
<section className="relative overflow-hidden bg-gradient-to-br px-6 text-white shadow-lg">

  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10 max-w-4xl mx-auto text-center"
  >
    <div className="flex justify-center mb-6">
      <MapPin className="w-14 h-14 text-yellow-300 animate-pulse drop-shadow-md" />
    </div>
    <h1 className="text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-violet-500 text-transparent bg-clip-text drop-shadow-lg">
      Registered Office Change
    </h1>
    <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
      Seamlessly change your company’s official address with complete MCA compliance and expert handling.
    </p>
  </motion.div>
</section>


      {/* STEPS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
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
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow-md">
            📍 Who Can Change Registered Office Address?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🏢",
                title: "Private Companies",
                desc: "Registered under Companies Act",
                bg: "from-blue-400 to-indigo-500",
              },
              {
                emoji: "🏠",
                title: "Startups Moving Office",
                desc: "Shifting to a new city or facility",
                bg: "from-pink-400 to-red-500",
              },
              {
                emoji: "📍",
                title: "Change in Jurisdiction",
                desc: "New address falls under different ROC",
                bg: "from-green-400 to-emerald-500",
              },
              {
                emoji: "🔁",
                title: "Business Expansion",
                desc: "Adding new location for better reach",
                bg: "from-yellow-400 to-orange-500",
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

      {/* NOTES */}
      <section className="bg-yellow-50 py-10 px-6 border-t border-yellow-300">
        <div className="max-w-5xl mx-auto space-y-4 text-gray-800">
          <h3 className="text-2xl font-semibold text-yellow-700">Things to Know</h3>
          <ul className="space-y-2 text-base pl-6 list-disc">
            <li>File INC-22 within 30 days of address change.</li>
            <li>Utility bill must be recent (not older than 2 months).</li>
            <li>Changing to a different state requires additional approvals.</li>
            <li>Board and shareholder resolutions are mandatory.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
