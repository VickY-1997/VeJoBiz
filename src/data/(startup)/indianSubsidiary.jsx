const IndianSubsidiary = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Indian Subsidiary Company Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register your foreign company’s subsidiary in India with ease. Ve Yazh Business Solutions helps you navigate all legal and compliance requirements smoothly.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of an Indian Subsidiary</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>100% foreign ownership allowed under automatic route</li>
            <li>Access to India's large and growing market</li>
            <li>Limited liability protection for parent company</li>
            <li>Separate legal identity and perpetual existence</li>
            <li>Repatriation of profits allowed</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Required Documents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Passport and ID proof of foreign directors</li>
            <li>Indian address proof for registered office</li>
            <li>Board resolution from the parent company</li>
            <li>Charter documents of the parent company (MOA & AOA)</li>
            <li>No Objection Certificate (NOC) from the premises owner</li>
            <li>Digital Signature Certificates (DSC) for Indian directors</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Obtain DSC and DIN for directors</li>
            <li>Name reservation via the RUN service</li>
            <li>Prepare and file SPICe+ form with MOA & AOA</li>
            <li>Receive Certificate of Incorporation from MCA</li>
            <li>Apply for PAN, TAN, and open a bank account</li>
            <li>Compliance with FEMA & RBI (if applicable)</li>
          </ol>
        </div>
      </section>

    </>
  )
};

export default IndianSubsidiary;