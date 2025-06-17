const ITR3ReturnFiling = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-3 Return Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Expert filing support for individuals with income from business, profession, or partnership firms. Avoid tax errors and stay compliant.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-3 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-3?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Self-employed professionals (doctors, lawyers, architects, etc.)</li>
            <li>Freelancers, consultants, and gig workers</li>
            <li>Individuals running a business (sole proprietorship)</li>
            <li>Partners earning from a partnership firm</li>
            <li>Individuals with income from intraday or F&O trading</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card, Aadhaar card</li>
            <li>Bank account details and statements</li>
            <li>Details of income and expenses (P&L account)</li>
            <li>Balance sheet of business/profession</li>
            <li>Form 26AS, AIS, and TDS certificates</li>
            <li>Investment proofs and deduction details</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR3ReturnFiling;