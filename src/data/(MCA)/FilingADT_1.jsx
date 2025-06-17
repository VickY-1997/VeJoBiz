"use client";

import { motion } from "framer-motion";
import { FileText, FilePlus2, Users2, Send, CheckCircle2, AlarmClock, FileLock2 } from "lucide-react";

export default function ADT1Filing() {
  const steps = [
    {
      icon: <FilePlus2 className="w-6 h-6 text-white" />,
      title: "Auditor Appointment",
      desc: "Appoint an auditor in the company's first AGM.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: <Users2 className="w-6 h-6 text-white" />,
      title: "Board Resolution",
      desc: "Pass resolution approving the appointment.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Prepare Form ADT-1",
      desc: "Draft Form ADT-1 with auditor details and attachments.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Send className="w-6 h-6 text-white" />,
      title: "File with MCA",
      desc: "Submit Form ADT-1 within 15 days of AGM.",
      color: "from-teal-400 to-green-500",
    },
  ];

  const eligibility = [
    {
      emoji: "🏢",
      title: "New Companies",
      desc: "Required after the first AGM to inform the ROC.",
      bg: "from-green-400 to-lime-500",
    },
    {
      emoji: "🔄",
      title: "Auditor Reappointment",
      desc: "Even reappointments must be filed via ADT-1.",
      bg: "from-orange-400 to-amber-500",
    },
    {
      emoji: "📅",
      title: "Within 15 Days",
      desc: "Must be filed within 15 days of AGM date.",
      bg: "from-blue-500 to-sky-500",
    },
    {
      emoji: "⚖️",
      title: "As per Companies Act",
      desc: "Mandatory under Section 139(1) of the Act.",
      bg: "from-pink-500 to-rose-500",
    },
  ];

  const reminders = [
    {
      icon: <CheckCircle2 className="w-7 h-7 text-green-600" />,
      title: "Attach Auditor Consent",
      desc: "Auditor’s consent letter must be attached in Form ADT-1.",
    },
    {
      icon: <AlarmClock className="w-7 h-7 text-orange-500" />,
      title: "Strict Timeline",
      desc: "Missing deadline may attract penalties from MCA.",
    },
    {
      icon: <FileLock2 className="w-7 h-7 text-blue-600" />,
      title: "Use Correct CIN",
      desc: "Ensure the Company Identification Number is accurate.",
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
            <FileText className="w-14 h-14 text-blue-300 animate-pulse drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-300 via-sky-400 to-teal-500 text-transparent bg-clip-text drop-shadow-lg">
            ADT-1 Filing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Mandatory filing of auditor appointment with MCA — stay compliant with Form ADT-1.
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
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow-md">
            ✅ Who Needs to File ADT-1?
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-100 via-cyan-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-sky-600 mb-2">📝 Key Reminders</h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto">
              Keep these points in mind while preparing and filing Form ADT-1.
            </p>
          </div>

          <div className="space-y-8">
            {reminders.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white border-l-4 border-blue-300 shadow-lg rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-sky-700">{item.title}</h3>
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
