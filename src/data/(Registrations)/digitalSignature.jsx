const DigitalSignature = () => {
  return (
    <>
        <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Digital Signature Certificate (DSC)
          </h1>
          <p className="text-gray-600 text-lg">
            Apply for a Digital Signature Certificate (DSC) online for secure and authenticated document signing in government and business processes.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is a Digital Signature Certificate?</h2>
          <p className="text-gray-700">
            A Digital Signature Certificate (DSC) is a secure digital key issued by certifying authorities to validate and verify the identity of the holder. It is used to sign electronic documents and filings such as MCA forms, GST returns, income tax filings, and tender submissions.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of a DSC</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legally valid digital signature</li>
            <li>Secure online transactions and filings</li>
            <li>Mandatory for MCA, GST, and e-tenders</li>
            <li>Reduces paperwork and processing time</li>
          </ul>
        </div>
      </section>

      {/* Types of DSC */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Types of DSC</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Class 3 DSC:</strong> Used for e-tenders, e-auctions, and legal filings</li>
            <li><strong>DGFT DSC:</strong> Specifically used for foreign trade on the DGFT portal</li>
            <li><strong>Combo DSC:</strong> For individuals managing both personal and business filings</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Passport-size photograph</li>
            <li>Self-attested PAN card</li>
            <li>Self-attested Aadhaar card or address proof</li>
            <li>Mobile number and email ID</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">DSC Application Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Choose the type and validity of DSC (1 year or 2 years)</li>
            <li>Submit identity and address proof documents</li>
            <li>Complete video verification (as required)</li>
            <li>Receive the DSC on USB token or via download</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default DigitalSignature;