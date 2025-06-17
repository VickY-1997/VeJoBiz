const ITR2ReturnFiling = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ITR-2 Return Filing Services
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive filing support for individuals and HUFs with capital gains, multiple properties, or foreign income.
          </p>
        </div>
      </section>

      {/* Who Should File ITR-2 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Should File ITR-2?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individuals and HUFs not earning from business or profession</li>
            <li>Income from salary/pension</li>
            <li>Income from more than one house property</li>
            <li>Capital gains from stocks, mutual funds, or property</li>
            <li>Foreign income or holding foreign assets</li>
            <li>Income as a partner in a firm (not carrying on business)</li>
          </ul>
        </div>
      </section>

      {/* Who Cannot File ITR-2 */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Cannot File ITR-2?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Individuals with income from business or profession</li>
            <li>Proprietors and freelancers (use ITR-3 instead)</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PAN card and Aadhaar card</li>
            <li>Form 16, Form 26AS, AIS</li>
            <li>Capital gains statements (stock broker/Mutual Fund)</li>
            <li>Property income and interest certificates</li>
            <li>Details of foreign income or foreign assets (if any)</li>
            <li>Bank interest and dividend income statements</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ITR2ReturnFiling;