const ShopActRegistration = () => {
  return (
    <>
         <section className="bg-white px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Shop Act Registration
          </h1>
          <p className="text-gray-600 text-lg">
            Register your shop or establishment under the Shops and Establishments Act to legally operate your business and ensure compliance with local labor laws.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">What is Shop Act Registration?</h2>
          <p className="text-gray-700">
            Shop Act Registration, also known as the Shops and Establishments Act license, is a legal requirement for businesses like shops, offices, or commercial establishments. It regulates the working conditions, rights of employees, and business operating hours.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits of Shop Act Registration</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Legally operate your shop or establishment</li>
            <li>Required for opening a business bank account</li>
            <li>Helps build business credibility and transparency</li>
            <li>Ensures compliance with labor laws and employment standards</li>
          </ul>
        </div>
      </section>

      {/* Applicability */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Who Needs Shop Act Registration?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Shops and retail outlets</li>
            <li>Commercial offices and agencies</li>
            <li>Restaurants, hotels, and eateries</li>
            <li>Workshops and warehouses</li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Owner's Aadhaar card and PAN card</li>
            <li>Business address proof (rent agreement or electricity bill)</li>
            <li>Business name and activity details</li>
            <li>Photograph of shop or establishment</li>
            <li>Employee details (if applicable)</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submit required documents and business details</li>
            <li>Application filing with the respective state authority</li>
            <li>Verification by the Labor Department</li>
            <li>Receive Shop Act License certificate</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ShopActRegistration;