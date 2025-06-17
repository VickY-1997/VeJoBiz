"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
  BookOpenCheck,
  Scale,
} from "lucide-react";

export default function WindingUpCompany() {
  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <ShieldCheck className="w-14 h-14 text-white animate-bounce drop-shadow-xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-xl">
            Winding Up of Company
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Close your company legally and permanently with proper ROC procedures, saving future penalties and compliance costs.
          </p>
        </motion.div>
      </section>

      {/* SECTION 1: INTRODUCTION */}
      <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📘 What is Company Winding Up?</h2>
          <p className="text-lg text-gray-700">
            Winding up is the process of legally shutting down a company and removing its name from the records of the Ministry of Corporate Affairs (MCA). It protects directors from future compliance and legal obligations.
          </p>
        </div>
      </section>

      {/* SECTION 2: TYPES */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-50 via-pink-100 to-fuchsia-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-10">⚖️ Types of Company Closure</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-gray-800">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Voluntary Strike Off (STK-2)</h3>
              <p>Used when the company has no liabilities and has not operated for at least 2 years.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Compulsory Winding Up</h3>
              <p>Ordered by the NCLT due to non-compliance, fraud, or insolvency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ELIGIBILITY */}
      <section className="py-16 px-6 bg-gradient-to-bl from-yellow-50 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpenCheck className="mx-auto w-10 h-10 text-orange-600 mb-4" />
          <h2 className="text-3xl font-bold text-orange-700 mb-4">✅ Eligibility for Strike Off</h2>
          <ul className="text-lg text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
            <li>• Company has not commenced business since incorporation, or</li>
            <li>• Company has not carried any operations in the last 2 financial years</li>
            <li>• Has no assets or liabilities at the time of closure</li>
            <li>• No ongoing legal proceedings</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: PROCEDURE */}
      <section className="py-20 px-6 bg-gradient-to-tr from-sky-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-10">📝 Closure Process (STK-2)</h2>
          <div className="space-y-6 text-left">
            {[
              "Conduct board meeting and pass resolution for closure.",
              "Clear all pending dues and file final ITR & returns.",
              "Prepare affidavit, indemnity bond, and account statement.",
              "File STK-2 form with MCA along with necessary documents.",
              "Registrar verifies and publishes notice for objections.",
              "If no objection, company is struck off in 30–90 days.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-lg text-gray-800">
                <CheckCircle2 className="text-blue-600 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RISKS OF NON-CLOSURE */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-rose-100">
        <div className="max-w-5xl mx-auto text-center">
          <AlertCircle className="mx-auto w-10 h-10 text-red-600 mb-4" />
          <h2 className="text-3xl font-bold text-red-700 mb-6">⚠️ Why Proper Closure is Important</h2>
          <ul className="text-lg text-gray-700 space-y-2 text-left max-w-3xl mx-auto">
            <li>• ROC may impose heavy penalties for non-filing of annual returns</li>
            <li>• Directors get disqualified for 5 years under Companies Act</li>
            <li>• Legal notices or summons may be issued</li>
            <li>• Difficulties in starting new ventures or raising funds</li>
          </ul>
        </div>
      </section>

     
    </div>
  );
}
