const GSTAmendment = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Amendment Filing
          </h1>
          <p className="text-gray-600 text-lg">
            Update your GST registration details online with expert assistance. We help with address change, business structure, contact updates, and more.
          </p>
        </div>
      </section>

      {/* What is GST Amendment? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST Amendment?</h2>
          <p className="text-gray-700">
            A GST amendment refers to modifying or updating information submitted during GST registration. This includes changes in address, business name, partners/directors, or contact details. Certain changes require approval from GST authorities.
          </p>
        </div>
      </section>

      {/* Types of Amendments */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Types of GST Amendments</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Business name change</li>
            <li>Principal or additional place of business</li>
            <li>Addition or removal of partners/directors</li>
            <li>Change in authorized signatory</li>
            <li>Change in contact details like email or phone number</li>
            <li>Modification in business structure</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GST Certificate</li>
            <li>Proof of address (for address change)</li>
            <li>Board resolution (if applicable)</li>
            <li>PAN and Aadhar of partners/directors (if changed)</li>
            <li>New contact/email proof (if applicable)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GSTAmendment;