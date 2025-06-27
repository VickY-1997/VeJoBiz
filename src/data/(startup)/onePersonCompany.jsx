"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  ShieldCheck,
  FileText,
  Workflow,
  Verified,
  CheckCircle2,
} from "lucide-react";

// Benefit Card
const BenefitCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="p-4 bg-white/90 backdrop-blur-lg border border-pink-200 rounded-xl shadow-md h-full"
  >
    <div className="mb-2 text-pink-500">{icon}</div>
    <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </motion.div>
);

// Requirement Item
const RequirementItem = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start space-x-3 p-3 bg-blue-50/70 rounded-lg border border-blue-100 hover:shadow-sm hover:bg-blue-100 transition-all"
  >
    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
    <p className="text-gray-700 text-sm">{text}</p>
  </motion.div>
);

// Timeline Step
const TimelineStep = ({ index, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative pl-12 mb-8 last:mb-0"
  >
    <div className="absolute left-0 top-0 flex items-center justify-center">
      <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white text-sm font-bold shadow ring-4 ring-purple-100">
        {index + 1}
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-purple-700 text-sm mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

// Main Page
const OnePersonCompany = () => {
  const benefits = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Limited Liability", desc: "Your personal assets are protected from business risks and debts." },
    { icon: <Building2 className="w-6 h-6" />, title: "Separate Legal Entity", desc: "The company has its own legal identity, distinct from you." },
    { icon: <Verified className="w-6 h-6" />, title: "Enhanced Credibility", desc: "Gain more trust with banks, clients, and vendors as a registered company." },
    { icon: <Workflow className="w-6 h-6" />, title: "Complete Control", desc: "As the sole member, you are the ultimate decision-maker." },
    { icon: <FileText className="w-6 h-6" />, title: "Simpler Compliance", desc: "Enjoy fewer compliance requirements compared to a private limited company." },
    { icon: <User className="w-6 h-6" />, title: "Perfect for Solopreneurs", desc: "The ideal structure for a single founder to operate formally." },
  ];

  const requirements = [
    "One individual who is an Indian citizen and resident.",
    "A nominee, who is also an Indian citizen and resident.",
    "Digital Signature Certificate (DSC) for the director.",
    "Director Identification Number (DIN) for the director.",
    "A unique and approved name for the company.",
    "A registered office address within India.",
  ];

  const processSteps = [
    { title: "Step 1: Obtain DSC and DIN", description: "Apply for the Digital Signature Certificate and Director Identification Number, required for online filings." },
    { title: "Step 2: Reserve Company Name", description: "File for your chosen company name using MCA's RUN (Reserve Unique Name) service." },
    { title: "Step 3: Prepare Documents", description: "We draft MOA and AOA for your OPC, outlining business objectives and internal rules." },
    { title: "Step 4: File Incorporation", description: "We submit the SPICe+ form with required attachments for incorporation, PAN, and TAN." },
    { title: "Step 5: Receive Certificate", description: "Once approved, you'll receive your Certificate of Incorporation and your OPC is live." },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero */}
      <section className="text-center py-10 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600"
        >
          One Person Company (OPC) Registration
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-2xl mx-auto text-base text-gray-600"
        >
          The ideal legal structure for solo founders. Enjoy limited liability, full control, and enhanced credibility.
        </motion.p>
      </section>

      {/* What is OPC */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">What is a One Person Company?</h2>
            <p className="text-gray-600 text-sm mb-2">
              A One Person Company (OPC) is a structure introduced by the Companies Act, 2013. It allows a single entrepreneur to operate with limited liability.
            </p>
            <p className="text-gray-600 text-sm">
              Your personal assets remain protected from business debts. It combines control with corporate protection.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/business-consulting-concept-illustration_114360-9240.jpg"
              alt="OPC Illustration"
              className="rounded-xl w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 px-4 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Advantages of an OPC</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {benefits.map((item, i) => (
              <BenefitCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Eligibility & Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, i) => (
              <RequirementItem key={i} text={req} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Simple 5-Step Registration Process
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-purple-200" aria-hidden="true"></div>
            {processSteps.map((step, i) => (
              <TimelineStep
                key={i}
                index={i}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnePersonCompany;
