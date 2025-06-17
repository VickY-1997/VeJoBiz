const ITR7ReturnFiling = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-7 Return Filing for Trusts and NGOs
          </h1>
          <p className="text-gray-600 text-lg">
            Seamless ITR-7 filing for charitable trusts, religious institutions, political parties, and research organizations.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-7 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-7?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Entities claiming exemption under section 139(4A) – Charitable or religious trusts</li>
            <li>Entities under 139(4B) – Political parties</li>
            <li>Institutions under 139(4C) – Research associations, news agencies, etc.</li>
            <li>Universities, colleges, and institutions under 139(4D)</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN of the trust/institution</li>
            <li>Trust deed or registration certificate</li>
            <li>Income and expenditure statement</li>
            <li>Balance Sheet and Receipts & Payments account</li>
            <li>Form 10B (Audit Report) if applicable</li>
            <li>Details of donations and grants</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR7ReturnFiling;