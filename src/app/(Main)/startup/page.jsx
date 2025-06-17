"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Users,
  UserPlus,
  Landmark,
  ShieldCheck,
  Building2,
  Globe,
} from "lucide-react";

// Slug mapping for each service
const services = [
  {
    slug: "proprietorship",
    name: "Proprietorship",
    description:
      "Ideal for solo entrepreneurs starting small. Easy to set up, minimal compliance, and complete control over the business.",
    icon: Briefcase,
    color: "from-yellow-400 to-orange-500",
  },
  {
    slug: "partnership",
    name: "Partnership",
    description:
      "Great for two or more people running a business together. Share responsibilities and profits with minimal formalities.",
    icon: Users,
    color: "from-pink-500 to-red-500",
  },
  {
    slug: "onePersonCompany",
    name: "One Person Company",
    description:
      "Best for single founders who want corporate benefits like limited liability while staying a solo owner.",
    icon: UserPlus,
    color: "from-indigo-500 to-purple-600",
  },
  {
    slug: "llp",
    name: "LLP Registration",
    description:
      "Combines the flexibility of a partnership with the protection of limited liability. Ideal for professionals and startups.",
    icon: Landmark,
    color: "from-green-400 to-emerald-600",
  },
  {
    slug: "privateLimitedCompany",
    name: "Private Limited Company",
    description:
      "Preferred structure for startups and growing businesses. Offers limited liability, better credibility, and investor-friendly setup.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "publicLimitedCompany",
    name: "Public Limited Company",
    description:
      "Suitable for large businesses planning to raise capital from the public and get listed. Requires more compliance and transparency.",
    icon: Building2,
    color: "from-rose-500 to-pink-600",
  },
  {
    slug: "indianSubsidiary",
    name: "Indian Subsidiary",
    description:
      "For foreign companies looking to expand into India. We help you set up a compliant and efficient Indian subsidiary.",
    icon: Globe,
    color: "from-teal-500 to-lime-500",
  },
];

export default function StartupServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900 px-4 py-16">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Start Your Business the Right Way
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're an individual with a dream, a team ready to build something
          big, or a foreign company entering India — choosing the right business
          structure is your first step toward success. We simplify the registration
          process and guide you at every stage. Explore your options below.
        </p>
        <div className="mt-6 text-sm text-gray-500">
          <p>No paperwork hassle. No legal confusion. Just smart choices for smart entrepreneurs.</p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={`/service/${service.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer rounded-2xl p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} shadow-md`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
              <p className="text-sm text-gray-700 text-center">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
