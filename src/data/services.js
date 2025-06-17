
import dynamic from "next/dynamic";


const services = {
  // Startup
  proprietorship: {
    component : dynamic(() => import("@/data/(startup)/proprietorship"))
  },
  partnership: {
    component : dynamic(() => import("@/data/(startup)/partnership"))
  },
  onePersonCompany: {
    component : dynamic(() => import("@/data/(startup)/onePersonCompany"))
  },
  llp: {
    component : dynamic(() => import("@/data/(startup)/llp"))
  },
  privateLimitedCompany: {
    component : dynamic(() => import("@/data/(startup)/privateLimitedCompany"))
  },
  publicLimitedCompany: {
    component : dynamic(() => import("@/data/(startup)/publicLimitedCompany"))
  },
  indianSubsidiary: {
    component : dynamic(() => import("@/data/(startup)/indianSubsidiary"))
  },

  // Registrations
  startupIndia: {
    component : dynamic(() => import("@/data/(Registrations)/startupIndia"))
  },
  tradeLicense: {
    component : dynamic(() => import("@/data/(Registrations)/tradeLicense"))
  },
  fSSAIRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/fssaiRegistration"))
  },
  fSSAILicense: {
    component : dynamic(() => import("@/data/(Registrations)/fSSAILicense"))
  },
  iCEGATERegistration: {
    component : dynamic(() => import("@/data/(Registrations)/iCEGATERegistration"))
  },
  iSORegistration: {
    component : dynamic(() => import("@/data/(Registrations)/iSORegistration"))
  },
  pFRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/pFRegistration"))
  },
  eSIRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/eSIRegistration"))
  },
  professionalTaxRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/professionalTaxRegistration"))
  },
  rCMCRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/rCMCRegistration"))
  },
  Registration_12A_and_80G: {
    component : dynamic(() => import("@/data/(Registrations)/registration12Aand80G"))
  },
  Registration_12A: {
    component : dynamic(() => import("@/data/(Registrations)/registration12A"))
  },
  GRegistration_80: {
    component : dynamic(() => import("@/data/(Registrations)/registration80G"))
  },
  digitalSignature: {
    component : dynamic(() => import("@/data/(Registrations)/digitalSignature"))
  },
  shopActRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/shopActRegistration"))
  },
  udyamRegistration: {
    component : dynamic(() => import("@/data/(Registrations)/udyamRegistration"))
  },
  fCRARegistration: {
    component : dynamic(() => import("@/data/(Registrations)/fCRAregistration"))
  },

  // GST Zone
  gSTRegistration: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTRegistration"))
  },
  gSTReturnFilingbyAccountant: {
   component : dynamic(() => import("@/data/(GST Zone)/GSTReturnFilingbyAccountant"))
  },
  gSTEInvoicing: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTEInvoicing"))
  },
  gSTLUTForm: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTLUTForm"))
  },
  gSTNotice: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTNotice"))
  },
  gSTForeigners: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTForeigners"))
  },
  gSTAmendment: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTAmendment"))
  },
  gSTRevocation: {
    component : dynamic(() => import("@/data/(GST Zone)/GstRevocation"))
  },
  gSTR10: {
    component : dynamic(() => import("@/data/(GST Zone)/GSTRten"))
  },

  // Income Tax
  incomeTaxEFiling: {
   component : dynamic(() => import("@/data/(Income Tax)/IncomeTaxEFiling"))
  },
  businessTaxFiling: {
   component : dynamic(() => import("@/data/(Income Tax)/BusinessTaxFiling"))
  },
  iTR1ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR1ReturnFiling"))
  },
  iTR2ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR2ReturnFiling"))
  },
  iTR3ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR3ReturnFiling"))
  },
  iTR4ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR4ReturnFiling"))
  },
  iTR5ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR5ReturnFiling"))
  },
  iTR6ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR6ReturnFiling"))
  },
  iTR7ReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/ITR7ReturnFiling"))
  },
  filing15CA15CB: {
    component : dynamic(() => import("@/data/(Income Tax)/Filing15CA15CB"))
  },
  tANRegistration: {
    component : dynamic(() => import("@/data/(Income Tax)/TANRegistration"))
  },
  tDSReturnFiling: {
    component : dynamic(() => import("@/data/(Income Tax)/TDSReturnFiling"))
  },
  incomeTaxNotice: {
    component : dynamic(() => import("@/data/(Income Tax)/IncomeTaxNotice"))
  },

  // MCA
  CompanyCompliance: {
    component : dynamic(() => import("@/data/(MCA)/CompanyCompliance"))
  },
  LLPCompliance: {
    component : dynamic(() => import("@/data/(MCA)/LLPCompliance"))
  },
  OPCCompliance: {
    component : dynamic(() => import("@/data/(MCA)/OPCCompliance"))
  },
  NameChangeCompany: {
    component : dynamic(() => import("@/data/(MCA)/NameChangeCompany"))
  },
  RegisteredOfficeChange: {
    component : dynamic(() => import("@/data/(MCA)/RegisteredOfficeChange"))
  },
  DINeKYCFiling: {
    component : dynamic(() => import("@/data/(MCA)/DINeKYCFiling"))
  },
  DINReactivation: {
    component : dynamic(() => import("@/data/(MCA)/DINReactivation"))
  },
  DirectorChange: {
    component : dynamic(() => import("@/data/(MCA)/DirectorChange"))
  },
  RemoveDirector: {
    component : dynamic(() => import("@/data/(MCA)/RemoveDirector"))
  },
  FilingADT_1: {
    component : dynamic(() => import("@/data/(MCA)/FilingADT_1"))
  },
  FilingDPT_3: {
    component : dynamic(() => import("@/data/(MCA)/FilingDPT_3"))
  },
  LLPForm11Filing: {
    component : dynamic(() => import("@/data/(MCA)/LLPForm11Filing"))
  },
  DormantStatusFiling: {
    component : dynamic(() => import("@/data/(MCA)/DormantStatusFiling"))
  },
  MOAAmendment: {
    component : dynamic(() => import("@/data/(MCA)/MOAAmendment"))
  },
  AOAAmendment: {
    component : dynamic(() => import("@/data/(MCA)/AOAAmendment"))
  },
  AuthorizedCapitalIncrease: {
    component : dynamic(() => import("@/data/(MCA)/AuthorizedCapitalIncrease"))
  },
  ShareTransfer: {
    component : dynamic(() => import("@/data/(MCA)/ShareTransfer"))
  },
  DematofShares: {
    component : dynamic(() => import("@/data/(MCA)/DematofShares"))
  },
  WindingUpLLP: {
    component : dynamic(() => import("@/data/(MCA)/WindingUpLLP"))
  },
  WindingUpCompany: {
    component : dynamic(() => import("@/data/(MCA)/WindingUpCompany"))
  },

  // Compliance
  FDIFilingwithRBI: {
    title: "FDI Filing with RBI",
    description: "File Foreign Direct Investment returns with RBI.",
    details: "Mandatory filings for foreign investments in Indian companies.",
  },
  FLAReturnFiling: {
    title: "FLA Return Filing",
    description: "File Foreign Liabilities and Assets returns.",
    details:
      "Compliance with RBI regulations on foreign assets and liabilities.",
  },
  FSSAIRenewal: {
    title: "FSSAI Renewal",
    description: "Renew your FSSAI license to continue operations.",
    details: "Annual renewal of FSSAI license to ensure ongoing compliance.",
  },
  FSSAIReturnFiling: {
    title: "FSSAI Return Filing",
    description: "File returns related to FSSAI compliance.",
    details:
      "Periodic filing of returns to FSSAI as per regulatory requirements.",
  },
  BusinessPlan: {
    title: "Business Plan",
    description: "Prepare a professional business plan.",
    details: "Detailed business plans for startups, funding, and strategy.",
  },
  HRPayroll: {
    title: "HR & Payroll",
    description: "Manage human resources and payroll services.",
    details:
      "Payroll processing, employee management, and compliance services.",
  },
  PFReturnFiling: {
    title: "PF Return Filing",
    description: "File monthly/annual Provident Fund returns.",
    details:
      "Ensure compliance with EPF contribution and reporting requirements.",
  },
  ESIReturnFiling: {
    title: "ESI Return Filing",
    description: "File returns for Employees State Insurance.",
    details: "Comply with ESI regulations through timely return filing.",
  },
  ProfessionalTaxReturnFiling: {
    title: "Professional Tax Return Filing",
    description: "File professional tax returns with accuracy.",
    details: "Meet deadlines for professional tax filings to avoid penalties.",
  },
  MCAAnnualReturnFiling: {
    title: "MCA Annual Return Filing",
    description: "File annual returns with MCA.",
    details: "Mandatory annual filings to keep company records updated.",
  },
  GSTAnnualReturnFiling: {
    title: "GST Annual Return Filing",
    description: "File your GST annual returns timely.",
    details: "Annual GST compliance to reconcile sales and tax payments.",
  },
  IncomeTaxAudit: {
    title: "Income Tax Audit",
    description: "Professional income tax audit services.",
    details: "Audit of books of accounts to ensure compliance with tax laws.",
  },
};

export default services;
