const TradeLicense = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trade License Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Apply for your Trade License with Ve Yazh Business Solutions to ensure your business operates legally within municipal regulations.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why You Need a Trade License</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mandatory for running a business within a municipality</li>
            <li>Ensures safety standards and proper zoning usage</li>
            <li>Prevents illegal trade practices</li>
            <li>Builds customer trust and business credibility</li>
            <li>Avoids penalties and legal issues</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Required Documents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Address proof of the business premises</li>
            <li>Identity proof of the applicant (Aadhar, PAN, etc.)</li>
            <li>Certificate of Incorporation (if applicable)</li>
            <li>Cancelled cheque or bank statement</li>
            <li>Municipal tax receipts (if property is owned)</li>
            <li>No Objection Certificate (NOC) from the landlord (if rented)</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submit application with local municipal corporation</li>
            <li>Attach all required documents</li>
            <li>Inspection of premises by municipal officers (if required)</li>
            <li>Pay applicable government fees</li>
            <li>Receive the Trade License certificate upon approval</li>
          </ol>
        </div>
      </section>

      {/* Validity & Renewal */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Validity and Renewal</h2>
          <p className="text-gray-700">
            Trade Licenses are typically valid for 1 year and must be renewed annually. Delays in renewal may attract penalties from the municipality.
          </p>
        </div>
      </section>
    </>
  );
};

export default TradeLicense;