const Registration12A = () => {
  return (
    <>
        <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            12A Registration for NGOs
          </h1>
          <p className="text-gray-600 text-lg">
            Apply for 12A Registration to avail income tax exemption for your NGO and boost credibility among donors and government agencies.
          </p>
        </div>
      </section>

      {/* What is 12A */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is 12A Registration?</h2>
          <p className="text-gray-700">
            12A Registration is granted to NGOs by the Income Tax Department of India. It exempts the NGO’s income from tax, allowing them to use the full amount for their charitable objectives. Without this, the income of an NGO is subject to regular taxation.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of 12A Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Complete income tax exemption for NGOs</li>
            <li>Eligible for government and international funding</li>
            <li>Enhances the NGO’s credibility</li>
            <li>Enables long-term financial planning without tax burdens</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Must be a registered NGO (Trust, Society, or Section 8 Company)</li>
            <li>Charitable purpose must align with the Income Tax Act</li>
            <li>Proper records and financials must be maintained</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Trust Deed / MOA & AOA of NGO</li>
            <li>PAN card of the NGO</li>
            <li>Address proof (electricity bill, rent agreement)</li>
            <li>Details of trustees or directors</li>
            <li>Financial statements (if applicable)</li>
            <li>Activities report</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Prepare and gather necessary documents</li>
            <li>Apply online through the Income Tax portal</li>
            <li>Upload documents and provide activity details</li>
            <li>Verification by Income Tax Department</li>
            <li>Receive 12A Registration certificate</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Registration12A;