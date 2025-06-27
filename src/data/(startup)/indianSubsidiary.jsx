"use client";
import { motion } from "framer-motion";
import { Building2, Flag, ShieldCheck, Globe2, FileText, ScrollText, GitBranchPlus, FileSignature, Landmark, ChevronsRight, UserCheck, Star, Zap, Briefcase } from "lucide-react";

// Data for the benefits section with new gradient properties for the card backgrounds
const benefitsData = [
  { icon: <Globe2 className="w-10 h-10" />, title: "100% FDI Allowed", description: "Full foreign ownership is permitted in most sectors via the automatic route.", gradient: "from-cyan-400 to-blue-500", textColor: "text-blue-900" },
  { icon: <Flag className="w-10 h-10" />, title: "Access Indian Market", description: "Tap into one of the world's largest and fastest-growing consumer markets.", gradient: "from-rose-400 to-red-500", textColor: "text-red-900" },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Limited Liability", description: "The parent company's financial liability is limited to its investment in the subsidiary.", gradient: "from-emerald-400 to-green-500", textColor: "text-green-900" },
  { icon: <Building2 className="w-10 h-10" />, title: "Separate Legal Entity", description: "Operates as a distinct Indian entity with its own rights and perpetual existence.", gradient: "from-indigo-400 to-purple-500", textColor: "text-purple-900" },
  { icon: <Landmark className="w-10 h-10" />, title: "Profit Repatriation", description: "Seamlessly transfer profits and dividends back to the foreign parent company.", gradient: "from-amber-400 to-orange-500", textColor: "text-orange-900" },
  { icon: <GitBranchPlus className="w-10 h-10" />, title: "Credibility & Trust", description: "An incorporated entity enhances brand image and builds trust with local partners.", gradient: "from-sky-400 to-cyan-500", textColor: "text-cyan-900" },
];

const IndianSubsidiary = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-16 md:px-6">
        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_10%,transparent)]"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-4 z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Indian Subsidiary Company Registration
          </motion.h1>
          <motion.p 
            className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Establish your presence in India. <strong>Ve Yazh Business Solutions</strong> offers expert guidance for a seamless registration of your foreign company’s subsidiary.
          </motion.p>
        </div>
      </section>

      <main className="px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* BENEFITS SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Strategic Advantages in India</h2>
            <p className="text-center text-slate-500 mb-12">Unlock your company's potential with these key benefits.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {benefitsData.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:blur-lg`}></div>
                  <div className={`relative bg-white/80 backdrop-blur-lg ring-1 ring-slate-900/5 p-6 rounded-xl text-center flex flex-col items-center gap-4 transition-all duration-300 shadow-lg h-full ${item.textColor}`}>
                    <div className="p-3 bg-white rounded-full shadow-md">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* NEW SECTION: ELIGIBILITY CRITERIA */}
          <section>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Eligibility Criteria</h2>
            <p className="text-center text-slate-500 mb-12">Ensure you meet the following requirements for a smooth setup.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{delay: 0.1}} viewport={{once: true}} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 text-center">
                    <UserCheck className="w-12 h-12 mx-auto text-purple-500 mb-4"/>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Directors</h3>
                    <p className="text-slate-600 text-sm">A minimum of two directors are required. At least one director must be a resident of India.</p>
                </motion.div>
                 <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{delay: 0.2}} viewport={{once: true}} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-500 text-center">
                    <Briefcase className="w-12 h-12 mx-auto text-rose-500 mb-4"/>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Parent Company</h3>
                    <p className="text-slate-600 text-sm">The foreign company must be a registered body corporate in its country of origin.</p>
                </motion.div>
                 <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{delay: 0.3}} viewport={{once: true}} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 text-center">
                    <Landmark className="w-12 h-12 mx-auto text-amber-500 mb-4"/>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Shareholding</h3>
                    <p className="text-slate-600 text-sm">The foreign parent company must hold more than 50% of the total equity share capital of the Indian entity.</p>
                </motion.div>
            </div>
          </section>

          {/* DOCUMENTS & PROCESS SECTION */}
          <section className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* DOCUMENTS REQUIRED */}
              <div>
                  <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 text-emerald-300"><FileSignature />Required Documents</h2>
                  <div className="space-y-3">
                      {[
                          "Passport & ID of foreign directors (notarized/apostilled)",
                          "Indian address proof for registered office",
                          "Parent company's Board Resolution",
                          "Parent company's Charter documents (MOA & AOA)",
                          "NOC from the property owner in India",
                          "DSC for at least one Indian resident director",
                      ].map((doc, i) => (
                          <motion.div
                              key={i}
                              className="bg-slate-800 p-3 rounded-md border-l-4 border-emerald-500 hover:bg-slate-700 transition-colors flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                          >
                              <FileText className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{doc}</span>
                          </motion.div>
                      ))}
                  </div>
              </div>
              
              {/* REGISTRATION PROCESS */}
              <div>
                  <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 text-sky-300"><ScrollText/>Registration Process</h2>
                  <div className="space-y-4">
                      {[
                        "Obtain DSC & DIN for directors (one must be Indian resident).",
                        "File for name reservation via SPICe+ Part A.",
                        "Draft MOA & AOA aligned with parent company objectives.",
                        "File SPICe+ Part B and linked forms for incorporation.",
                        "Receive Certificate of Incorporation, PAN, and TAN.",
                        "Open a corporate bank account & fulfill RBI reporting.",
                      ].map((step, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex-shrink-0 z-10 w-7 h-7 flex items-center justify-center bg-sky-500/80 text-white font-bold rounded-full shadow">
                            <ChevronsRight size={16}/>
                          </div>
                          <p className="text-slate-300 text-sm pt-1">{step}</p>
                        </motion.div>
                      ))}
                  </div>
              </div>
            </div>
          </section>

          {/* NEW SECTION: WHY CHOOSE US */}
           <section>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Our Advantage</h2>
            <p className="text-center text-slate-500 mb-12">Experience a seamless registration process with our expert team.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.1}} className="relative p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg overflow-hidden">
                    <Zap className="absolute -right-4 -bottom-4 w-28 h-28 text-indigo-400/30"/>
                    <div className="relative z-10">
                        <Star className="w-8 h-8 mb-3 text-amber-300"/>
                        <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                        <p className="text-sm text-indigo-100">Our team has extensive experience navigating the complexities of Indian corporate law.</p>
                    </div>
                </motion.div>
                 <motion.div initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.2}} className="relative p-6 bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-xl shadow-lg overflow-hidden">
                    <Zap className="absolute -right-4 -bottom-4 w-28 h-28 text-slate-600/30"/>
                    <div className="relative z-10">
                        <Star className="w-8 h-8 mb-3 text-amber-300"/>
                        <h3 className="font-bold text-lg mb-2">Transparent Process</h3>
                        <p className="text-sm text-slate-300">We maintain complete transparency throughout the registration process, with no hidden costs.</p>
                    </div>
                </motion.div>
                 <motion.div initial={{opacity:0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.3}} className="relative p-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl shadow-lg overflow-hidden">
                    <Zap className="absolute -right-4 -bottom-4 w-28 h-28 text-green-400/30"/>
                    <div className="relative z-10">
                        <Star className="w-8 h-8 mb-3 text-amber-300"/>
                        <h3 className="font-bold text-lg mb-2">End-to-End Support</h3>
                        <p className="text-sm text-green-100">From documentation to post-incorporation compliance, we've got you covered.</p>
                    </div>
                </motion.div>
            </div>
          </section>

           {/* NEW SECTION: POST-INCORPORATION */}
          <section className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border">
             <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Life After Incorporation</h2>
            <p className="text-center text-slate-500 mb-12">Stay compliant with these key post-registration requirements.</p>
            <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-rose-600">Initial Compliances</h3>
                    <ul className="space-y-3 list-disc list-inside text-slate-600 text-sm">
                        <li>Appointment of the first statutory auditor within 30 days.</li>
                        <li>Filing for commencement of business in Form INC-20A.</li>
                        <li>Reporting of foreign remittance to the RBI via Form FCGPR.</li>
                        <li>Issuance of share certificates to subscribers.</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-xl font-bold mb-4 text-cyan-600">Annual Compliances</h3>
                    <ul className="space-y-3 list-disc list-inside text-slate-600 text-sm">
                        <li>Filing of Annual Financial Statements (AOC-4).</li>
                        <li>Filing of Annual Return (MGT-7).</li>
                        <li>Holding Annual General Meetings (AGM).</li>
                        <li>Maintaining statutory registers and minutes books.</li>
                    </ul>
                </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default IndianSubsidiary;
