"use client";

import { useState, useRef, useCallback } from "react";

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export function FaqItem({ question, children }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`border bg-white rounded-3xl p-6 transition-all duration-300 hover:border-orange-500/20 ${
        isOpen
          ? "border-orange-200/40 shadow-[0_15px_30px_rgba(124,58,237,0.03)]"
          : "border-purple-100 shadow-[0_4px_20px_rgba(124,58,237,0.01)]"
      }`}
    >
      {/* Header / Toggle */}
      <button
        type="button"
        onClick={toggle}
        className="flex justify-between items-center w-full font-bold text-base text-[#120830] cursor-pointer select-none text-left gap-4"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-orange-50 text-orange-500"
              : "rotate-0 bg-purple-50 text-purple-600"
          }`}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Animated Content */}
      <div
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 500}px`
            : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
}
