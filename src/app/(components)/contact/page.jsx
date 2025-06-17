"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message.");
    }
  }

  return (
    <>
      <Navbar className="absolute w-full z-20 bg-transparent" />

      <section className="min-h-screen bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] px-6 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 ml-40 mr-10 relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white">
                📞 Get in Touch with Us
              </h1>
              <p className="text-white/80 max-w-xl">
                Whether you're starting a business, need help with compliance,
                or just want to say hi — we're here to help. Reach out anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Phone className="text-green-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-white/80">+91 88846 66002</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-white/80">business@vejobiz.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-pink-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-white/80">Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
                <ul className="text-white/80 space-y-1">
                  <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
                  <li>Sat: 10:00 AM – 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-blue-500 transition"
                >
                  <Facebook className="text-white w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-blue-700 transition"
                >
                  <Linkedin className="text-white w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition"
                >
                  <Instagram className="text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl h-fit"
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              🧾 Message Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="mobile"
                placeholder="Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-1 rounded-lg bg-white/90 text-black placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 hover:to-purple-700 transition text-white font-semibold rounded-xl shadow-md"
              >
                Send Message
              </button>
              {status && (
                <p className="text-center text-sm text-white mt-2">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
