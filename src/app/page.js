"use client";

import Navbar from "./(components)/Navbar/page";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { PlaceholdersAndVanishInput as InputComponent } from "@/components/ui/placeholders-and-vanish-input"; // ✅ Rename on import
import { useRouter } from "next/navigation";

const Home = () => {
  function SVGMaskEffect() {
    return (
      <div className="flex flex-col *: h-[40rem] -mt-30 w-full items-center justify-center overflow-hidden  ">
        <MaskContainer
          revealText={
            <p className="text-center max-w-4xl text-4xl font-bold text-white dark:text-white">
              Grow With Confidence – Welcome to{" "}
              <span className="py-1 px-8 rounded-lg shadow:lg bg-blue-500 shadow-lg shadow-blue-500/50">
                VeJoBizz
              </span>{" "}
              Accounting Services.
            </p>
          }
          className="h-[40rem] rounded-md text-white dark:text-black"
        >
          <span>
            We’re here to <span className="text-pink-500">simplify</span> your{" "}
            <span className="text-green-500">financial</span> journey with
            expert, personalized{" "}
            <span className="text-pink-500">accounting</span> support.
          </span>
        </MaskContainer>
        <PlaceholdersSection />
      </div>
    );
  }

  function PlaceholdersSection() {
    const placeholders = [
      "Need help registering company?",
      "How to cut biz tax legally?",
      "Docs needed for GST filing?",
      "Set up payroll for staff?",
      "Help with tax return filing?",
      "Best way to handle costs?",
      "Bookkeeping for small biz?",
      "Need help with audit?",
      "Steps for TDS return filing?",
      "CA needed for startup rules?",
    ];

    const handleChange = (e) => {
      console.log(e.target.value);
    };

    const router = useRouter();

    const onSubmit = (searchValue) => {
      if (searchValue && searchValue.trim()) {
        router.push(`/services?q=${encodeURIComponent(searchValue.trim())}`);
      }
    };

    return (
      <div className="flex flex-col -mt-50   justify-center items-center px-4">
        <InputComponent
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full opacity-80 h-full object-cover"
          src="/bg-video2.mp4"
        ></video>
        <SVGMaskEffect />
      </div>
    </>
  );
};

export default Home;
