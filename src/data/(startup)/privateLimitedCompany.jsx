"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Banknote,
  Building2,
  UserCheck,
  FileText,
  ArrowRight,
  FileSignature,
  UserPlus,
  PenTool,
  Award,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const PLC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Limited Liability",
      description: "Protect your personal assets from business debts and risks.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Separate Legal Entity",
      description: "The company has its own legal identity, distinct from its owners.",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      icon: <Banknote className="w-6 h-6 text-white" />,
      title: "Easier Fundraising",
      description: "Attract investors and raise capital more easily than other structures.",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Enhanced Credibility",
      description: "A PLC structure is viewed as more professional and trustworthy.",
      bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-800"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Perpetual Succession",
      description: "The company continues to exist even with changes in ownership.",
      bgColor: "bg-gradient-to-br from-rose-600 to-rose-800"
    },
    {
      icon: <UserPlus className="w-6 h-6 text-white" />,
      title: "Transferable Shares",
      description: "Ownership can be easily transferred through the sale of shares.",
      bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-800"
    },
  ];

  const documents = [
    { 
      icon: <FileSignature className="w-5 h-5 text-green-500" />, 
      text: "PAN Card of all directors & shareholders",
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    { 
      icon: <FileSignature className="w-5 h-5 text-blue-500" />, 
      text: "ID Proof (Aadhar/Voter ID/Passport)",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    { 
      icon: <FileSignature className="w-5 h-5 text-purple-500" />, 
      text: "Address Proof (Bank Statement/Utility Bill)",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    { 
      icon: <FileSignature className="w-5 h-5 text-yellow-500" />, 
      text: "Passport-sized photographs",
      bgColor: "bg-yellow-50 hover:bg-yellow-100"
    },
    { 
      icon: <FileSignature className="w-5 h-5 text-red-500" />, 
      text: "Proof of registered office address",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    { 
      icon: <FileSignature className="w-5 h-5 text-indigo-500" />, 
      text: "No Objection Certificate (NOC) from owner",
      bgColor: "bg-indigo-50 hover:bg-indigo-100"
    },
  ];

  const processSteps = [
    {
      icon: <PenTool className="w-5 h-5 text-blue-600" />,
      title: "Step 1: DSC & DIN",
      description: "Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all proposed directors.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Award className="w-5 h-5 text-purple-600" />,
      title: "Step 2: Name Approval",
      description: "Apply for and reserve your unique company name with the Ministry of Corporate Affairs (MCA) through the RUN service.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <FileText className="w-5 h-5 text-green-600" />,
      title: "Step 3: Document Filing",
      description: "Draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the SPICe+ incorporation form.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
      title: "Step 4: Incorporation",
      description: "Receive the Certificate of Incorporation from the MCA, which is conclusive proof of registration.",
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left pl-25"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                  Company Registration
                </h2>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Effortless <span className="text-blue-600">Private Limited Company</span> Registration
              </h1>
              <p className="mt-3 text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Launch your business with confidence. Ve Yazh Business Solutions provides expert assistance to register your PLC seamlessly.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/contact">Get Started Today</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block"
            >
              <img
                src="https://i0.wp.com/digest.myhq.in/wp-content/uploads/2023/10/image-53.png?w=1200&ssl=1"
                alt="PLC Registration Illustration"
                className="rounded-2xl shadow-2xl max-w-[420px] w-full mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} transition={{ duration: 0.7 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Why Choose a PLC?</h2>
            </div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Unlock Powerful Advantages for Your Business
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white ${benefit.bgColor}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-white/90 pl-11">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS & PROCESS SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Documents */}
            <motion.div {...fadeIn} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Required Documents</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Gather these documents to ensure a smooth and fast registration process.
              </p>
              <ul className="space-y-3">
                {documents.map((doc, i) => (
                  <motion.li
                    key={i}
                    className={`flex items-center p-4 rounded-xl transition-all duration-200 ${doc.bgColor}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm">
                      {doc.icon}
                    </div>
                    <span className="ml-4 text-gray-700 font-medium">{doc.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Process */}
            <motion.div {...fadeIn} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <PenTool className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Streamlined Process</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                We follow a clear, 4-step process to get your company registered.
              </p>
              <div className="space-y-4">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className={`relative p-5 rounded-xl ${step.bgColor} shadow-sm hover:shadow-md transition-shadow flex items-start gap-4`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${step.color} bg-white shadow-md mt-1`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${step.color}`}>{step.title}</h3>
                      <p className="mt-1 text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PLC;