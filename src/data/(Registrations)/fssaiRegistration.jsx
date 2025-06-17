const FssaiRegistration = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            FSSAI Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Get your FSSAI License and legally operate your food business in India. Ve Yazh Business Solutions makes the FSSAI registration process easy and hassle-free.
          </p>
        </div>
      </section>

      {/* Why FSSAI Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why FSSAI Registration?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mandatory for all food-related businesses in India</li>
            <li>Builds consumer trust and ensures food safety compliance</li>
            <li>Improves your brand’s credibility and visibility</li>
            <li>Enables easy business expansion and export opportunities</li>
            <li>Avoids penalties and legal action from authorities</li>
          </ul>
        </div>
      </section>

      {/* Types of FSSAI Licenses */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Types of FSSAI Licenses</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Basic Registration:</strong> For small food businesses with turnover up to ₹12 lakhs/year</li>
            <li><strong>State License:</strong> For medium-sized businesses with turnover between ₹12 lakhs to ₹20 crores/year</li>
            <li><strong>Central License:</strong> For large businesses, imports/exports, or operating in multiple states</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Required Documents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Photo and ID proof of the food business operator</li>
            <li>Business address proof (utility bill, rental agreement, etc.)</li>
            <li>Passport size photograph</li>
            <li>Form B duly completed and signed</li>
            <li>Certificate of Incorporation (for companies)</li>
            <li>Food safety management plan (for State/Central licenses)</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Determine the correct license type based on turnover and business nature</li>
            <li>Submit application with required documents to FSSAI portal</li>
            <li>Follow up for verification and respond to queries (if any)</li>
            <li>Receive FSSAI License with a 14-digit number valid for 1-5 years</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default FssaiRegistration;