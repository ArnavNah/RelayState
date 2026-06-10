"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Solutions", href: "#" },
    { name: "Workflows", href: "#" },
    { name: "Process", href: "#" },
    { name: "Results", href: "#" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/80 border-b border-white/5 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-8">
          {leftLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-white/60 hover:text-white transition-colors tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          <div className="w-9 h-9 bg-copper/20 rounded-xl flex items-center justify-center border border-copper/20 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C88D5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </div>
          <span className="font-black text-2xl tracking-tighter text-white uppercase">RelayEstate</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-8">
          <a href="#" className="hidden lg:block text-sm font-bold text-white/60 hover:text-white tracking-tight">FAQ</a>
          <Button variant="primary" className="rounded-full px-6 py-2.5 h-auto text-sm font-black flex gap-2 items-center tracking-tight">
            Find My Lead Gaps <ArrowRight className="w-4 h-4" />
          </Button>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface-container/95 border-t border-white/5 p-8 lg:hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              {leftLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-xl font-black text-white hover:text-accent transition-colors tracking-tight">
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <Button variant="primary" className="w-full rounded-full py-4 font-black">Find My Lead Gaps</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
