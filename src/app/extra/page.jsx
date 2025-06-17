"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <>
<button
  onClick={() => router.back()}
  className="relative group px-6 py-2 rounded-full text-white font-medium overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 shadow-xl"
>
  <span className="relative z-10 flex items-center gap-2">
    <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
    Back
  </span>
</button>
    </>
  );
};
