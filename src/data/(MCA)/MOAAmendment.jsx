"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Landmark,
  BookOpenCheck,
  ArrowRightLeft,
  RefreshCw,
  SearchCheck,
  Star,
  Scale,
} from "lucide-react";

export default function MOAAmendment() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Board Resolution",
      desc: "Initiate the amendment by passing a board resolution proposing changes.",
      bg: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      title: "Special Resolution in EGM",
      desc: "Call an Extra-Ordinary General Meeting and pass a special resolution.",
      bg: "from-orange-400 to-pink-500",
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-white" />,
      title: "ROC Filing",
      desc: "Submit Form MGT-14 with altered MOA and resolution to the ROC.",
      bg: "from-sky-500 to-cyan-500",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-white" />,
      title: "Official Update",
      desc: "ROC reviews and updates the company's MOA in government records.",
      bg: "from-lime-500 to-green-500",
    },
  ];

  const whenToAmend = [
    {
      icon: <RefreshCw className="w-7 h-7 text-indigo-600" />,
      title: "Change in Company Name",
      desc: "A name change requires amendment of the Name Clause in MOA.",
    },
    {
      icon: <SearchCheck className="w-7 h-7 text-emerald-600" />,
      title: "Object Change",
      desc: "When a company adds or changes business activities, update Object Clause.",
    },
    {
      icon: <Star className="w-7 h-7 text-pink-500" />,
      title: "Registered Office Shift",
      desc: "Amendment needed if the registered office moves from one state to another.",
    },
    {
      icon: <Scale className="w-7 h-7 text-yellow-500" />,
      title: "Capital Structure Change",
      desc: "Increase in authorized capital must be reflected in Capital Clause.",
    },
  ];

  const impacts = [
    "Allows company to explore new business opportunities legally.",
    "Essential to stay compliant with Companies Act, 2013.",
    "Builds stakeholder confidence through legal transparency.",
    "Non-compliance may attract penalties or rejection of changes by ROC.",
  ];

  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-tr from-fuchsia-50 via-pink-100 to-orange-50">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            <BookOpenCheck className="w-14 h-14 text-fuchsia-500 animate-bounce drop-shadow-md" />
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-rose-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
            MOA Amendment Filing
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
            Legally update your company's Memorandum of Association to reflect key changes — from name to business objectives — in full compliance with ROC regulations.
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
              className={`p-6 rounded-2xl shadow-xl text-white bg-gradient-to-br ${step.bg}`}
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

      {/* WHEN TO AMEND */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-fuchsia-700 mb-12">
            📌 When Should You Amend MOA?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whenToAmend.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-pink-700 mb-8">💡 Impact of MOA Amendment</h2>
          <ul className="space-y-6 text-left text-gray-800 text-base list-disc pl-6">
            {impacts.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
