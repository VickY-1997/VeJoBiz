"use client";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  ShieldCheck,
  FileText,
  Workflow,
  Verified,
} from "lucide-react";

const OnePersonCompany = () => {
  return (
    <main className="bg-gradient-to-tr from-blue-100 via-white to-purple-100 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-red-500"
        >
          One Person Company (OPC) Registration
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Legal identity for solo founders — Enjoy limited liability, complete control, and easy compliance.
        </p>
      </section>

      {/* What is OPC */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-200"
          >
            <User className="w-10 h-10 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-purple-700 mb-2">What is an OPC?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              OPC is a business structure that allows a solo entrepreneur to enjoy the benefits of a private limited company while maintaining complete control.
            </p>
          </motion.div>

          <div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="https://img.freepik.com/free-vector/business-consulting-concept-illustration_114360-9240.jpg"
              alt="OPC illustration"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-red-100 rounded-3xl mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-12">
            Benefits of Registering an OPC
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                title: "Limited Liability",
                desc: "Your personal assets are protected from business risks.",
              },
              {
                icon: <Building2 className="w-8 h-8 text-blue-600" />,
                title: "Legal Identity",
                desc: "Operate with a company name, separate from personal identity.",
              },
              {
                icon: <Verified className="w-8 h-8 text-purple-600" />,
                title: "High Trust",
                desc: "Gain more credibility with banks and vendors.",
              },
              {
                icon: <Workflow className="w-8 h-8 text-orange-600" />,
                title: "Full Control",
                desc: "You’re the sole decision-maker and director.",
              },
              {
                icon: <FileText className="w-8 h-8 text-teal-600" />,
                title: "Easy Compliance",
                desc: "Less paperwork than a private limited company.",
              },
              {
                icon: <User className="w-8 h-8 text-pink-600" />,
                title: "Perfect for Solopreneurs",
                desc: "Run your business professionally under a company structure.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white/90 backdrop-blur-lg border border-pink-200 rounded-xl shadow-xl"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-sky-100 mt-16 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Requirements</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 list-disc list-inside">
            <li>One Indian resident director & shareholder</li>
            <li>Nominee for sole member</li>
            <li>Digital Signature Certificate (DSC)</li>
            <li>Director Identification Number (DIN)</li>
            <li>Registered business address in India</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-100 mt-16 rounded-3xl">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-8">How It Works</h2>
          <ol className="text-left space-y-4 list-decimal list-inside text-lg text-gray-700">
            <li>Apply for DSC and DIN</li>
            <li>Reserve your company name</li>
            <li>Prepare MOA and AOA documents</li>
            <li>Submit forms for incorporation</li>
            <li>Receive Certificate of Incorporation</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-t-3xl mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Register Your OPC with Experts!
        </motion.h3>
        <p className="mt-4 text-lg mb-8">
          100% Online Process. Fast, Secure & Affordable with Legal Support.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 shadow-md">
          🚀 Get Started Today
        </button>
      </section>
    </main>
  );
};

export default OnePersonCompany;
