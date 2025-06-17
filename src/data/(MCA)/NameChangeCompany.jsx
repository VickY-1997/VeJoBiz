"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  RefreshCw,
  BadgeCheck,
  ShieldCheck,
  BookText,
  FileCheck2,
} from "lucide-react";

export default function NameChangeCompany() {
  const steps = [
    {
      icon: <Building2 className="text-white w-6 h-6" />,
      title: "Board Resolution",
      desc: "Pass a board resolution for the name change proposal.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FileText className="text-white w-6 h-6" />,
      title: "Apply via RUN",
      desc: "Submit a RUN application to MCA for name approval.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <RefreshCw className="text-white w-6 h-6" />,
      title: "Special Resolution",
      desc: "Conduct EGM and file the special resolution.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <BadgeCheck className="text-white w-6 h-6" />,
      title: "File MGT-14 & INC-24",
      desc: "Update the company name officially with MCA.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 md:px-10 text-white overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/30 rounded-full blur-[120px] z-0" />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] px-6 py-10 md:py-14 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            Company Name Change
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Rebrand your business legally with full MCA compliance and zero hassle.
          </p>
        </motion.div>
      </section>

      {/* STEP CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * i,
                duration: 0.4,
                ease: "easeOut",
              }}
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
      ✅ Who Can Apply for Company Name Change?
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          emoji: "🏢",
          title: "Private Companies",
          desc: "Registered Private Limited Companies under MCA",
          bg: "from-blue-400 to-indigo-500",
        },
        {
          emoji: "🔁",
          title: "Rebranding Firms",
          desc: "Companies planning a brand name transformation",
          bg: "from-pink-400 to-red-500",
        },
        {
          emoji: "🌍",
          title: "Expanding Startups",
          desc: "Startups scaling into new products or regions",
          bg: "from-green-400 to-emerald-500",
        },
        {
          emoji: "📝",
          title: "Name Correction",
          desc: "Legal name mismatch or documentation issues",
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


      {/* IMPORTANT NOTES */}
      <section className="bg-yellow-50 py-10 px-6 border-t border-yellow-300">
        <div className="max-w-5xl mx-auto space-y-4 text-gray-800">
          <h3 className="text-2xl font-semibold text-yellow-700">
            Important Things to Know
          </h3>
          <ul className="space-y-2 text-base pl-6 list-disc">
            <li>
              The new name must not resemble any existing company or trademark.
            </li>
            <li>
              All company stationery, PAN, TAN, GST must be updated after the
              name change.
            </li>
            <li>
              Name change doesn’t impact company incorporation date or legal
              identity.
            </li>
            <li>
              Registrar may reject your RUN application if name is too generic.
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What’s Included in Our Service
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">
                RUN Form Filing
              </h4>
              <p>
                We prepare and submit your name approval form to MCA with
                precision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
              <h4 className="font-semibold text-lg mb-2 text-green-600">
                Board & EGM Support
              </h4>
              <p>
                We help you draft board resolutions and conduct EGM virtually
                if required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition-all">
              <h4 className="font-semibold text-lg mb-2 text-purple-600">
                Final Form Submissions
              </h4>
              <p>
                We file MGT-14 & INC-24 with the Registrar to complete the legal
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
