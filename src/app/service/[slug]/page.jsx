"use client";

import React, { use } from "react";
import services from "@/data/services";
import NavbarMain from "@/app/(components)/Navbar";
import { BackButton } from "@/app/extra/page";

export default function ServicePage(props) {
  const params = use(props.params); // unwrap params Promise
  const { slug } = params;
  const service = services[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  const ServiceComponent = service.component

  return (
    <>
      <NavbarMain className={"bg-[#666] shadow-lg max-w-6xl rounded-lg"}/>

      <div className="mt-15 min-h-screen bg-gray-50">
        
        <div className="p-8  max-w-8xl mx-auto ">
          
          <main className="p-6 max-w-8xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <p className="mb-4">{service.description}</p>
            <div>{service.details}</div>
            <div>{service.data}</div>
            <ServiceComponent/>
          </main>
        </div>
      </div>
    </>
  );
}
