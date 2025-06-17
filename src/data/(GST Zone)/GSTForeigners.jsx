const GSTForeigners = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Registration for Foreigners
          </h1>
          <p className="text-gray-600 text-lg">
            Foreign businesses and individuals providing goods or services in India must obtain GST registration. We assist in getting registered as a Non-Resident Taxable Person (NRTP).
          </p>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs This Registration?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Foreign companies selling goods in India</li>
            <li>Overseas service providers (software, consulting, etc.)</li>
            <li>Exhibitors or temporary importers in India</li>
            <li>Foreign e-commerce businesses with Indian customers</li>
          </ul>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Process for GST Registration</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Provide necessary documents</li>
            <li>Appoint an authorized signatory in India</li>
            <li>Apply on GST portal as a Non-Resident Taxable Person</li>
            <li>Make advance tax deposit (if applicable)</li>
            <li>Get GSTIN and start compliance</li>
          </ol>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Passport (in case of individual)</li>
            <li>Incorporation Certificate (for companies)</li>
            <li>Tax Identification Number (if applicable)</li>
            <li>Bank account details</li>
            <li>Digital Signature Certificate (DSC)</li>
            <li>Authorized signatory documents in India</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GSTForeigners;