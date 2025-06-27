"use client";
import { motion } from "framer-motion";

const StartupIndia = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-100 via-white to-yellow-100 px-4 py-8 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-600 via-pink-500 to-red-500 text-transparent bg-clip-text leading-snug">
            Startup India Registration
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Get recognized under the Startup India scheme and enjoy tax benefits, funding support, and incentives. Register with <strong>Ve Yazh Business Solutions</strong>.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 px-4 py-8 md:px-6 mt-5 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-orange-700 mb-6">Benefits of Startup India Registration</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 text-left md:text-center max-w-lg mx-auto space-y-2">
            <li>Tax exemption under Section 80 IAC and Section 56</li>
            <li>Easy access to government funding and tenders</li>
            <li>Self-certification under labor and environmental laws</li>
            <li>Faster patent and trademark application processing</li>
            <li>Networking and investor access through Startup India portal</li>
          </ul>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-gradient-to-br from-white to-pink-50 px-4 py-8 md:px-6 mt-5 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-pink-600 mb-6">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 text-left md:text-center max-w-lg mx-auto space-y-2">
            <li>The company must be a Private Limited Company, LLP, or Partnership</li>
            <li>Incorporated within the last 10 years</li>
            <li>Annual turnover should not exceed ₹100 crores</li>
            <li>Should focus on innovation, development, or improvement of products/services</li>
            <li>Should not be formed by splitting or reconstructing an existing business</li>
          </ul>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-4 py-8 md:px-6 mt-5 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-purple-700 mb-6">Required Documents</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 text-left md:text-center max-w-lg mx-auto space-y-2">
            <li>Certificate of Incorporation</li>
            <li>Details of Directors and Partners</li>
            <li>Business description and pitch deck (if available)</li>
            <li>Website link or product demo (if available)</li>
            <li>PAN card of the company</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 px-4 py-8 md:px-6 mt-5 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-700 mb-6">Registration Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 text-left md:text-center max-w-md mx-auto">
            <li>Incorporate your business entity (Pvt Ltd, LLP, or Partnership)</li>
            <li>Create an account on the Startup India portal</li>
            <li>Fill out the recognition form and upload required documents</li>
            <li>Get DPIIT recognition certificate</li>
            <li>Start enjoying tax and funding benefits</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default StartupIndia;
