"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Send,
  FileSignature,
  CalendarCheck,
  AlertTriangle,
  SmartphoneNfc,
  PenTool,
} from "lucide-react";

export default function DINeKYCFiling() {
  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "DIN Verification",
      desc: "Ensure the Director Identification Number is active and valid.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <FileSignature className="w-6 h-6 text-white" />,
      title: "Form DIR-3 KYC",
      desc: "Fill out the latest KYC form with personal & contact details.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Attach Proofs",
      desc: "Add PAN, Aadhaar, Email & Mobile verification via OTP.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Send className="w-6 h-6 text-white" />,
      title: "Digital Signature & Filing",
      desc: "File it online using DSC and submit to ROC before due date.",
      color: "from-purple-500 to-fuchsia-500",
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
            <ShieldCheck className="w-14 h-14 text-indigo-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-300 via-blue-400 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
            DIN eKYC Filing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Mandatory eKYC compliance for directors with active DIN — avoid penalties with timely filing.
          </p>
        </motion.div>
      </section>

      {/* PROCESS CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
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
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow-md">
            🎯 Who Should File DIN eKYC?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧑‍💼",
                title: "Directors with Active DIN",
                desc: "Applicable to all DIN holders every year.",
                bg: "from-sky-500 to-cyan-500",
              },
              {
                emoji: "⚠️",
                title: "Late Filers",
                desc: "To reactivate a deactivated DIN due to non-compliance.",
                bg: "from-rose-500 to-red-500",
              },
              {
                emoji: "📅",
                title: "New Directors",
                desc: "Even newly appointed directors must file it annually.",
                bg: "from-green-400 to-lime-500",
              },
              {
                emoji: "💼",
                title: "Private & Public Companies",
                desc: "Mandatory for both company types.",
                bg: "from-indigo-500 to-purple-500",
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-cyan-100 via-blue-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-cyan-600 mb-2">📌 Key Points to Know</h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto">
              Stay compliant by remembering these essential eKYC rules and deadlines.
            </p>
          </div>

          <div className="relative space-y-1 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-cyan-300/50 before:-translate-x-1/2">
            {[
              {
                title: "Annual Filing is Mandatory",
                desc: "All directors must file DIN eKYC every year to keep their DIN active.",
                icon: <CalendarCheck className="w-7 h-7 text-green-600" />,
              },
              {
                title: "Avoid ₹5,000 Penalty",
                desc: "Missing the deadline results in a mandatory ₹5,000 penalty.",
                icon: <AlertTriangle className="w-7 h-7 text-red-600" />,
              },
              {
                title: "Verify OTP on Mobile & Email",
                desc: "Both registered mobile and email must be verified via OTP.",
                icon: <SmartphoneNfc className="w-7 h-7 text-blue-600" />,
              },
              {
                title: "Valid DSC is Required",
                desc: "Ensure your Digital Signature Certificate is valid before filing.",
                icon: <PenTool className="w-7 h-7 text-purple-600" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative w-full md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
                <div className="bg-white/70 backdrop-blur-md border border-cyan-200 rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-full shadow">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-cyan-700">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
