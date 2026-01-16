"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-[2px]">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          AAM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-gray-600 font-medium">
          <Link href="#about" className="hover:text-black transition">
            About
          </Link>
          <Link href="#work" className="hover:text-black transition">
            Work
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white  absolute">
          <div className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-black hover:bg-[#f0f2f4] transition p-3"
            >
              About
            </Link>
            <Link
              href="#work"
              onClick={() => setOpen(false)}
              className="hover:text-black hover:bg-[#f0f2f4] transition p-3"
            >
              Work
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
