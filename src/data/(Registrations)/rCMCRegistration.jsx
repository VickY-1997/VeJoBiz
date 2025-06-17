const RCMCRegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            RCMC Registration (Registration-Cum-Membership Certificate)
          </h1>
          <p className="text-gray-600 text-lg">
            Get your RCMC to avail export benefits and become a registered member of Export Promotion Councils in India.
          </p>
        </div>
      </section>

      {/* What is RCMC */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is RCMC?</h2>
          <p className="text-gray-700">
            RCMC stands for Registration-Cum-Membership Certificate. It is issued by Export Promotion Councils (EPCs) in India and is mandatory for exporters to avail benefits under the Foreign Trade Policy. It acts as a proof that the exporter is registered with the relevant council.
          </p>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs RCMC?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Businesses involved in export of goods or services</li>
            <li>Exporters looking to avail benefits from DGFT, Customs, or Export Promotion Councils</li>
            <li>Manufacturers and merchant exporters</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of RCMC</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Eligibility for export incentives and schemes under FTP</li>
            <li>Recognition as a registered exporter</li>
            <li>Participation in trade fairs and buyer-seller meets</li>
            <li>Support and guidance from EPCs</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Importer Exporter Code (IEC)</li>
            <li>PAN card of the company</li>
            <li>GST registration certificate</li>
            <li>MOA/AOA or Partnership Deed</li>
            <li>Bank certificate or cancelled cheque</li>
            <li>Declaration in the prescribed format</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">RCMC Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Choose the appropriate Export Promotion Council</li>
            <li>Prepare and submit required documents</li>
            <li>Apply online through the council’s website</li>
            <li>Verification and approval by the council</li>
            <li>Get the RCMC certificate issued</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default RCMCRegistration;