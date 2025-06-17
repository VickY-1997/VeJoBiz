const TANRegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            TAN Registration for TDS Compliance
          </h1>
          <p className="text-gray-600 text-lg">
            Get your Tax Deduction and Collection Account Number (TAN) quickly and stay compliant with TDS regulations.
          </p>
        </div>
      </section>

      {/* What is TAN? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is TAN?</h2>
          <p className="text-gray-700">
            TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric code issued by the Income Tax Department, required by individuals and businesses responsible for deducting or collecting tax at source.
          </p>
        </div>
      </section>

      {/* Who Needs TAN? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs TAN?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Businesses deducting TDS on salary, rent, or contract payments</li>
            <li>Companies paying interest, commission, or professional fees</li>
            <li>Entities collecting tax at source (TCS)</li>
            <li>Startups or individuals making specified payments liable for TDS</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card of the applicant</li>
            <li>Identity proof (Aadhaar, passport, etc.)</li>
            <li>Address proof (electricity bill, rent agreement, etc.)</li>
            <li>Incorporation certificate (for companies)</li>
            <li>Partnership deed (for firms)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TANRegistration;