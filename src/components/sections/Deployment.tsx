"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";

export const Deployment = () => {
  return (
    <section className="py-32 bg-surface text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            How RelayEstate gets deployed without disrupting your team.
          </h2>
          <p className="text-white/50 text-lg">
            We work alongside your existing stack to enhance, not replace, the way your team already operates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white/5 border border-white/10 p-12 flex flex-col justify-between shadow-2xl rounded-3xl">
              <div>
                <div className="w-16 h-1 bg-accent mb-8" />
                <p className="text-2xl font-bold italic mb-8 leading-relaxed">
                  "RelayEstate has transformed our lead follow-up. We're seeing a 40% increase in initial response rates within the first month."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src="/sarah_avatar.png" 
                  alt="Sarah Jenkins" 
                  className="w-12 h-12 rounded-full object-cover border border-white/15 shadow-sm"
                />
                <div>
                  <div className="font-bold text-white">Sarah Jenkins</div>
                  <div className="text-sm text-white/40 uppercase font-black tracking-widest">Director of Growth, Elite Realty</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 p-8 shadow-2xl text-center rounded-3xl">
              <div className="text-5xl font-black text-accent mb-2">48h</div>
              <p className="text-white/40 uppercase font-black tracking-widest text-xs">Full Deployment</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 shadow-2xl text-center rounded-3xl">
              <div className="text-5xl font-black text-white mb-2">99%</div>
              <p className="text-white/40 uppercase font-black tracking-widest text-xs">Uptime Guarantee</p>
            </Card>
            <Card className="bg-white/5 border border-white/10 p-8 shadow-2xl text-center md:col-span-2 rounded-3xl">
              <div className="text-4xl font-black text-white mb-4">Enterprise Ready</div>
              <p className="text-white/40 text-sm">Security and scalability built into the core of the platform.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
