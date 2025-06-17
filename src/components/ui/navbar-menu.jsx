"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"], // These are the available weights
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children, href = "#" }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <Link href={href}>
        <motion.div
          transition={{ duration: 0.3 }}
          className={`${cinzelDecorative.className} cursor-pointer text-white tracking-wider text-sm`}
        >
          {item}
        </motion.div>
      </Link>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] ml-40 transform -translate-x-1/2 pt-3">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  // dropdown layout ensures smooth animation
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] shadow-input flex justify-center space-x-10  py-6 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 flex justify-center items-center dark:text-neutral-200 hover:text-black rounded-md  p-1 pb-2 "
    >
      {children}
    </a>
  );
};
