import Navbar from "../Navbar/page";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 textShadow">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <strong>Ve Yazh Business Solutions Pvt Ltd</strong> – your trusted partner in simplifying business and tax compliance. We are a dedicated team of professionals offering a wide range of services to startups, small businesses, and growing enterprises across India.
      </p>

      <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4 textShadow">Our Services</h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>GST Registration & Filing</li>
        <li>Digital Signature Certificate (DSC)</li>
        <li>Income Tax Filing (IT Filing)</li>
        <li>Udyam (MSME) Registration</li>
        <li>Import Export Code (IEC) Registration</li>
        <li>TDS Return Filing</li>
        <li>Company Incorporation (Private Limited, LLP, etc.)</li>
        <li>FSSAI Registration</li>
        <li>Trademark Registration</li>
        <li>PAN & TAN Application</li>
        <li>Accounting & Bookkeeping Services</li>
        <li>Business Consultancy and Legal Advisory</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-4 textShadow">Why Choose Us?</h2>
      <p className="text-gray-700 mb-4">
        Our mission is to provide fast, reliable, and affordable compliance solutions so that you can focus on growing your business. With years of experience, a client-first approach, and a commitment to excellence, we ensure every service we deliver is accurate and on time.
      </p>

      <p className="text-gray-700">Let us take care of your legal and financial compliance, so you can run your business with peace of mind.</p>
    </div>
    </>
  );
};

export default About;
