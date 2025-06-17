const GSTRevocation = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GST Revocation of Cancellation
          </h1>
          <p className="text-gray-600 text-lg">
            Has your GST registration been cancelled? You can apply for revocation and restore your GSTIN. Let our experts handle the process end-to-end.
          </p>
        </div>
      </section>

      {/* What is GST Revocation? */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is GST Revocation?</h2>
          <p className="text-gray-700">
            GST Revocation is the process of restoring a cancelled GST registration. If the cancellation was done by the GST officer on grounds of non-compliance, the taxpayer can request to revoke the cancellation within a limited period.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Can Apply?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Taxpayers whose GSTIN was cancelled by the GST officer</li>
            <li>Application must be filed within 30 days of cancellation order</li>
            <li>All pending returns must be filed before revocation</li>
            <li>No revocation allowed if cancellation was requested by the taxpayer voluntarily</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GST cancellation order</li>
            <li>Reason for revocation request</li>
            <li>Proof of compliance (return filings, payment of dues)</li>
            <li>Any supporting documents for justification</li>
          </ul>
        </div>
      </section>

      {/* Our Assistance */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How We Help</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Review the cancellation reason and GST portal status</li>
            <li>File pending returns (if needed)</li>
            <li>Prepare and file the revocation application (Form GST REG-21)</li>
            <li>Respond to GST officer queries if raised</li>
            <li>Share the final status and help you resume operations</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default GSTRevocation