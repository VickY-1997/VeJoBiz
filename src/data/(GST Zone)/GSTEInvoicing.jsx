const GSTEInvoicing = () => {
  return (
    <>
        <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST E-Invoicing
          </h1>
          <p className="text-gray-600 text-lg">
            Automate your invoice reporting under GST with government-compliant E-Invoicing solutions. Ensure accuracy, avoid duplication, and streamline tax filings.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST E-Invoicing?</h2>
          <p className="text-gray-700">
            GST E-Invoicing is the process of electronically authenticating B2B invoices through the GST portal. Applicable businesses must generate invoices that are validated and assigned an Invoice Reference Number (IRN) by the Invoice Registration Portal (IRP).
          </p>
        </div>
      </section>

      {/* Applicability */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs to Implement E-Invoicing?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Businesses with turnover exceeding ₹5 crores (as per latest threshold)</li>
            <li>Taxpayers engaged in B2B transactions</li>
            <li>Exporters and importers issuing GST invoices</li>
            <li>Entities using accounting software with e-invoicing integration</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of E-Invoicing</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Reduces invoice mismatches during return filing</li>
            <li>Real-time invoice tracking and authentication</li>
            <li>Auto-population of invoice data in GSTR-1</li>
            <li>Prevents fake invoices and tax evasion</li>
            <li>Improves overall GST compliance</li>
          </ul>
        </div>
      </section>

      {/* Required Setup */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What's Required for E-Invoicing?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Active GSTIN with access to the e-invoice portal</li>
            <li>ERP or accounting software with IRP integration</li>
            <li>Valid digital signature for invoice authentication</li>
            <li>Access to Invoice Registration Portal (IRP)</li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our GST E-Invoicing Services Include</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Assessment of applicability and readiness</li>
            <li>Integration with your invoicing system</li>
            <li>Onboarding and registration on the IRP portal</li>
            <li>Training and support for your staff</li>
            <li>Ongoing compliance monitoring</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GSTEInvoicing;