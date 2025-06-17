const GSTReturnFilingbyAccountant = () => {
  return (
   <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Return Filing by Accountant
          </h1>
          <p className="text-gray-600 text-lg">
            Let professionals take care of your GST return filing. Stay compliant and stress-free while our accountants ensure accurate and timely filing.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST Return Filing?</h2>
          <p className="text-gray-700">
            GST return filing is a mandatory process for all registered businesses under the GST regime. It involves reporting sales, purchases, input tax credit, and output GST. Timely and correct filing is crucial to avoid penalties and ensure smooth business operations.
          </p>
        </div>
      </section>

      {/* Why Use an Accountant? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose an Accountant?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensure accurate data reconciliation</li>
            <li>File returns on time without penalties</li>
            <li>Track and claim eligible input tax credit</li>
            <li>Handle notices or discrepancies from the GST department</li>
            <li>Focus on business growth while we manage compliance</li>
          </ul>
        </div>
      </section>

      {/* Types of GST Returns */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Types of GST Returns We Handle</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GSTR-1 – Outward supplies</li>
            <li>GSTR-3B – Summary return</li>
            <li>GSTR-4 – Composition scheme return</li>
            <li>GSTR-9 – Annual return</li>
            <li>Other relevant returns based on business category</li>
          </ul>
        </div>
      </section>

      {/* Required Information */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Information Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sales and purchase invoices</li>
            <li>GSTIN and login credentials</li>
            <li>Bank statements (if required)</li>
            <li>Input tax credit details</li>
            <li>Previous returns (if applicable)</li>
          </ul>
        </div>
      </section>

      {/* Filing Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Filing Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Share required data and documents</li>
            <li>Our accountant verifies and prepares returns</li>
            <li>You review and approve the filing</li>
            <li>We file the return on the GST portal</li>
            <li>Receive confirmation and acknowledgment</li>
          </ol>
        </div>
      </section>
   </>
  );
};

export default GSTReturnFilingbyAccountant;