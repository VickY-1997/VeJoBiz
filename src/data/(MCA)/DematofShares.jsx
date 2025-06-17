"use client";

import { motion } from "framer-motion";
import {
  Layers3,
  FolderSync,
  ShieldCheck,
  UploadCloud,
  CalendarDays,
  CheckCircle,
  Lightbulb,
  FileText,
} from "lucide-react";

export default function DematOfShares() {
  return (
    <div className="text-gray-800">
      {/* HEADER */}
      <section className="relative overflow-hidden shadow-xl px-6 text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <Layers3 className="w-14 h-14 text-white animate-pulse drop-shadow-xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-xl">
            Dematerialization of Shares
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Convert your physical share certificates into secure electronic form with ease and compliance.
          </p>
        </motion.div>
      </section>

      {/* SECTION 1: INTRO */}
      <section className="py-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">📘 What is Demat of Shares?</h2>
          <p className="text-lg text-gray-700">
            Dematerialization (or Demat) refers to the process of converting physical share certificates into electronic format. It ensures safe, fast, and paperless trading or transferring of shares by holding them in a Demat account.
          </p>
        </div>
      </section>

      {/* SECTION 2: BENEFITS */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 mb-10 text-center">🌟 Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Zero risk of theft or loss",
              "Faster transactions",
              "No stamp duty on transfer",
              "Instant liquidity",
              "Improved transparency",
              "Easy access via Demat account",
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow border border-emerald-200 text-gray-700 text-center"
              >
                ✅ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS FLOW */}
      <section className="py-20 bg-gradient-to-r from-white to-indigo-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-10">🔄 Demat Process</h2>
          <div className="space-y-6 text-left">
            {[
              "Open a Demat Account with a registered Depository Participant (DP).",
              "Submit physical share certificates with Demat Request Form (DRF).",
              "DP verifies and forwards request to the company’s RTA.",
              "RTA verifies and confirms dematerialization.",
              "Shares reflect in your Demat account.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-lg text-gray-800">
                <CheckCircle className="text-purple-600 mt-1" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ELIGIBILITY & CONDITIONS */}
      <section className="py-16 px-6 bg-gradient-to-tr from-yellow-50 to-orange-100">
        <div className="max-w-5xl mx-auto text-center">
          <FolderSync className="mx-auto w-10 h-10 text-orange-600 mb-4" />
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            📌 Who Needs to Dematerialize?
          </h2>
          <p className="text-lg text-gray-700">
            As per SEBI regulations, all public companies must dematerialize shares before any transfer. Also, unlisted public companies are required to issue and transfer shares only in Demat form.
          </p>
        </div>
      </section>


      

     
    </div>
  );
}
