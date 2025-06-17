const ESIRegistration = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ESI Registration (Employees' State Insurance)
          </h1>
          <p className="text-gray-600 text-lg">
            Get your business ESI registered to ensure health and social security benefits for your employees as per Indian labor laws.
          </p>
        </div>
      </section>

      {/* What is ESI Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is ESI?</h2>
          <p className="text-gray-700">
            The Employees' State Insurance (ESI) scheme is a self-financing social security and health insurance scheme for Indian workers, governed by the Employees' State Insurance Corporation (ESIC), an autonomous body under the Ministry of Labour and Employment.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of ESI Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Medical care for employees and their families</li>
            <li>Sickness, maternity, and disability benefits</li>
            <li>Coverage for workplace injuries</li>
            <li>Funeral and dependent benefits</li>
            <li>Legal compliance and employee satisfaction</li>
          </ul>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs ESI Registration?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Any non-seasonal business employing 10 or more employees</li>
            <li>Applicable to employees earning ₹21,000 or less per month</li>
            <li>Mandatory under the ESI Act, 1948</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of the company</li>
            <li>Certificate of Incorporation</li>
            <li>GST registration certificate</li>
            <li>Employee details (name, salary, address)</li>
            <li>Address proof of establishment</li>
            <li>Cancelled cheque of company bank account</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">ESI Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submit application on ESIC portal</li>
            <li>Upload necessary documents and employee details</li>
            <li>Verification by ESIC officials</li>
            <li>Receive 17-digit registration number and login credentials</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ESIRegistration;