const GSTR10 = () => {
  return (
    <>
      <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GSTR-10 Filing (Final GST Return)
          </h1>
          <p className="text-gray-600 text-lg">
            GSTR-10 is the final return to be filed when a taxpayer’s GST
            registration is cancelled or surrendered. File it correctly with
            expert guidance.
          </p>
        </div>
      </section>

      {/* What is GSTR-10? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is GSTR-10?
          </h2>
          <p className="text-gray-700">
            GSTR-10 is a final return that must be filed by a taxpayer whose GST
            registration has been cancelled or surrendered. It contains details
            of inputs held in stock, inputs contained in semi-finished and
            finished goods, and capital goods on which input tax credit has been
            availed.
          </p>
        </div>
      </section>

      {/* Due Date & Penalty */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Due Date & Penalties
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Must be filed within 3 months from the date of cancellation or
              cancellation order
            </li>
            <li>
              Late filing attracts a penalty of ₹100 per day (CGST + SGST =
              ₹200/day), up to ₹10,000
            </li>
            <li>Non-filing may result in further legal complications</li>
          </ul>
        </div>
      </section>

      {/* Details Required in GSTR-10 */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            What Information is Required?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GSTIN and Legal Name</li>
            <li>Application Reference Number (ARN) of cancellation</li>
            <li>Date of cancellation</li>
            <li>Closing stock details (taxable value & ITC on it)</li>
            <li>Details of liability and payment made</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GSTR10;
