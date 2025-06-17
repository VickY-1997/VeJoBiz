"use client";
import { motion } from "framer-motion";
import { Users, FileText, ShieldCheck, Timer, ScrollText, Landmark } from "lucide-react";

const Partnership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500"
        >
          Partnership Firm Registration
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          Register your business with mutual trust and legal assurance. Ideal for collaborative ventures and family-run enterprises.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="w-8 h-8 text-teal-400" />,
              title: "Shared Responsibility",
              desc: "Partners share responsibilities and profits equally or as agreed."
            },
            {
              icon: <FileText className="w-8 h-8 text-yellow-400" />,
              title: "Simple Formation",
              desc: "Minimal documentation and quick setup with legal recognition."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
              title: "Less Compliance",
              desc: "Compared to private companies, partnerships require fewer formalities."
            },
            {
              icon: <ScrollText className="w-8 h-8 text-pink-400" />,
              title: "Flexible Operations",
              desc: "Partners can manage operations with flexible internal agreements."
            },
            {
              icon: <Timer className="w-8 h-8 text-purple-400" />,
              title: "Quick Setup",
              desc: "Complete your registration within 4–7 working days."
            },
            {
              icon: <Landmark className="w-8 h-8 text-orange-400" />,
              title: "Bank Account Ready",
              desc: "Easily open a current account for business transactions."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/10 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-100">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Should Register */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white"
          >
            Who Should Register a Partnership Firm?
          </motion.h2>
          <ul className="grid md:grid-cols-2 gap-4 text-left text-gray-300 text-lg">
            <li>✅ Small and medium-sized businesses</li>
            <li>✅ Family-run businesses</li>
            <li>✅ Retailers & traders</li>
            <li>✅ Professionals with trusted partners</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Documents Required</h2>
          <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
            <li>PAN Card & Aadhaar of all partners</li>
            <li>Passport size photographs</li>
            <li>Rental agreement or electricity bill</li>
            <li>Drafted partnership deed (we help prepare this)</li>
            <li>Firm name and nature of business</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-cyan-700 to-blue-700 rounded-t-3xl">
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Start Your Partnership Journey Today
        </motion.h3>
        <p className="text-white mt-4 mb-8">Let us handle the registration while you focus on building your business.</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl">
          🚀 Book a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default Partnership;
