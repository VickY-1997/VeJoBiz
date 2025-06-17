const BusinessTaxFiling = () => {
  return (
    <>
          <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Business Income Tax Filing
          </h1>
          <p className="text-gray-600 text-lg">
            Ensure timely and accurate tax filing for your business. We handle the complexities, so you stay compliant and penalty-free.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Timely Business Tax Filing Is Important</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Avoid interest, late fees, and penalties</li>
            <li>Maintain compliance and avoid scrutiny</li>
            <li>Claim eligible deductions and exemptions</li>
            <li>Mandatory for business loans, tenders, and investor interest</li>
            <li>Carry forward business losses</li>
          </ul>
        </div>
      </section>

      {/* Who Needs It? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sole proprietors</li>
            <li>Partnership firms and LLPs</li>
            <li>Private limited and public limited companies</li>
            <li>Startups and MSMEs</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of business and authorized signatory</li>
            <li>Business registration certificate</li>
            <li>Bank statements and loan statements</li>
            <li>Books of accounts and financials (P&L, balance sheet)</li>
            <li>Details of assets, liabilities, and investments</li>
            <li>Previous year’s ITR copy (if applicable)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BusinessTaxFiling;