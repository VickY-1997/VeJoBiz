const PULC = () => {
  return (
    <>
      <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Public Limited Company Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register your Public Limited Company with Ve Yazh Business Solutions
            and unlock the ability to raise capital from the public with high
            transparency and credibility.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Benefits of a Public Limited Company
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ability to raise capital from the public through shares</li>
            <li>Separate legal entity with limited liability</li>
            <li>Enhanced company reputation and transparency</li>
            <li>Perpetual existence and easy share transferability</li>
            <li>Better opportunities for business expansion</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Required Documents
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN Card of all directors</li>
            <li>ID proof (Aadhar/Voter ID/Passport)</li>
            <li>Address proof (Bank statement/Utility bill)</li>
            <li>Passport size photographs</li>
            <li>Company address proof (Electricity Bill/Rent Agreement)</li>
            <li>No Objection Certificate (NOC) from property owner</li>
            <li>Digital Signature Certificate (DSC) of directors</li>
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Registration Process
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Obtain DSC and DIN for directors</li>
            <li>Reserve a unique company name via RUN service</li>
            <li>Draft and file MOA & AOA with ROC</li>
            <li>Submit SPICe+ form for company incorporation</li>
            <li>Receive Certificate of Incorporation from MCA</li>
            <li>Apply for PAN, TAN, and open a company bank account</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default PULC;
