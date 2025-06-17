"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Users,
  ShieldCheck,
  Info,
  FileText,
  CalendarDays,
  CheckCircle,
  UserPlus2,
} from "lucide-react";

export default function ShareTransfer() {
  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-xl px-6 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <ArrowRightLeft className="w-14 h-14 text-white animate-bounce drop-shadow-xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-xl">
            Share Transfer Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Seamlessly transfer company shares with complete legal compliance and precision.
          </p>
        </motion.div>
      </section>

      {/* SECTION 1: WHY SHARE TRANSFER */}
      <section className="py-16 px-6 bg-gradient-to-br from-rose-50 to-orange-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-pink-700 mb-10 text-center">
            🎯 Why Share Transfer?
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✅ Change in ownership or control of a company.</li>
            <li>✅ Bringing in new investors or business partners.</li>
            <li>✅ Restructuring shareholding for business strategy.</li>
            <li>✅ As per succession or exit planning.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: ELIGIBILITY */}
      <section className="py-16 px-6 bg-gradient-to-tr from-sky-50 via-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
            📋 Who Can Transfer Shares?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {[
              { title: "Private Limited Shareholders", color: "from-blue-500 to-cyan-500", icon: <Users /> },
              { title: "Legal Heirs (Post Demise)", color: "from-green-500 to-lime-500", icon: <ShieldCheck /> },
              { title: "Startup Founders", color: "from-purple-500 to-pink-500", icon: <UserPlus2 /> },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl bg-gradient-to-br ${item.color} shadow-lg text-center`}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSFER PROCESS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-10">🔁 Share Transfer Process</h2>
          <div className="space-y-6 text-left">
            {[
              "Obtain Share Transfer Deed (Form SH-4).",
              "Get the transferor and transferee to sign the deed.",
              "Attach share certificate and board resolution.",
              "File with ROC if required under Companies Act.",
              "Update company records post-approval.",
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-lg text-gray-800"
              >
                <CheckCircle className="text-green-600 mt-1" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DOCUMENTS NEEDED */}
      <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
            🗂️ Essential Documents
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-800">
            <li>• PAN & Aadhaar of both parties</li>
            <li>• Share Transfer Deed (SH-4)</li>
            <li>• Original Share Certificate</li>
            <li>• Board Resolution Copy</li>
            <li>• Consent Letter (if required)</li>
            <li>• DSC (if filing online)</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: TIMELINE & PENALTIES */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <CalendarDays className="mx-auto w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            📆 Timeline & Penalties
          </h2>
          <p className="text-gray-700 text-lg">
            Share transfer must be recorded within 60 days of execution. Delay in compliance may attract penalties under the Companies Act, 2013.
          </p>
        </div>
      </section>

     

      
    </div>
  );
}
