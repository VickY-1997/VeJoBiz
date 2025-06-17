const GSTNotice = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Notice Response Service
          </h1>
          <p className="text-gray-600 text-lg">
            Received a GST notice? Let our experts handle the response, whether it's a mismatch, SCN, or audit-related query.
          </p>
        </div>
      </section>

      {/* About GST Notice */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is a GST Notice?</h2>
          <p className="text-gray-700">
            GST notices are issued by the GST department for various reasons including mismatches in returns, delays, incorrect filings, excess claims, or audit demands. These notices must be responded to within the stipulated time to avoid penalties or legal actions.
          </p>
        </div>
      </section>

      {/* Common GST Notices */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Common Types of GST Notices</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Show Cause Notice (SCN)</li>
            <li>GSTR-3B vs GSTR-1 mismatch</li>
            <li>Annual Return discrepancies</li>
            <li>Non-filing or late filing of returns</li>
            <li>Excess ITC claims</li>
            <li>Audit findings or assessments</li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How We Help</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Analyze the notice and its legal implications</li>
            <li>Draft a professional and accurate response</li>
            <li>Prepare supporting documents and reconciliations</li>
            <li>Submit response on GST portal or to department</li>
            <li>Follow up and represent during hearings if required</li>
          </ul>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Copy of GST notice received</li>
            <li>Past GST returns (GSTR-1, 3B, 9, etc.)</li>
            <li>Invoice records and ITC ledger</li>
            <li>Any past communications with GST authorities</li>
          </ul>
        </div>
      </section>

    </>
  );
};

export default GSTNotice;