"use client";

import { motion } from "framer-motion";
import {
  ShieldX,
  FileText,
  BadgeAlert,
  CheckCircle2,
  TimerReset,
  Landmark,
  AlertCircle,
} from "lucide-react";

export default function WindingUpLLP() {
  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-red-600 via-rose-500 to-pink-500 text-white shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <ShieldX className="w-14 h-14 text-white animate-pulse drop-shadow-xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-xl">
            Winding Up of LLP
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Legally close your LLP with proper compliance and zero liabilities. Fast, easy, and affordable service.
          </p>
        </motion.div>
      </section>

      {/* SECTION 1: OVERVIEW */}
      <section className="py-16 px-6 bg-gradient-to-b from-white via-gray-50 to-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-rose-600 mb-6">📘 What is LLP Winding Up?</h2>
          <p className="text-lg text-gray-700">
            Winding up an LLP means officially closing the business with Registrar of Companies (ROC). It ensures the entity is no longer liable to file returns or pay taxes once assets and liabilities are settled.
          </p>
        </div>
      </section>

      {/* SECTION 2: MODES */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-50 via-yellow-100 to-orange-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-700 mb-10">⚖️ Modes of Closure</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-gray-800">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Voluntary Winding Up</h3>
              <p>Partners mutually agree to close the LLP if it hasn’t carried out any business for at least 1 year.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Compulsory Winding Up</h3>
              <p>Initiated by the Tribunal if LLP is involved in illegal activities or defaults on compliance obligations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONDITIONS */}
      <section className="py-16 px-6 bg-gradient-to-tr from-purple-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <BadgeAlert className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">✅ Basic Conditions</h2>
          <ul className="text-lg text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
            <li>• LLP must be inactive for at least 1 year</li>
            <li>• No outstanding liabilities</li>
            <li>• No pending legal disputes</li>
            <li>• Latest returns must be filed</li>
            <li>• Consent of all designated partners</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: PROCESS */}
      <section className="py-20 px-6 bg-gradient-to-bl from-blue-50 to-cyan-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">🔄 Winding Up Process</h2>
          <div className="space-y-6 text-left">
            {[
              "Pass a resolution for closure and obtain consent from partners.",
              "Prepare affidavit, indemnity bond, and statements of accounts.",
              "File Form 24 along with required documents to ROC.",
              "ROC verifies and may issue objections or clarification.",
              "On approval, LLP is struck off from official records.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-lg text-gray-800">
                <CheckCircle2 className="text-blue-600 mt-1" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMON MISTAKES */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100">
        <div className="max-w-5xl mx-auto text-center">
          <AlertCircle className="mx-auto w-10 h-10 text-pink-600 mb-4" />
          <h2 className="text-3xl font-bold text-pink-700 mb-6">⚠️ Mistakes to Avoid</h2>
          <ul className="text-lg text-gray-700 space-y-2 text-left max-w-3xl mx-auto">
            <li>• Not filing pending returns before closure</li>
            <li>• Missing consent from all designated partners</li>
            <li>• Not maintaining updated statement of accounts</li>
            <li>• Submitting incomplete or unsigned affidavits</li>
          </ul>
        </div>
      </section>

      

     
    </div>
  );
}
