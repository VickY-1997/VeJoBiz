const UdyamRegistration = () => {
  return (
    <>
        <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Udyam Registration (MSME)
          </h1>
          <p className="text-gray-600 text-lg">
            Register your business as a Micro, Small, or Medium Enterprise (MSME) under Udyam to avail various government benefits and subsidies.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is Udyam Registration?</h2>
          <p className="text-gray-700">
            Udyam Registration is a government registration process for Micro, Small, and Medium Enterprises (MSMEs) in India. It provides a unique Udyam Registration Number (URN) and an official recognition certificate, making the business eligible for a wide range of government benefits.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Udyam Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to government subsidies and schemes</li>
            <li>Lower interest rates on loans</li>
            <li>Preference in government tenders</li>
            <li>Collateral-free bank loans under CGTMSE scheme</li>
            <li>Protection against delayed payments</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Can Apply?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Proprietorships</li>
            <li>Partnership firms</li>
            <li>Private limited companies</li>
            <li>LLPs and other registered entities</li>
            <li>Businesses with investment and turnover within MSME limits</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Aadhaar card of the proprietor/partner/director</li>
            <li>PAN card of the business</li>
            <li>Business address and contact details</li>
            <li>Details of investment and turnover</li>
            <li>Bank account details</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Udyam Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Gather Aadhaar and PAN details</li>
            <li>Fill in business details on the Udyam registration portal</li>
            <li>Validate OTP and submit the application</li>
            <li>Receive your Udyam Certificate with a unique URN</li>
          </ol>
        </div>
      </section>

    </>
  );
};

export default UdyamRegistration;