const ITR1ReturnFiling = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-1 (Sahaj) Return Filing
          </h1>
          <p className="text-gray-600 text-lg">
            Quick and accurate online filing for salaried individuals with income up to ₹50 lakh. Let us handle your taxes stress-free.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-1 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-1?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Salaried individuals or pensioners with income up to ₹50 lakh</li>
            <li>Income from one house property</li>
            <li>Income from other sources (interest, FD, etc.)</li>
            <li>Resident individuals (not for HUFs or non-residents)</li>
          </ul>
        </div>
      </section>

      {/* Who Cannot File ITR-1 */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Cannot Use ITR-1?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Income above ₹50 lakh</li>
            <li>Income from more than one house property</li>
            <li>Capital gains or business/professional income</li>
            <li>Non-resident individuals</li>
            <li>Foreign income or assets</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card and Aadhaar card</li>
            <li>Form 16 (from employer)</li>
            <li>Salary slips (optional)</li>
            <li>Bank interest statements</li>
            <li>Investment proofs for deductions</li>
            <li>Form 26AS / AIS</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR1ReturnFiling;