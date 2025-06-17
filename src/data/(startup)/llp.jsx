"use client";
import { motion } from "framer-motion";

const LimitedLiabilityPartnership = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Limited Liability Partnership (LLP) Registration
            </h1>
            <p className="text-gray-600 text-lg">
              Register your LLP effortlessly with <strong>Ve Yazh Business Solutions</strong>.
              Get the benefits of limited liability and ease of management.
            </p>
          </motion.div>
          <motion.img
            src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/businessman-character-animation.gif"
            alt="LLP Illustration"
            className="rounded-xl w-full h-auto shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white px-4 py-16 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
            Key Benefits of LLP
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Limited liability protection",
              "Separate legal identity",
              "Flexible ownership structure",
              "No minimum capital requirement",
              "Lower compliance costs",
              "Easy to add/remove partners",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <p className="text-gray-700 text-base">✅ {item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 py-16 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
            Required Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "PAN Card of all partners",
              "Aadhar / Voter ID / Passport",
              "Passport-size photographs",
              "Business address proof",
              "NOC from property owner (if rented)",
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-gray-700">📄 {doc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-16 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
            LLP Registration Process
          </h2>
          <ol className="space-y-4 text-gray-700 max-w-3xl mx-auto list-decimal list-inside">
            {[
              "Obtain Digital Signature Certificates (DSC)",
              "Apply for Director Identification Numbers (DIN)",
              "Reserve LLP name via MCA portal",
              "File incorporation form with necessary documents",
              "Draft and notarize LLP Agreement",
              "Receive Certificate of Incorporation",
              "Apply for PAN, TAN, and open a bank account",
            ].map((step, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default LimitedLiabilityPartnership;
