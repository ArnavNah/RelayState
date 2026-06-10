"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface text-on-surface pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand Side */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">RelayEstate</span>
            </div>
            <p className="text-on-surface/40 text-2xl font-medium leading-relaxed max-w-md">
              AI-driven response systems that help real estate teams capture, qualify, and route every lead without the friction.
            </p>
            <div className="flex items-center gap-4 text-on-surface/60 font-bold uppercase tracking-widest text-[10px]">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Part of the Aura Ecosystem
            </div>
          </div>

          {/* Links Side */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/20">Product</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Solutions</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Workflows</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Process</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Results</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/20">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">About Aura</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Privacy Policy</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Terms of Service</a></li>
                <li><a href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-bold">Security</a></li>
              </ul>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/20">Contact</h4>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <p className="text-sm text-on-surface/60 leading-relaxed font-bold">Ready to recover your lead flow?</p>
                <a href="#" className="text-accent font-black flex items-center gap-2 group text-sm uppercase tracking-widest">
                  Talk to Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-on-surface/20 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} RelayEstate. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-on-surface transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-on-surface transition-colors">Twitter</a>
            <a href="#" className="hover:text-on-surface transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
