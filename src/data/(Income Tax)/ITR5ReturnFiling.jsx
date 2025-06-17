const ITR5ReturnFiling = () => {
  return (
    <>
      <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-5 Return Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Professional filing services for LLPs, partnership firms, and other
            entities. Timely and accurate submission ensures smooth compliance.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-5 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Who Should File ITR-5?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Limited Liability Partnerships (LLPs)</li>
            <li>Partnership firms</li>
            <li>Association of Persons (AOPs)</li>
            <li>Body of Individuals (BOIs)</li>
            <li>Artificial Juridical Persons</li>
            <li>Estate of deceased and estate of insolvent</li>
          </ul>
        </div>
      </section>

      {/* Who Cannot File ITR-5 */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Who Cannot File ITR-5?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individuals and Hindu Undivided Families (HUFs)</li>
            <li>Companies (they must file ITR-6 or ITR-7)</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Documents Required
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN of the entity</li>
            <li>Partnership deed or LLP agreement</li>
            <li>Bank statements and financials</li>
            <li>Profit & Loss Account and Balance Sheet</li>
            <li>Form 26AS and TDS details</li>
            <li>Details of income and deductions claimed</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR5ReturnFiling;
