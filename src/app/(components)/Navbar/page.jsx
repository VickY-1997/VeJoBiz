"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Startup">
          <div className="space-y-6 space-x-6 text-sm grid grid-cols-2 text-center">
            <HoveredLink href="/Proprietorship">Proprietorship</HoveredLink>
            <HoveredLink href="/Partnership">Partnership</HoveredLink>
            <HoveredLink href="/OnePersonCompany">
              One Person Company
            </HoveredLink>
            <HoveredLink href="/llp">Limited Liability Partnership</HoveredLink>
            <HoveredLink href="/plc">Private Limited Company</HoveredLink>
            <HoveredLink href="/pulc">Public Limited Company</HoveredLink>
            <HoveredLink href="/IndianSubsidiary">
              Indian Subsidiary
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Registrations">
          <div className="space-y-6 space-x-4 text-sm grid grid-cols-4 text-center">
            <HoveredLink href="/StartupIndia">Startup India</HoveredLink>
            <HoveredLink href="/TradeLicense">Trade License</HoveredLink>
            <HoveredLink href="/FSSAIRegistration">
              FSSAI Registration
            </HoveredLink>
            <HoveredLink href="/FSSAILicense">FSSAI License</HoveredLink>
            <HoveredLink href="/HalalLicense&Certification">
              Halal License & Certification
            </HoveredLink>
            <HoveredLink href="/ICEGATERegistration">
              ICEGATE Registration
            </HoveredLink>
            <HoveredLink href="/ISORegistration">ISO Registration</HoveredLink>
            <HoveredLink href="/PF Registration">PF Registration</HoveredLink>
            <HoveredLink href="/ESIRegistration">ESI Registration</HoveredLink>
            <HoveredLink href="/ProfessionalTaxRegistration">
              Professional Tax Registration
            </HoveredLink>
            <HoveredLink href="/RCMCRegistration">
              RCMC Registration
            </HoveredLink>
            <HoveredLink href="/12A and 80G Registration">
              12A and 80G Registration
            </HoveredLink>
            <HoveredLink href="/12ARegistration">12A Registration</HoveredLink>
            <HoveredLink href="/80GRegistration">80G Registration</HoveredLink>
            <HoveredLink href="/DigitalSignature">
              Digital Signature
            </HoveredLink>
            <HoveredLink href="/ShopActRegistration">
              Shop Act Registration
            </HoveredLink>
            <HoveredLink href="/UdyamRegistration">
              Udyam Registration
            </HoveredLink>
            <HoveredLink href="/FCRARegistration">
              FCRA Registration
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="GST Zone">
          <div className="space-y-6 space-x-4 text-sm grid grid-cols-3 text-center">
            <HoveredLink href="/GSTRegistration">GST Registration</HoveredLink>
            <HoveredLink href="/GSTReturnFilingbyAccountant">
              GST Return Filing by Accountant
            </HoveredLink>
            <HoveredLink href="/GSTR9">
              GST Annual Return Filing (GSTR-9)
            </HoveredLink>
            <HoveredLink href="/GSTEInvoicing">
              GST E-Invoicing Software
            </HoveredLink>
            <HoveredLink href="/GSTLUTForm">GST LUT Form</HoveredLink>
            <HoveredLink href="/GSTNotice">GST Notice</HoveredLink>
            <HoveredLink href="/GSTForeigners">
              GST Registration for Foreigners
            </HoveredLink>
            <HoveredLink href="/GSTSoftware">
              GST Invoicing & Filing Software
            </HoveredLink>
            <HoveredLink href="/GSTAmendment">GST Amendment</HoveredLink>
            <HoveredLink href="/GST Revocation">GST Revocation</HoveredLink>
            <HoveredLink href="/GSTR10">GSTR-10</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Income Tax">
          <div className="space-y-6 space-x-6 text-sm grid grid-cols-4 text-center">
            <HoveredLink href="/IncomeTaxEFiling">
              Income Tax E-Filing
            </HoveredLink>
            <HoveredLink href="/BusinessTaxFiling">
              Business Tax Filing
            </HoveredLink>
            <HoveredLink href="/ITR1ReturnFiling">
              ITR-1 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR2ReturnFiling">
              ITR-2 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR3ReturnFiling">
              ITR-3 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR4ReturnFiling">
              ITR-4 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR5ReturnFiling">
              ITR-5 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR6ReturnFiling">
              ITR-6 Return Filing
            </HoveredLink>
            <HoveredLink href="/ITR7ReturnFiling">
              ITR-7 Return Filing
            </HoveredLink>
            <HoveredLink href="/15CA15CB Filing">
              15CA - 15CB Filing
            </HoveredLink>
            <HoveredLink href="/TANRegistration">TAN Registration</HoveredLink>
            <HoveredLink href="/TDSReturnFiling">TDS Return Filing</HoveredLink>
            <HoveredLink href="/IncomeTaxNotice">Income Tax Notice</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="MCA">
          <div className="space-y-6 space-x-4 text-sm grid grid-cols-4 text-center">
            <HoveredLink href="/CompanyCompliance">
              Company Compliance
            </HoveredLink>
            <HoveredLink href="/LLPCompliance">LLP Compliance</HoveredLink>
            <HoveredLink href="/OPCCompliance">OPC Compliance</HoveredLink>
            <HoveredLink href="/NameChangeCompany">
              Name Change - Company
            </HoveredLink>
            <HoveredLink href="/RegisteredOfficeChange">
              Registered Office Change
            </HoveredLink>
            <HoveredLink href="/DINeKYCFiling">DIN eKYC Filing</HoveredLink>
            <HoveredLink href="/DINReactivation">DIN Reactivation</HoveredLink>
            <HoveredLink href="/DirectorChange">Director Change</HoveredLink>
            <HoveredLink href="/Remove Director">Remove Director</HoveredLink>
            <HoveredLink href="/ADT-1 Filing">ADT-1 Filing</HoveredLink>
            <HoveredLink href="/DPT-3 Filing">DPT-3 Filing</HoveredLink>
            <HoveredLink href="/LLPForm11Filing">
              LLP Form 11 Filing
            </HoveredLink>
            <HoveredLink href="/DormantStatusFiling">
              Dormant Status Filing
            </HoveredLink>
            <HoveredLink href="/MOAAmendment">MOA Amendment</HoveredLink>
            <HoveredLink href="/AOAAmendment">AOA Amendment</HoveredLink>
            <HoveredLink href="/AuthorizedCapitalIncrease">
              Authorized Capital Increase
            </HoveredLink>
            <HoveredLink href="/ShareTransfer">Share Transfer</HoveredLink>
            <HoveredLink href="/DematofShares">Demat of Shares</HoveredLink>
            <HoveredLink href="/WindingUpLLP">Winding Up - LLP</HoveredLink>
            <HoveredLink href="/WindingUpCompany">
              Winding Up - Company
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Compliance">
          <div className="space-y-6 space-x-1 text-sm grid grid-cols-4 text-center">
            <HoveredLink href="/FDIFilingwithRBI">
              FDI Filing with RBI
            </HoveredLink>
            <HoveredLink href="/FLAReturnFiling">FLA Return Filing</HoveredLink>
            <HoveredLink href="/FSSAIRenewal">FSSAI Renewal</HoveredLink>
            <HoveredLink href="/FSSAIReturnFiling">
              FSSAI Return Filing
            </HoveredLink>
            <HoveredLink href="/BusinessPlan">Business Plan</HoveredLink>
            <HoveredLink href="/HRPayroll">HR & Payroll</HoveredLink>
            <HoveredLink href="/PFReturnFiling">PF Return Filing</HoveredLink>
            <HoveredLink href="/ESIReturnFiling">ESI Return Filing</HoveredLink>
            <HoveredLink href="/ProfessionalTaxReturnFiling">
              Professional Tax Return Filing
            </HoveredLink>
            <HoveredLink href="/PartnershipCompliance">
              Partnership Compliance
            </HoveredLink>
            <HoveredLink href="/ProprietorshipCompliance">
              Proprietorship Compliance
            </HoveredLink>
            <HoveredLink href="/Bookkeeping">Bookkeeping</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export default NavbarMain;
