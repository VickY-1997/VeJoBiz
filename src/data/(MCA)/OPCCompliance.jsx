"use client";

import React, { useState } from "react";
import { FileText, ShieldCheck, UserCheck } from "lucide-react";

const OPCCompliance = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Services", "Documents"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">OPC Compliance Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/90 animate-fade-in delay-100">
          Stay compliant with ROC filings and tax obligations for your One Person Company (OPC) without any stress.
        </p>
      </section>

      {/* Main Content Wrapper */}
      <div className="w-full px-6 md:px-20 lg:px-32 mt-10">
        {/* Tabs */}
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
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Why OPC Compliance is Important</h2>
              <p className="text-gray-700">
                Timely filings and documentation help you avoid penalties and maintain the legal health of your OPC. Let us handle it for you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, text: "Avoid Legal Risks" },
                  { icon: <UserCheck className="w-6 h-6 text-indigo-600" />, text: "Reliable Support" },
                  { icon: <FileText className="w-6 h-6 text-indigo-600" />, text: "Complete Documentation" },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
              {["MCA Annual Return", "Income Tax Filing", "Director KYC", "Statutory Audit", "Form MGT-7A", "Form AOC-4"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-100 via-blue-50 to-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 transition transform hover:scale-105 hover:shadow-xl duration-300"
                  >
                    <h3 className="text-lg font-semibold text-indigo-800">{item}</h3>
                    <p className="text-sm text-gray-600 mt-2">All ROC and tax-related filings for OPCs.</p>
                  </div>
                )
              )}
            </div>
          )}

          {activeTab === "Documents" && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
              {["PAN of OPC", "Certificate of Incorporation", "Financial Statements", "Digital Signature", "Director ID Proof", "Audit Report"].map(
                (doc, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border-l-4 border-indigo-400 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
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

export default OPCCompliance;
