"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Play } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="cta" className="py-40 relative overflow-hidden bg-surface text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-surface/85 z-10" />
        <img
          src="/cta_background.png"
          alt="Modern House at night"
          className="w-full h-full object-cover grayscale-[0.5]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-[9rem] font-black mb-16 leading-[0.85] tracking-tight">
            See where your lead flow is quietly breaking.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-full bg-accent text-white hover:bg-accent/90 px-12 py-10 text-2xl font-black uppercase tracking-tight flex gap-4 items-center group">
              Map My Lead Flow
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Button>
            <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group px-8">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <Play className="w-6 h-6 fill-white" />
              </div>
              <span className="font-bold text-lg uppercase tracking-widest">Watch the Relay story</span>
            </div>
          </div>
          <p className="mt-20 text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
            Join 500+ top-performing teams.
          </p>
        </div>
      </div>
    </section>
  );
};
