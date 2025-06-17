const ITR6ReturnFiling = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-6 Return Filing for Companies
          </h1>
          <p className="text-gray-600 text-lg">
            Accurate and compliant ITR-6 filing services for private and public limited companies under the Income Tax Act.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-6 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-6?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Private limited companies</li>
            <li>Public limited companies</li>
            <li>One person companies</li>
            <li>Companies not claiming exemption under section 11 (charitable/religious trusts)</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of the company</li>
            <li>Company’s financial statements (P&L, Balance Sheet)</li>
            <li>Auditor’s report and audit report under section 44AB</li>
            <li>Details of directors and shareholders</li>
            <li>Bank statements and Form 26AS</li>
            <li>Details of all incomes, deductions, and taxes paid</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR6ReturnFiling;