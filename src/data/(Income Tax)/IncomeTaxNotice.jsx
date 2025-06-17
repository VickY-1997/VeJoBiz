const IncomeTaxNotice = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Received an Income Tax Notice?
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Don’t panic. We help you decode and respond to Income Tax notices accurately and promptly.
        </p>
      </section>

      {/* What is an Income Tax Notice */}
      <section className="bg-gray-50 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is an Income Tax Notice?</h2>
          <p className="text-gray-700">
            An Income Tax Notice is an official communication from the Income Tax Department to a taxpayer regarding issues such as discrepancies in filing, demand for unpaid tax, or verification of income and deductions.
          </p>
        </div>
      </section>

      {/* Common Types of Notices */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Common Types of Notices</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Notice u/s 143(1):</strong> Intimation of tax calculation and refund/demand</li>
            <li><strong>Notice u/s 139(9):</strong> Defective return notice</li>
            <li><strong>Notice u/s 142(1):</strong> Inquiry before assessment</li>
            <li><strong>Notice u/s 148:</strong> Income escaping assessment</li>
            <li><strong>Notice u/s 245:</strong> Adjustment against refund</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-50 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Copy of the Income Tax notice</li>
            <li>PAN and Aadhaar</li>
            <li>Filed ITR acknowledgment</li>
            <li>Bank statements and income proofs</li>
            <li>Investment proofs and relevant documents</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default IncomeTaxNotice;