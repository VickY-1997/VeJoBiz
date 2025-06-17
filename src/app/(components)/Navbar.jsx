"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Caprasimo, Reem_Kufi } from "next/font/google";

// 🟢 Colorful React Icons
import {
  FaBriefcase,
  FaUsers,
  FaUserPlus,
  FaHandshake,
  FaBuilding,
  FaUniversity,
  FaGlobe,
  FaRocket,
  FaFileSignature,
  FaShieldAlt,
  FaListAlt,
  FaAward,
  FaCheckCircle,
  FaUserCircle,
  FaHeartbeat,
  FaFingerprint,
  FaFileAlt,
  FaFileInvoice,
  FaFileContract,
  FaChartLine,
  FaReceipt,
  FaBell,
  FaChartBar,
  FaUndo,
  FaDownload,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaKey,
  FaUpload,
  FaLayerGroup,
  FaUserCog,
  FaUserSlash,
  FaArchive,
  FaShareAlt,
  FaRupeeSign,
  FaCalendarCheck,
  FaHandsHelping,
  FaBookOpen,
} from "react-icons/fa";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
});

const reemKufi = Reem_Kufi({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-reem-kufi",
});

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const renderLinks = (items) =>
    items.map(([slug, label, Icon, color], idx) => (
      <HoveredLink
        key={idx}
        href={`/service/${slug}`}
        className="flex items-center gap-2 text-left"
      >
        <Icon className={`w-5 h-5 mr-2 ${color} group-hover:scale-110 transition-transform duration-200`} />
        {label}
      </HoveredLink>
    ));

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      <div className="flex items-center justify-between px-8">
        <Menu setActive={setActive}>
          {/* === Startup === */}
          <MenuItem setActive={setActive} active={active} href="/startup" item="Startup">
            <div className={`grid grid-cols-2 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["proprietorship", "Proprietorship", FaBriefcase, "text-purple-500"],
                ["partnership", "Partnership", FaUsers, "text-blue-500"],
                ["onePersonCompany", "One Person Company", FaUserPlus, "text-emerald-500"],
                ["llp", "LLP Registration", FaHandshake, "text-orange-500"],
                ["privateLimitedCompany", "Private Limited Company", FaBuilding, "text-teal-500"],
                ["publicLimitedCompany", "Public Limited Company", FaUniversity, "text-pink-500"],
                ["indianSubsidiary", "Indian Subsidiary", FaGlobe, "text-yellow-500"],
              ])}
            </div>
          </MenuItem>

          {/* === Registrations === */}
          <MenuItem setActive={setActive} active={active} href="/registration" item="Registrations">
            <div className={`grid grid-cols-3 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["startupIndia", "Startup India", FaRocket, "text-orange-500"],
                ["tradeLicense", "Trade License", FaFileSignature, "text-blue-500"],
                ["fSSAIRegistration", "FSSAI Registration", FaShieldAlt, "text-green-500"],
                ["fSSAILicense", "FSSAI License", FaListAlt, "text-yellow-500"],
                ["halalLicenseCertification", "Halal License", FaAward, "text-rose-500"],
                ["iCEGATERegistration", "ICEGATE", FaGlobe, "text-cyan-500"],
                ["iSORegistration", "ISO", FaCheckCircle, "text-emerald-500"],
                ["pFRegistration", "PF Registration", FaUserCircle, "text-blue-600"],
                ["eSIRegistration", "ESI Registration", FaHeartbeat, "text-pink-500"],
                ["professionalTaxRegistration", "Professional Tax", FaFingerprint, "text-indigo-500"],
                ["rCMCRegistration", "RCMC", FaFileContract, "text-orange-600"],
                ["Registration_12A_and_80G", "12A & 80G", FaFileAlt, "text-yellow-500"],
                ["Registration_12A", "12A", FaFileAlt, "text-purple-500"],
                ["GRegistration_80", "80G", FaFileAlt, "text-rose-500"],
                ["digitalSignature", "Digital Signature", FaFingerprint, "text-sky-500"],
                ["shopActRegistration", "Shop Act", FaFileContract, "text-lime-600"],
                ["udyamRegistration", "Udyam", FaChartLine, "text-emerald-600"],
                ["fCRARegistration", "FCRA", FaGlobe, "text-indigo-600"],
              ])}
            </div>
          </MenuItem>

          {/* === GST Zone === */}
          <MenuItem setActive={setActive} active={active} href="/gstZone" item="GST Zone">
            <div className={`grid grid-cols-3 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["gSTRegistration", "GST Registration", FaUniversity, "text-blue-500"],
                ["gSTReturnFilingbyAccountant", "GST Return", FaReceipt, "text-emerald-500"],
                ["gSTEInvoicing", "E-Invoicing", FaFileInvoice, "text-rose-500"],
                ["gSTLUTForm", "LUT Form", FaFileContract, "text-purple-600"],
                ["gSTNotice", "GST Notice", FaBell, "text-red-500"],
                ["gSTForeigners", "Foreigners", FaGlobe, "text-blue-400"],
                ["gSTAmendment", "Amendment", FaChartBar, "text-green-500"],
                ["gSTRevocation", "Revocation", FaUndo, "text-orange-500"],
                ["gSTR10", "GSTR-10", FaDownload, "text-cyan-500"],
              ])}
            </div>
          </MenuItem>

          {/* === Income Tax === */}
          <MenuItem setActive={setActive} active={active} href="/incomeTax" item="Income Tax">
            <div className={`grid grid-cols-3 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["incomeTaxEFiling", "E-Filing", FaMoneyBillWave, "text-green-500"],
                ["businessTaxFiling", "Business Filing", FaTachometerAlt, "text-purple-500"],
                ["iTR1ReturnFiling", "ITR-1", FaFileAlt, "text-yellow-500"],
                ["iTR2ReturnFiling", "ITR-2", FaFileAlt, "text-pink-500"],
                ["iTR3ReturnFiling", "ITR-3", FaFileAlt, "text-blue-500"],
                ["iTR4ReturnFiling", "ITR-4", FaFileAlt, "text-teal-500"],
                ["iTR5ReturnFiling", "ITR-5", FaFileAlt, "text-orange-600"],
                ["iTR6ReturnFiling", "ITR-6", FaFileAlt, "text-rose-500"],
                ["iTR7ReturnFiling", "ITR-7", FaFileAlt, "text-emerald-500"],
                ["filing15CA15CB", "15CA/15CB", FaFileContract, "text-purple-600"],
                ["tANRegistration", "TAN", FaKey, "text-blue-600"],
                ["tDSReturnFiling", "TDS Filing", FaUpload, "text-pink-600"],
                ["incomeTaxNotice", "Tax Notice", FaBell, "text-red-500"],
              ])}
            </div>
          </MenuItem>

          {/* === MCA === */}
          <MenuItem setActive={setActive} active={active} href="/mca" item="MCA">
            <div className={`grid grid-cols-3 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["CompanyCompliance", "Company Compliance", FaUniversity, "text-purple-500"],
                ["LLPCompliance", "LLP Compliance", FaLayerGroup, "text-green-600"],
                ["OPCCompliance", "OPC Compliance", FaUserPlus, "text-blue-600"],
                ["NameChangeCompany", "Name Change", FaUserCog, "text-emerald-600"],
                ["RegisteredOfficeChange", "Office Change", FaBuilding, "text-pink-500"],
                ["DINeKYCFiling", "DIN eKYC", FaFingerprint, "text-orange-500"],
                ["DINReactivation", "DIN Reactivation", FaUndo, "text-yellow-500"],
                ["DirectorChange", "Director Change", FaUserPlus, "text-teal-500"],
                ["RemoveDirector", "Remove Director", FaUserSlash, "text-red-500"],
                ["FilingADT_1", "ADT-1", FaDownload, "text-blue-500"],
                ["FilingDPT_3", "DPT-3", FaUpload, "text-cyan-600"],
                ["LLPForm11Filing", "LLP Form 11", FaFileAlt, "text-purple-500"],
                ["DormantStatusFiling", "Dormant Status", FaArchive, "text-rose-600"],
                ["MOAAmendment", "MOA Amendment", FaFileContract, "text-green-500"],
                ["AOAAmendment", "AOA Amendment", FaFileContract, "text-indigo-500"],
                ["AuthorizedCapitalIncrease", "Capital Increase", FaChartLine, "text-orange-500"],
                ["ShareTransfer", "Share Transfer", FaShareAlt, "text-pink-600"],
                ["DematofShares", "Demat of Shares", FaLayerGroup, "text-blue-500"],
                ["WindingUpLLP", "Winding Up LLP", FaArchive, "text-yellow-600"],
                ["WindingUpCompany", "Winding Up Company", FaArchive, "text-red-600"],
              ])}
            </div>
          </MenuItem>

          {/* === Compliance === */}
          <MenuItem setActive={setActive} active={active} item="Compliance">
            <div className={`grid grid-cols-3 gap-2 text-sm p-2 ${reemKufi.className}`}>
              {renderLinks([
                ["fdi-filing-rbi", "FDI Filing", FaRupeeSign, "text-green-600"],
                ["fla-return", "FLA Return", FaChartBar, "text-indigo-500"],
                ["fssai-renewal", "FSSAI Renewal", FaCalendarCheck, "text-blue-600"],
                ["fssai-return", "FSSAI Return", FaReceipt, "text-orange-600"],
                ["business-plan", "Business Plan", FaTachometerAlt, "text-yellow-600"],
                ["hr-payroll", "HR & Payroll", FaHandsHelping, "text-pink-600"],
                ["pf-return", "PF Return", FaMoneyBillWave, "text-green-500"],
                ["esi-return", "ESI Return", FaMoneyBillWave, "text-blue-500"],
                ["professional-tax-return", "PT Return", FaFingerprint, "text-emerald-500"],
                ["partnership-compliance", "Partnership", FaUsers, "text-violet-500"],
                ["proprietorship-compliance", "Proprietorship", FaBriefcase, "text-sky-500"],
                ["bookkeeping", "Bookkeeping", FaBookOpen, "text-yellow-500"],
              ])}
            </div>
          </MenuItem>

          {/* Web Dev Section */}
          <MenuItem setActive={setActive} active={active} item="Web Dev">
            <div className={`grid grid-cols-2 gap-2 text-sm ${reemKufi.className}`}>
              {renderLinks([["gSTRegistration", "GST Registration", FaUniversity, "text-indigo-500"]])}
            </div>
          </MenuItem>
        </Menu>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="relative inline-block text-white text-xl group rounded-md px-6 py-3 overflow-hidden"
        >
          <span className="absolute inset-0 bg-blue-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out z-0"></span>
          <span className={`relative z-10 transition-colors duration-300 ${caprasimo.className}`}>
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
