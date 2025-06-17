const PFRegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            PF Registration (Provident Fund)
          </h1>
          <p className="text-gray-600 text-lg">
            Register your business for Provident Fund (PF) to ensure employee welfare and comply with EPFO regulations in India.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is PF Registration?</h2>
          <p className="text-gray-700">
            Provident Fund (PF) registration is mandatory for companies employing 20 or more employees. It is governed by the Employees' Provident Fund Organization (EPFO) under the Ministry of Labour and Employment, Government of India.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of PF Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensures financial security for employees post-retirement</li>
            <li>Mandatory compliance avoids penalties</li>
            <li>Contributes to employee satisfaction and retention</li>
            <li>Includes benefits like pension and insurance</li>
            <li>Applicable to both employer and employee contributions</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN Card of the business</li>
            <li>Certificate of Incorporation</li>
            <li>GST Certificate</li>
            <li>Address proof of business (Electricity bill/Property papers)</li>
            <li>Cancelled cheque of company bank account</li>
            <li>Details of employees with salary structure</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">PF Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submit application on EPFO portal</li>
            <li>Upload necessary business and employee details</li>
            <li>Verification by EPFO officers</li>
            <li>Receive PF registration number and login credentials</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default PFRegistration;