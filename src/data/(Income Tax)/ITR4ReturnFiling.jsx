const ITR4ReturnFiling = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-4 (Sugam) Return Filing
          </h1>
          <p className="text-gray-600 text-lg">
            Easy filing for small business owners, professionals, and transporters under the Presumptive Taxation Scheme.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-4 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-4?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individuals, HUFs, or partnership firms (excluding LLPs)</li>
            <li>Business income under section 44AD or 44AE</li>
            <li>Professional income under section 44ADA (e.g., doctors, CA, architects)</li>
            <li>Total income up to ₹50 lakh</li>
            <li>Opting for presumptive taxation to simplify accounting</li>
          </ul>
        </div>
      </section>

      {/* Who Cannot File ITR-4 */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Cannot File ITR-4?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Income above ₹50 lakh</li>
            <li>Capital gains or foreign income</li>
            <li>More than one house property</li>
            <li>Regular books of accounts maintained (use ITR-3 instead)</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card, Aadhaar card</li>
            <li>Bank statements and passbook summary</li>
            <li>Details of gross receipts or turnover</li>
            <li>Form 26AS and AIS report</li>
            <li>Investment proofs for deduction (if applicable)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR4ReturnFiling;