"use client";

import React, { useState } from "react";
import { CheckCircle, FileText, UserCheck, ShieldCheck } from "lucide-react";

const CompanyCompliance = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Services", "Documents"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Stay Compliant. Stay Ahead.</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/90 animate-fade-in delay-100">
          Seamless company compliance solutions by trusted professionals. No delays. No penalties.
        </p>
      </section>

      {/* Tabs */}
      <div className="mt-10 px-6 md:px-20">
        <ul className="flex justify-center gap-6 border-b">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 font-semibold transition duration-300 border-b-2 ${
                activeTab === tab
                  ? "border-indigo-600 text-indigo-700"
                  : "border-transparent text-gray-500 hover:text-indigo-600"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === "Overview" && (
            <div className="text-center animate-fade-up">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Why Company Compliance Matters</h2>
              <p className="max-w-3xl mx-auto text-gray-700">
                Non-compliance can result in hefty penalties and legal troubles. Our end-to-end solutions keep your business compliant, transparent, and investor-ready.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, text: "Zero Penalties" },
                  { icon: <UserCheck className="w-6 h-6 text-indigo-600" />, text: "Expert Assistance" },
                  { icon: <FileText className="w-6 h-6 text-indigo-600" />, text: "End-to-End Filings" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow p-4 px-6 rounded-xl flex items-center gap-3 border border-indigo-100"
                  >
                    {item.icon}
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Services" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-up">
              {["Auditor Appointment", "AGM Support", "MGT-7 (Annual Return)", "AOC-4 (Financials)", "Board Resolutions", "Statutory Registers"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-100 via-indigo-50 to-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 transition transform hover:scale-105 hover:shadow-xl duration-300"
                  >
                    <h3 className="text-lg font-semibold text-indigo-800">{item}</h3>
                    <p className="text-sm text-gray-600 mt-2">We ensure timely and accurate handling of this service.</p>
                  </div>
                )
              )}
            </div>
          )}

          {activeTab === "Documents" && (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-up">
              {["Company PAN Card", "Certificate of Incorporation", "MOA & AOA", "Audited Financials", "Digital Signatures", "Bank Statements"].map(
                (doc, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border-l-4 border-purple-400 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
                  >
                    <p className="text-gray-700 font-medium">{doc}</p>
                  </div>
                )
              )}
            </div>
          )}

         
        </div>
      </div>


      {/* Custom Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out forwards;
        }
        .animate-fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyCompliance;
