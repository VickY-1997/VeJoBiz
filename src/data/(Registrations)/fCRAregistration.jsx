const FCRARegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            FCRA Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Get your organization registered under FCRA to legally receive foreign donations and contributions in India.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is FCRA Registration?</h2>
          <p className="text-gray-700">
            FCRA (Foreign Contribution Regulation Act) Registration is mandatory for NGOs, trusts, and other organizations in India that intend to accept foreign contributions. It ensures transparency, accountability, and legal compliance when receiving funds from outside India.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who is Eligible?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>NGOs, charitable trusts, and societies</li>
            <li>Section 8 companies</li>
            <li>Organizations operating for at least 3 years</li>
            <li>Entities with a track record of charitable activities</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of FCRA Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legal authority to receive foreign donations</li>
            <li>Enhanced credibility with international donors</li>
            <li>Opportunity to expand social impact globally</li>
            <li>Access to global funding opportunities</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Certificate of Registration (Trust/NGO/Society)</li>
            <li>PAN card of the organization</li>
            <li>Details of key members and board resolutions</li>
            <li>Audited financial statements of the last 3 years</li>
            <li>Activity reports and objectives of the organization</li>
            <li>FCRA designated bank account details</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">FCRA Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Prepare and gather necessary documents</li>
            <li>File application on the FCRA portal (Form FC-3A)</li>
            <li>Submit verification and compliance documents</li>
            <li>Application review by Ministry of Home Affairs (MHA)</li>
            <li>Receive FCRA Registration Certificate</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default FCRARegistration;