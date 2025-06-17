const ISORegistration = () => {
  return (
    <>
          <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ISO Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Boost your business credibility and meet international quality standards with ISO Certification. We help you register hassle-free.
          </p>
        </div>
      </section>

      {/* What is ISO Certification */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is ISO Certification?</h2>
          <p className="text-gray-700">
            ISO (International Organization for Standardization) certification ensures your business meets global standards for quality, safety, and efficiency. It applies across industries like manufacturing, IT, healthcare, food, and more.
          </p>
        </div>
      </section>

      {/* Common ISO Standards */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Popular ISO Standards</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>ISO 9001:</strong> Quality Management System</li>
            <li><strong>ISO 14001:</strong> Environmental Management</li>
            <li><strong>ISO 27001:</strong> Information Security Management</li>
            <li><strong>ISO 22000:</strong> Food Safety Management</li>
            <li><strong>ISO 45001:</strong> Occupational Health & Safety</li>
          </ul>
        </div>
      </section>

      {/* Benefits of ISO Certification */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of ISO Certification</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improves customer trust and satisfaction</li>
            <li>Enhances efficiency and internal processes</li>
            <li>Boosts brand image and global recognition</li>
            <li>Helps in getting government tenders and contracts</li>
            <li>Ensures legal and regulatory compliance</li>
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required for ISO Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Business registration proof</li>
            <li>PAN card and Aadhar card of business owner</li>
            <li>Address proof of business location</li>
            <li>Nature of business activity</li>
            <li>GST certificate (if applicable)</li>
            <li>Existing Quality Manual or SOPs (if available)</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">ISO Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Choose the right ISO standard for your business</li>
            <li>Submit required documents and information</li>
            <li>Gap analysis and document preparation</li>
            <li>Audit by an accredited certification body</li>
            <li>Receive ISO certificate upon approval</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ISORegistration;