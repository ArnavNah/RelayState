"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/Button";
import { ArrowRight, Zap, Calendar, Database } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll(".word");
    
    gsap.fromTo(
      words,
      { 
        y: "100%", 
        opacity: 0,
        rotateX: -30,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
      }
    );
  }, []);

  const headline = "Turn every inquiry into a faster next step.";

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center pt-48 pb-24 overflow-hidden bg-surface">
      {/* Background Image with Overlay */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-surface/85 z-10" />
        <img
          src="/hero_background.png"
          alt="Luxury modern house at dusk"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Top Metadata labels */}
          <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-1.5">
              <div className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">// AI RESPONSE SYSTEMS FOR REAL ESTATE TEAMS</div>
              <div className="text-sm font-bold text-white/70">Lead intake • routing • scheduling • CRM follow-up</div>
            </div>
            <div className="md:text-right space-y-1.5">
              <div className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">OPERATING SYSTEM LAYER</div>
              <div className="text-sm font-bold text-white/70">Response target: <span className="text-accent">under 60 seconds</span></div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="lg:col-span-8">
            <h1 
              ref={headlineRef}
              className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] tracking-[-0.05em] perspective-1000"
            >
              {headline.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-[0.1em]">
                  <span className="word inline-block origin-bottom">{word}</span>
                </span>
              ))}
            </h1>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed max-w-sm font-medium">
              Automate lead response, qualification, routing, scheduling, and CRM updates so your team can move every inquiry forward before momentum fades.
            </p>
            
            <div className="space-y-6">
              <Button size="lg" className="w-full rounded-full bg-accent text-white hover:bg-accent/90 px-8 py-6 h-auto text-lg font-black uppercase tracking-tight flex justify-between items-center group transition-all duration-500 hover:scale-[1.02]">
                Map My Lead Flow
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  Instant Reply
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  Booked Call
                </div>
                <div className="col-span-2 flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest">
                  <Database className="w-3.5 h-3.5 text-accent" />
                  CRM Sync
                </div>
              </div>
            </div>
          </div>

          {/* Brand trust logo cloud */}
          <div className="lg:col-span-12 mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 w-full">
            <div className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase shrink-0">
              TRUSTED BY HIGH-PERFORMANCE TEAMS AT:
            </div>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-30 text-lg font-black tracking-tighter text-white">
              <span className="hover:opacity-100 transition-opacity duration-300">COMPASS</span>
              <span className="hover:opacity-100 transition-opacity duration-300">RE/MAX</span>
              <span className="hover:opacity-100 transition-opacity duration-300">CENTURY 21</span>
              <span className="hover:opacity-100 transition-opacity duration-300">SOTHEBY'S</span>
              <span className="hover:opacity-100 transition-opacity duration-300">EXP REALTY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden md:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30 text-[9px] font-black uppercase tracking-[0.2em] cursor-pointer"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-6 bg-white/20 relative">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-[-1.5px] w-1 h-1 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Footer Badge */}
      <div className="absolute bottom-12 right-12 z-30">
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-[0.2em]">
          <div className="w-2.5 h-2.5 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
          </div>
          Made in Aura
        </div>
      </div>
    </section>
  );
};
