const ICEGATERegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ICEGATE Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register with ICEGATE (Indian Customs Electronic Gateway) to streamline import-export processes and file customs documentation online.
          </p>
        </div>
      </section>

      {/* What is ICEGATE Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is ICEGATE?</h2>
          <p className="text-gray-700">
            ICEGATE (Indian Customs Electronic Gateway) is the national portal of the Central Board of Indirect Taxes and Customs (CBIC) that enables e-filing of import/export documentation, customs clearance, and cargo tracking.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Used by importers, exporters, customs brokers, and shipping lines</li>
            <li>Reduces paperwork and enhances transparency</li>
            <li>Essential for e-filing Bill of Entry, Shipping Bills, and IGM/EGM</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of ICEGATE Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enables online customs document filing</li>
            <li>Speeds up import/export clearance</li>
            <li>Real-time tracking of consignments</li>
            <li>Access to e-payment of customs duties</li>
            <li>24x7 availability and faster communication with customs</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of business</li>
            <li>IEC (Import Export Code)</li>
            <li>GST Certificate</li>
            <li>Digital Signature Certificate (DSC)</li>
            <li>Business address proof</li>
            <li>Authorization letter (if applicable)</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">ICEGATE Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Visit the ICEGATE official website</li>
            <li>Choose “New Registration” and enter PAN & IEC</li>
            <li>Verify email ID and mobile number via OTP</li>
            <li>Upload DSC and complete profile details</li>
            <li>Submit and await approval</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ICEGATERegistration;