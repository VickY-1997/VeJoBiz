const TDSReturnFiling = () => {
  return (
    <>
        <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            TDS Return Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Hassle-free quarterly TDS return filing for businesses and individuals. Stay compliant with all tax regulations.
          </p>
        </div>
      </section>

      {/* What is TDS Return Filing? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is TDS Return Filing?</h2>
          <p className="text-gray-700">
            TDS (Tax Deducted at Source) Return Filing is a mandatory quarterly statement submitted to the Income Tax Department by individuals and businesses who deduct tax at source on payments like salaries, interest, rent, commission, etc.
          </p>
        </div>
      </section>

      {/* Who Should File TDS Returns? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File TDS Returns?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Employers deducting TDS on salaries</li>
            <li>Businesses making contractual payments</li>
            <li>Companies paying rent, commission, interest, or professional fees</li>
            <li>Any individual or firm liable to deduct tax at source</li>
          </ul>
        </div>
      </section>

      {/* Types of TDS Returns */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Types of TDS Returns</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Form 24Q:</strong> TDS on salary</li>
            <li><strong>Form 26Q:</strong> TDS on all payments except salaries</li>
            <li><strong>Form 27Q:</strong> TDS on payments to non-residents</li>
            <li><strong>Form 27EQ:</strong> TCS (Tax Collected at Source) returns</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>TAN and PAN of deductor</li>
            <li>PAN of deductees</li>
            <li>Details of TDS challans and payments</li>
            <li>Nature and amount of payments made</li>
            <li>Salary breakup if applicable</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TDSReturnFiling;