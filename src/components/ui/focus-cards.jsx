"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Card = ({ card, index, hovered, setHovered }) => {
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-50 dark:bg-neutral-900 mt-15 overflow-hidden p-2 w-full transition-all duration-300 ease-out",
        hovered !== null && !isHovered && "blur-sm scale-[0.98]"
      )}
    >
      {/* Description */}
      <div className="text-black">{card.description}</div>

      {/* Title */}
      <div className="bg-blue-500 blueBoxShd flex items-center py-2 rounded-md px-4 my-3">
        <div className="md:text-sm font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>

      {/* Subtitle List - Only visible on hover */}
      {isHovered && card.list?.length > 0 && (
        <div className="space-y-1 mt-2">
          {card.list.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block text-sm text-blue-600 hover:underline"
            >
              {item.subTitle}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-10 mt-10">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
