"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  FileText,
  ShieldCheck,
  ArrowRight,
  Check,
  Award,
  Zap,
  BrainCircuit,
  Star
} from "lucide-react";
import React, { useRef } from "react";

// --- Global Styles & Fonts ---
const GlobalStyles = () => (
    <style jsx global>{`
      @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');
      
      body {
        font-family: 'Satoshi', sans-serif;
      }
      .gradient-text {
        background-image: linear-gradient(90deg, #4f46e5, #c026d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    `}</style>
);

// --- Reusable Animated Components ---

// Glassmorphic Card for features and benefits
const GlassCard = ({ icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg shadow-indigo-100/50 h-full"
    >
       <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full text-white shadow-md">
                {icon}
          </div>
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
       </div>
       <p className="mt-4 text-slate-600 text-sm">{desc}</p>
    </motion.div>
);

// Animated Timeline for the process steps
const AnimatedTimeline = ({ steps }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <div ref={targetRef} className="relative">
            <div className="absolute left-4 top-0 w-px h-full bg-slate-200" />
            <motion.div style={{ height }} className="absolute left-4 top-0 w-px bg-indigo-500" />

            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex items-start gap-6 pl-12 mb-8"
                >
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-indigo-600">STEP {i + 1}</p>
                        <h4 className="font-bold text-slate-800 text-lg mt-1">{step.title}</h4>
                        <p className="text-slate-500 mt-1 text-sm">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};


// --- Main Partnership Page Component ---

const Partnership = () => {
  const features = [
    { icon: <Users className="w-6 h-6" />, title: "Effortless Collaboration", desc: "Share responsibilities and profits based on a clear, mutually agreed-upon legal framework." },
    { icon: <FileText className="w-6 h-6" />, title: "Simplified Setup", desc: "Launch your business swiftly with minimal documentation and a straightforward registration process." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Legal Security", desc: "Operate with confidence knowing your business is built on a solid, legally recognized foundation." },
    { icon: <Award className="w-6 h-6"/>, title: "Expert-Led Process", desc: "Our team of legal experts ensures a flawless and compliant registration from start to finish." },
    { icon: <Zap className="w-6 h-6"/>, title: "Accelerated Timeline", desc: "We prioritize your application, leveraging our expertise for the quickest possible turnaround." },
    { icon: <BrainCircuit className="w-6 h-6"/>, title: "Customized Partnership Deeds", desc: "We help you draft a partnership deed that perfectly aligns with your unique business goals." },
  ];

  const processSteps = [
    { title: "Consult & Submit Details", description: "Provide us with the necessary partner and business information through our secure portal." },
    { title: "Drafting of Partnership Deed", description: "Our legal experts will draft a comprehensive deed tailored to your specific requirements and needs." },
    { title: "Execution & Notarization", description: "The deed is signed by all partners and then legally notarized to ensure its validity." },
    { title: "Application Submission", description: "We meticulously prepare and file the registration application with the appropriate government authorities." },
    { title: "Receive Certificate", description: "Your firm is officially registered, and you receive the certificate, ready to start your business operations." },
  ];
  
  return (
    <>
    <GlobalStyles />
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute w-[40vmax] h-[40vmax] rounded-full bg-purple-200/40 -top-40 -left-40 filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute w-[50vmax] h-[50vmax] rounded-full bg-indigo-200/40 -bottom-60 -right-20 filter blur-3xl opacity-50 animate-pulse-slow animation-delay-2000" />
        </div>

        <div className="relative z-10">

            {/* Hero Section */}
            <section className="relative h-[40vh] flex flex-col items-center justify-center text-center px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-black leading-tight">
                        Foundation of <span className="gradient-text">Great Partnerships</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-600">
                      Seamlessly register your Partnership Firm with our expert-guided, technology-driven platform.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-full text-base flex items-center gap-2 mx-auto shadow-xl shadow-slate-300"
                    >
                        Start Your Registration <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                        A Framework for <span className="gradient-text">Success</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, i) => (
                           <GlassCard key={i} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Process Section */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                        Your Path to <span className="gradient-text">Registration</span>
                    </h2>
                    <AnimatedTimeline steps={processSteps} />
                </div>
            </section>

             {/* Final CTA Section */}
             <footer className="py-20 px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Ready to Build Together?</h2>
                 <p className="text-slate-600 max-w-xl mx-auto mb-8">
                    Let's create the legal foundation for your business venture. Our experts are ready to guide you.
                 </p>
                 <motion.button
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px -10px rgba(79, 70, 229, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-lg shadow-indigo-200"
                  >
                   Start My Partnership
                 </motion.button>
             </footer>
        </div>
    </div>
    </>
  );
};

export default Partnership;
