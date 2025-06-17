"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({ placeholders }) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const intervalRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const newDataRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [placeholders]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !inputRef.current) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);

    const style = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(style.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${style.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800).data;
    const newData = [];

    for (let y = 0; y < 800; y++) {
      for (let x = 0; x < 800; x++) {
        const i = (y * 800 + x) * 4;
        if (imageData[i + 3] > 0) {
          newData.push({
            x,
            y,
            r: 1,
            color: `rgba(${imageData[i]},${imageData[i + 1]},${imageData[i + 2]},${imageData[i + 3]})`,
          });
        }
      }
    }

    newDataRef.current = newData;
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start) => {
    const frame = (pos = 0) => {
      requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const newArr = [];

        for (let point of newDataRef.current) {
          if (point.x < pos) {
            newArr.push(point);
          } else {
            point.x += Math.random() > 0.5 ? 1 : -1;
            point.y += Math.random() > 0.5 ? 1 : -1;
            point.r -= 0.05 * Math.random();
            if (point.r > 0) newArr.push(point);
          }
        }

        newDataRef.current = newArr;
        ctx.clearRect(pos, 0, 800, 800);

        newDataRef.current.forEach(({ x, y, r, color }) => {
          if (x > pos) {
            ctx.beginPath();
            ctx.rect(x, y, r, r);
            ctx.fillStyle = color;
            ctx.fill();
          }
        });

        if (newDataRef.current.length > 0) {
          frame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    frame(start);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    draw();
    const maxX = newDataRef.current.reduce(
      (max, point) => (point.x > max ? point.x : max),
      0
    );
    setAnimating(true);
    animate(maxX);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={cn(
        "w-full relative max-w-xl pr-13 -mt-40 mx-auto dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-lg"
      )}
      initial={{ backgroundColor: "#3b82f6" }}
      animate={{ backgroundColor: value || focused ? "#f9fafb" : "#3b82f6" }}
      transition={{ duration: 0.4 }}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute pointer-events-none transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
      />
      <input
        ref={inputRef}
        value={value}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => !animating && setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-12 pr-10",
          animating && "text-transparent"
        )}
      />
      <button
        disabled={!value}
        type="submit"
        className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 transition duration-200 flex items-center justify-center"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 12l14 0"
            initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
            animate={{ strokeDashoffset: value ? 0 : "50%" }}
            transition={{ duration: 0.3 }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>

      <div
        className="absolute inset-0 flex items-center rounded-full pointer-events-none z-10"
        onClick={() => {
          inputRef.current?.focus();
          inputRef.current?.setSelectionRange(0, 0);
        }}
      >
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none text-white text-sm sm:text-base font-normal pl-4 sm:pl-12 truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
