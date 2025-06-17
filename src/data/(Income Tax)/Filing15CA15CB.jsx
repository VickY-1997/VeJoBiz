const Filing15CA15CB = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Form 15CA & 15CB Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Mandatory forms for international remittances. Get CA-certified Form 15CB and submit Form 15CA online with ease and accuracy.
          </p>
        </div>
      </section>

      {/* What are Forms 15CA & 15CB? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What are Forms 15CA and 15CB?
          </h2>
          <p className="text-gray-700">
            These forms are required under the Income Tax Act for remittance of funds outside India. Form 15CA is a self-declaration by the remitter, while Form 15CB is a certification from a Chartered Accountant regarding tax compliance.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pt-2">
            <li><strong>Form 15CA:</strong> Information by the remitter for any foreign remittance.</li>
            <li><strong>Form 15CB:</strong> Certification by a CA verifying details and applicable taxes (if any).</li>
          </ul>
        </div>
      </section>

      {/* When is it Required? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">When is it Required?</h2>
          <p className="text-gray-700">
            These forms are required when an individual, company, or firm makes payment to a non-resident or a foreign entity. The requirement may vary based on:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The nature of payment (e.g., royalty, technical fees, import/export payments)</li>
            <li>The amount being remitted</li>
            <li>Whether the income is taxable in India</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Invoice from foreign vendor</li>
            <li>Agreement or contract for service/payment</li>
            <li>PAN of remitter</li>
            <li>Remittance purpose and amount</li>
            <li>Bank details of remitter and beneficiary</li>
            <li>Tax Residency Certificate (if applicable)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Filing15CA15CB;