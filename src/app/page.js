"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./(components)/Navbar";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { PlaceholdersAndVanishInput as InputComponent } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { Satisfy, Cinzel_Decorative } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const cinzelDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsLoading(true);
      setPlayAnimation(true);
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setIsLoading(false);
        setShowPage(true);
      }, 2500);
    } else {
      setShowPage(true);
    }
  }, []);

  const Loader3D = () => (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 1, letterSpacing: "0.1em", scale: 1.1 }}
        animate={{ opacity: 0, letterSpacing: "1em", scale: 1.05 }}
        transition={{ duration: 4 }}
        className="text-white text-6xl bg-stars font-extrabold"
      >
        VeJoBizz
      </motion.div>
    </motion.div>
  );

  const PlaceholdersSection = ({ playAnimation }) => {
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

    const onSubmit = (searchValue) => {
      if (searchValue && searchValue.trim()) {
        const slug = searchValue.trim().toLowerCase().replace(/\s+/g, "-");
        router.push(`/service/${slug}`);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: playAnimation ? 1.8 : 0, duration: 0.8 }}
        className="flex flex-col -mt-20 justify-center items-center px-4"
      >
        <InputComponent placeholders={placeholders} onSubmit={onSubmit} onChange={() => {}} />
      </motion.div>
    );
  };

  const SVGMaskEffect = ({ playAnimation }) => {
    return (
      <motion.div
        initial={playAnimation ? { opacity: 0, y: 40 } : false}
        animate={playAnimation ? { opacity: 1, y: 0 } : false}
        transition={playAnimation ? { delay: 1.2, duration: 0.8 } : undefined}
      >
        <div className="flex flex-col h-[40rem] w-full items-center justify-center overflow-hidden -mt-20">
          <MaskContainer
            revealText={
              <p className={`text-center max-w-5xl text-5xl font-bold text-white ${satisfy.className} leading-relaxed`}>
                Grow With Confidence – Welcome to{" "}
                <span className={`py-1 px-8 text-4xl rounded-lg tracking-widest bg-blue-500 shadow-lg shadow-blue-500/50 ${cinzelDecorative.className}`}>
                  VeJoBizz
                </span>{" "}
                Accounting Services.
              </p>
            }
            className="h-[40rem] rounded-md text-white"
          >
            <span>
              We’re here to <span className="text-pink-500">simplify</span> your{" "}
              <span className="text-green-500">financial</span> journey with expert, personalized{" "}
              <span className="text-pink-500">accounting</span> support.
            </span>
          </MaskContainer>
          <PlaceholdersSection playAnimation={playAnimation} />
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-80 z-[-1]"
        src="/bg-video2.mp4"
      ></video>

      <AnimatePresence>{isLoading && <Loader3D />}</AnimatePresence>

      <AnimatePresence>
        {showPage && (
          <motion.div
            initial={playAnimation ? { rotateY: 90, opacity: 0, scale: 0.9 } : false}
            animate={playAnimation ? { rotateY: 0, opacity: 1, scale: 1 } : false}
            transition={playAnimation ? { duration: 1.2, ease: [0.45, 0, 0.55, 1] } : undefined}
            className="origin-center min-h-screen overflow-hidden relative"
          >
            <motion.div
              initial={playAnimation ? { opacity: 0, y: -40 } : false}
              animate={playAnimation ? { opacity: 1, y: 0 } : false}
              transition={playAnimation ? { delay: 0.6, duration: 0.8 } : undefined}
            >
              <Navbar />
            </motion.div>

            <SVGMaskEffect playAnimation={playAnimation} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
