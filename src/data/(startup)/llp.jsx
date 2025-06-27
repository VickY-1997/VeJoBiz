"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Landmark, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// A single benefit card component for reusability
const BenefitCard = ({ icon, text, index }) => (
  <motion.div
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
      {icon}
    </div>
    <p className="font-semibold text-gray-800 text-sm">{text}</p>
  </motion.div>
);

// A single document item component
const DocumentItem = ({ text, index }) => (
    <motion.div
        className="bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-lg p-3 flex items-center space-x-3 hover:bg-white transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <FileText className="w-5 h-5 text-gray-500 flex-shrink-0" />
        <p className="text-gray-700 text-sm">{text}</p>
    </motion.div>
);


// The main component for the LLP page
const LimitedLiabilityPartnership = () => {
  const benefits = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Limited Liability Protection" },
    { icon: <Users className="w-6 h-6" />, text: "Separate Legal Identity" },
    { icon: <Landmark className="w-6 h-6" />, text: "Flexible Ownership Structure" },
    { icon: <FileText className="w-6 h-6" />, text: "No Minimum Capital Required" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Low Compliance Costs" },
    { icon: <Users className="w-6 h-6" />, text: "Easy to Add/Remove Partners" },
  ];

  const documents = [
    "PAN Card of all designated partners",
    "Identity Proof (Aadhar/Voter ID/Passport) of partners",
    "Passport-size photographs of all partners",
    "Proof of business address (e.g., utility bill)",
    "No Objection Certificate (NOC) from the property owner (if rented)",
    "Digital Signature Certificate (DSC) for at least one partner",
  ];

  const processSteps = [
    { title: "Digital Signature (DSC)", description: "Obtain Digital Signature Certificates for all designated partners." },
    { title: "Name Reservation", description: "Apply for and reserve the proposed LLP name through the MCA portal (RUN-LLP service)." },
    { title: "Incorporation Filing", description: "File the FiLLiP form which includes details for DIN allotment." },
    { title: "Drafting LLP Agreement", description: "Draft the LLP Agreement governing the mutual rights and duties among partners." },
    { title: "Filing Agreement", description: "File Form 3 with the registrar within 30 days of incorporation." },
    { title: "Certification", description: "Receive the Certificate of Incorporation from the MCA." },
    { title: "Post-Incorporation", description: "Apply for PAN, TAN, and open a dedicated LLP bank account." },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-4 text-center md:text-left pl-25"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Effortless <span className="text-blue-600">LLP Registration</span> <br /> for Modern Businesses
              </h1>
              <p className="text-gray-600 text-lg">
                Partner with <strong>Ve Yazh Business Solutions</strong> to establish your Limited Liability Partnership, combining the flexibility of a partnership with the security of limited liability.
              </p>
              <motion.button
                className="inline-flex items-center justify-center px-7 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={"/contact"}>Get Started Today</Link> <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://blogmedia.testbook.com/blog/wp-content/uploads/2024/07/limited-liability-partnership-e5cf20b2.png"
                alt="LLP Illustration"
                className="w-full max-w-xs rounded-2xl shadow-2xl bg-white/60 backdrop-blur-md p-4 border border-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=LLP+Concept'; }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose an LLP?</h2>
            <p className="mt-3 text-lg text-gray-600">Discover the powerful advantages an LLP structure offers your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} icon={benefit.icon} text={benefit.text} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS & PROCESS WRAPPER */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">

            {/* DOCUMENTS SECTION */}
            <div className="lg:col-span-2">
                <div className="sticky top-24">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Documents You'll Need</h2>
                    <p className="text-gray-600 mb-6">Gathering these documents beforehand will ensure a smooth registration process.</p>
                    <div className="space-y-3">
                        {documents.map((doc, idx) => (
                        <DocumentItem key={idx} text={doc} index={idx} />
                        ))}
                    </div>
                </div>
            </div>

            {/* PROCESS SECTION (VERTICAL TIMELINE) */}
            <div className="lg:col-span-3">
                 <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Streamlined Registration Process</h2>
                <div className="relative border-l-2 border-blue-200">
                {processSteps.map((step, idx) => (
                    <motion.div
                    key={idx}
                    className="mb-8 ml-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                    <span className="absolute -left-[1.3rem] flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-8 ring-white">
                        <span className="font-bold text-blue-600">{idx + 1}</span>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-500">{step.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedLiabilityPartnership;
