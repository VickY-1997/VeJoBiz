const FSSAILicense = () => {
  return (
    <>
         <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            FSSAI License
          </h1>
          <p className="text-gray-600 text-lg">
            Get your FSSAI License to ensure legal compliance and food safety standards for your food business in India with Ve Yazh Business Solutions.
          </p>
        </div>
      </section>

      {/* Why FSSAI License Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why is FSSAI License Important?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mandatory for all food-related businesses in India</li>
            <li>Ensures safety and hygiene compliance</li>
            <li>Enhances consumer confidence and trust</li>
            <li>Legal requirement to avoid penalties and business shutdowns</li>
            <li>Enables business expansion and easy funding</li>
          </ul>
        </div>
      </section>

      {/* Types of FSSAI Licenses */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Types of FSSAI Licenses</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Basic FSSAI Registration:</strong> For petty food businesses with turnover up to ₹12 lakhs/year</li>
            <li><strong>State FSSAI License:</strong> For medium-sized businesses with turnover between ₹12 lakhs and ₹20 crores/year</li>
            <li><strong>Central FSSAI License:</strong> For large enterprises, import/export, or inter-state operations</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Required Documents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Photo and ID proof of applicant (Aadhar, PAN)</li>
            <li>Business address proof (rental agreement, utility bill)</li>
            <li>Passport size photograph</li>
            <li>Food safety management plan</li>
            <li>Certificate of Incorporation or business registration proof</li>
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply for FSSAI License</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Determine applicable license type based on turnover and operations</li>
            <li>Fill out application on FSSAI portal with required details</li>
            <li>Upload necessary documents</li>
            <li>Pay government fees based on license category</li>
            <li>Await verification and license issuance</li>
          </ol>
        </div>
      </section>

      {/* Validity and Renewal */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800">Validity & Renewal</h2>
          <p className="text-gray-700 mt-2">
            FSSAI Licenses are typically valid for 1 to 5 years. Businesses must apply for renewal before expiry to avoid penalties.
          </p>
        </div>
      </section>
    </>
  );
};

export default FSSAILicense;