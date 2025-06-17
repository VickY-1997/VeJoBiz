const GSTRegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register your business under Goods and Services Tax (GST) and start filing returns, collecting taxes, and availing input tax credits.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST Registration?</h2>
          <p className="text-gray-700">
            GST Registration is mandatory for businesses with an annual turnover above the threshold limit set by the government. It enables the collection and payment of Goods and Services Tax on sales and purchases of goods or services within India.
          </p>
        </div>
      </section>

      {/* Who Needs GST */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should Register for GST?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Businesses with annual turnover above ₹40 lakhs (₹20 lakhs for services)</li>
            <li>E-commerce sellers and aggregators</li>
            <li>Interstate suppliers of goods/services</li>
            <li>Casual taxable persons</li>
            <li>Voluntary registrants</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of GST Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legal recognition as a supplier of goods and services</li>
            <li>Input tax credit on purchases</li>
            <li>Eligible for government tenders</li>
            <li>Simplified tax compliance and returns filing</li>
            <li>Business expansion across states without restrictions</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of the business/owner</li>
            <li>Aadhaar card of the proprietor/partners/directors</li>
            <li>Business address proof (rent agreement or utility bill)</li>
            <li>Bank statement/cancelled cheque</li>
            <li>Digital signature (for companies and LLPs)</li>
            <li>Photograph of owner/authorized signatory</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">GST Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Collect and prepare required documents</li>
            <li>Fill online application on GST portal</li>
            <li>Submit ARN (Acknowledgement Reference Number)</li>
            <li>Receive GSTIN and GST registration certificate</li>
            <li>Start filing GST returns and issue GST invoices</li>
          </ol>
        </div>
      </section>

    </>
  );
};

export default GSTRegistration;