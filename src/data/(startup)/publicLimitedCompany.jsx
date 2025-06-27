"use client";
import { motion } from "framer-motion";
import { Banknote, Building2, Users2, ShieldCheck, FileCheck2, ScrollText, ArrowRight } from "lucide-react";

// An array defining the color schemes for the benefit cards for easier management.
const benefitCardStyles = [
  { icon: <Banknote size={28} />, text: "Raise Capital", bgColor: "from-green-400 to-emerald-500", textColor: "text-white", borderColor: "border-emerald-600" },
  { icon: <ShieldCheck size={28} />, text: "Limited Liability", bgColor: "from-blue-400 to-indigo-500", textColor: "text-white", borderColor: "border-indigo-600" },
  { icon: <Users2 size={28} />, text: "Credibility", bgColor: "from-purple-400 to-violet-500", textColor: "text-white", borderColor: "border-violet-600" },
  { icon: <Building2 size={28} />, text: "Perpetual Existence", bgColor: "from-orange-400 to-amber-500", textColor: "text-white", borderColor: "border-amber-600" },
  { icon: <FileCheck2 size={28} />, text: "Easy Share Transfer", bgColor: "from-pink-400 to-rose-500", textColor: "text-white", borderColor: "border-rose-600" },
  { icon: <ScrollText size={28} />, text: "Expansion Opportunities", bgColor: "from-teal-400 to-cyan-500", textColor: "text-white", borderColor: "border-cyan-600" },
];


const PULC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black px-4 py-12 md:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 text-transparent bg-clip-text leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Public Limited Company Registration
          </motion.h1>
          <motion.p 
            className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empower your enterprise by registering as a Public Limited Company with <strong>Ve Yazh Business Solutions</strong>. Gain public trust and unlock unparalleled avenues for raising capital.
          </motion.p>
        </div>
      </section>

      <main className="px-4 md:px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* BENEFITS SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Key Advantages of a PLC</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
              {benefitCardStyles.map((item, i) => (
                <motion.div
                  key={i}
                  className={`p-4 rounded-xl text-center flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer border-b-8 ${item.borderColor} bg-gradient-to-br ${item.bgColor} ${item.textColor} shadow-lg hover:shadow-2xl hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon}
                  <h3 className="font-semibold text-sm leading-tight">{item.text}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS & PROCESS SPLIT SECTION */}
          <section className="grid lg:grid-cols-5 gap-8 items-start">

            {/* DOCUMENTS REQUIRED */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-800 mb-5">Required Documents</h2>
                <div className="space-y-3">
                    {[
                        "PAN Card of all directors & shareholders",
                        "ID Proof (Aadhar/Voter ID/Passport)",
                        "Address Proof (Bank Statement/Utility Bill)",
                        "Passport-sized photographs",
                        "Company's Office Address Proof",
                        "No Objection Certificate (NOC)",
                        "Digital Signature Certificate (DSC)",
                        "Director Identification Number (DIN)",
                    ].map((doc, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-3 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md hover:border-purple-700 transition-all duration-200 flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <FileCheck2 className="text-purple-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{doc}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* REGISTRATION PROCESS */}
            <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-slate-800 mb-5">Streamlined Registration Process</h2>
                <div className="relative">
                  <div className="absolute left-5 top-5 h-full w-0.5 bg-orange-200 -z-10"></div>
                  <div className="space-y-6">
                    {[
                      { title: "Obtain DSC and DIN", description: "Secure Digital Signature Certificates and Director Identification Numbers for directors." },
                      { title: "Company Name Approval", description: "Reserve a unique name for your company via the RUN service on the MCA portal." },
                      { title: "Drafting MOA & AOA", description: "Prepare the foundational Memorandum & Articles of Association for your company." },
                      { title: "Filing for Incorporation", description: "Submit the SPICe+ form along with all required documents to the ROC." },
                      { title: "Receive Incorporation Certificate", description: "The ROC issues the Certificate of Incorporation upon successful verification." },
                      { title: "Post-Incorporation Steps", description: "Apply for company PAN, TAN, and open a corporate bank account." },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="flex-shrink-0 z-10 w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full shadow-md">
                          {i + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-orange-100 shadow-sm w-full hover:shadow-lg transition-shadow">
                          <h3 className="font-bold text-orange-800 text-base mb-1">{step.title}</h3>
                          <p className="text-slate-600 text-sm">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PULC;
