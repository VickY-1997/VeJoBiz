const PLC = () => {
  return (
    <>
      <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Private Limited Company Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Start your business with a strong legal structure. Register your
            Private Limited Company with Ve Yazh Business Solutions and get
            expert support every step of the way.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Benefits of a Private Limited Company
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Separate legal identity from owners</li>
            <li>Limited liability for shareholders</li>
            <li>Easy to raise funds and get investors</li>
            <li>Perpetual succession and transferability of shares</li>
            <li>Improved credibility and brand value</li>
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
            <li>
              Address proof of the company (Electricity Bill/Rent Agreement)
            </li>
            <li>No Objection Certificate (NOC) from the property owner</li>
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
            <li>Apply for Digital Signature Certificate (DSC)</li>
            <li>Apply for Director Identification Number (DIN)</li>
            <li>Name approval through RUN (Reserve Unique Name)</li>
            <li>Draft MOA & AOA and submit incorporation forms</li>
            <li>Receive Certificate of Incorporation from MCA</li>
            <li>Apply for PAN, TAN, and open a business bank account</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default PLC;
