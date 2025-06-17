const ProfessionalTaxRegistration = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Professional Tax Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register for Professional Tax to comply with state tax regulations for salaried individuals, professionals, and businesses.
          </p>
        </div>
      </section>

      {/* What is Professional Tax */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Professional Tax?</h2>
          <p className="text-gray-700">
            Professional Tax is a state-level tax imposed on income earned by professionals, employees, and business entities. It is mandatory in certain states in India and is governed by the respective state government’s tax department.
          </p>
        </div>
      </section>

      {/* Who Should Register */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should Register for Professional Tax?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Employers with salaried employees</li>
            <li>Self-employed professionals (doctors, lawyers, CAs, etc.)</li>
            <li>Businesses, firms, and LLPs</li>
            <li>Freelancers and consultants (as per applicable state law)</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Professional Tax Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legal compliance with state regulations</li>
            <li>Avoid penalties and late fees</li>
            <li>Allows deduction of tax paid as a business expense</li>
            <li>Required for government tenders and licenses in some states</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN Card of the business or professional</li>
            <li>Address proof of the business (electricity bill, rent agreement)</li>
            <li>Passport size photo of applicant</li>
            <li>Identity proof (Aadhar, Voter ID, Passport)</li>
            <li>Salary details (for employers)</li>
            <li>Bank account details</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Professional Tax Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Gather all necessary documents</li>
            <li>Apply on the state government’s tax portal</li>
            <li>Submit professional details and business type</li>
            <li>Verification by tax officer</li>
            <li>Receive registration certificate</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ProfessionalTaxRegistration;