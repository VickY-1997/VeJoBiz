const GSTLUTForm = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST LUT Form Filing
          </h1>
          <p className="text-gray-600 text-lg">
            Submit your Letter of Undertaking (LUT) under GST to export goods or services without IGST. Our team ensures fast and accurate filing.
          </p>
        </div>
      </section>

      {/* What is LUT? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST LUT?</h2>
          <p className="text-gray-700">
            LUT stands for Letter of Undertaking. It is a declaration that allows exporters to supply goods or services without paying Integrated GST (IGST). Filing LUT saves working capital and speeds up the export process by removing the need to pay tax upfront and then claim refunds.
          </p>
        </div>
      </section>

      {/* Who Should File LUT? */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs to File LUT?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Exporters of goods or services</li>
            <li>Suppliers to SEZ units without payment of IGST</li>
            <li>Entities involved in zero-rated supplies</li>
            <li>Businesses that want to avoid claiming refunds for IGST</li>
          </ul>
        </div>
      </section>

      {/* Benefits of Filing LUT */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of LUT Filing</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No upfront IGST payment</li>
            <li>Faster export clearances</li>
            <li>Improved cash flow for exporters</li>
            <li>One-time annual compliance for eligible businesses</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GST Registration Certificate</li>
            <li>PAN of the business</li>
            <li>Authorized signatory’s PAN & Aadhar</li>
            <li>Last financial year’s export details</li>
            <li>Cancelled cheque of the business</li>
            <li>Digital Signature (DSC) or EVC authentication</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">How We Help</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Verify your eligibility for LUT</li>
            <li>Collect and prepare necessary documents</li>
            <li>File your LUT online on the GST portal</li>
            <li>Share confirmation and acknowledgement</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default GSTLUTForm;