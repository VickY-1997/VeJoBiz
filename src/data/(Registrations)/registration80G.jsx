const Registration80G = () => {
  return (
    <>
          <section className="bg-white px-4  md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            80G Registration for NGOs
          </h1>
          <p className="text-gray-600 text-lg">
            Get 80G Registration for your NGO to offer tax deductions to your donors and attract more contributions for your charitable activities.
          </p>
        </div>
      </section>

      {/* What is 80G */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is 80G Registration?</h2>
          <p className="text-gray-700">
            80G Registration is granted by the Income Tax Department of India to NGOs. It allows donors to claim income tax deductions on the donations they make to the NGO. This significantly boosts fundraising potential and encourages individuals and organizations to contribute generously.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of 80G Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Donors can claim tax deductions on donations made</li>
            <li>Boosts credibility and trust among contributors</li>
            <li>Encourages more donations and CSR funding</li>
            <li>Essential for fundraising campaigns</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Must be a registered NGO (Trust, Society, or Section 8 Company)</li>
            <li>Must not engage in commercial or profit-making activities</li>
            <li>Proper records and audited financials must be maintained</li>
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
            <li>Address proof (rent agreement, electricity bill)</li>
            <li>List of trustees or directors</li>
            <li>Financial statements of the past 3 years (if available)</li>
            <li>Activity report and details of donations received</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Collect and prepare necessary documents</li>
            <li>Apply online via the Income Tax e-filing portal</li>
            <li>Submit documents and verify digitally</li>
            <li>Receive certificate from the IT department upon approval</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Registration80G;