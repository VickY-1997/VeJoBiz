const IncomeTaxEFiling = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Income Tax e-Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Hassle-free online income tax return (ITR) filing for individuals, professionals, and businesses. Maximize deductions and stay compliant.
          </p>
        </div>
      </section>

      {/* Why File ITR? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Should You File Income Tax Return?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legal obligation if your income exceeds the taxable limit</li>
            <li>Claim tax refunds and deductions</li>
            <li>Essential for visa, loans, and financial planning</li>
            <li>Carry forward losses and avoid penalties</li>
            <li>Maintain a clean tax record</li>
          </ul>
        </div>
      </section>

      {/* Who Should File ITR? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs to File ITR?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individuals with income above ₹2.5 lakh (basic exemption)</li>
            <li>Businesses and freelancers</li>
            <li>NRIs with income from India</li>
            <li>People claiming refund on TDS</li>
            <li>Those with foreign assets or income</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN Card and Aadhaar Card</li>
            <li>Form 16 / Salary Slips</li>
            <li>Bank statements</li>
            <li>Investment proofs (LIC, PPF, etc.)</li>
            <li>Home loan / Education loan interest certificates</li>
            <li>Capital gain statements (if any)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default IncomeTaxEFiling;