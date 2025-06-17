"use client";

import { motion } from "framer-motion";
import {
  Building,
  FileText,
  ThumbsUp,
  ShieldCheck,
  TimerReset,
  PhoneCall,
  Sparkles,
  Star,
  TrendingUp,
  Landmark,
} from "lucide-react";

function Proprietorship() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-black to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4"
        >
          Proprietorship Registration Made Simple
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          Establish your business identity as a sole proprietor with minimal formalities, fast documentation, and affordable compliance.
        </p>
      </section>
  
      {/* Highlight Cards */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-7xl mx-auto">
        {[
          {
            icon: <Sparkles className="w-8 h-8 text-yellow-400" />, title: "Quick & Easy Process",
            text: "Finish your registration in just a few steps."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-teal-400" />, title: "100% Legal Validity",
            text: "Your business will be recognized by all government authorities."
          },
          {
            icon: <ThumbsUp className="w-8 h-8 text-green-400" />, title: "Low Cost Setup",
            text: "No hidden fees. Affordable for every startup."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Step-by-Step Process
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {["Fill Out Application Form", "Upload Required Documents", "Expert Review & Filing", "Get Your Certificate"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="text-3xl font-bold text-pink-400">Step {i + 1}</div>
              <div className="text-lg text-white">{step}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16">
        <h2 className="text-3xl text-center font-bold text-white mb-10">Why Choose Proprietorship?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "No Corporate Filings Required",
            "Full Control to the Owner",
            "Easy Bank Account Setup",
            "Suitable for Freelancers",
            "Perfect for Traders & Consultants",
            "Can be Converted Later",
          ].map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-700 to-purple-800 p-6 rounded-xl text-center shadow-lg"
            >
              <p className="text-white font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Document List */}
      <section className="py-16 bg-black/60 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Documents You'll Need</h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-gray-300 text-lg list-disc list-inside">
          <li>PAN Card & Aadhar of Proprietor</li>
          <li>Passport Size Photo</li>
          <li>Business Address Proof</li>
          <li>Bank Details</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-pink-600 to-red-600 rounded-t-3xl">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Start Your Sole Proprietorship Today
        </motion.h3>
        <p className="text-white mt-4 mb-8">Affordable, fast, and fully online. Get expert help now.</p>
        <button className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl">
          📞 Book a Free Consultation
        </button>
      </section>
    </div>
  );
}

export default Proprietorship;
