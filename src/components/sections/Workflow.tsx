"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import dynamic from "next/dynamic";
import { Smartphone, Code, BarChart2, CheckCircle2 } from "lucide-react";

const GridTrail = dynamic(() => import("../GridTrail"), { ssr: false });

export const Workflow = () => {
  return (
    <section id="workflow" className="py-24 relative min-h-screen flex items-center bg-surface">
      <GridTrail />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            FLUID <span className="text-accent">WORKFLOW</span>
          </motion.h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Interact with the canvas below. Our system is as responsive as your next potential client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Centralized Command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <Card glow="copper" className="h-full flex flex-col justify-between bg-accent/5 border border-white/10 p-10 rounded-[3rem]">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Centralized Command</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Manage your entire operation from a single, beautiful dashboard designed for clarity and speed. Track routing statuses, lead distributions, and campaign metrics in real-time.
                </p>
              </div>
              
              <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 w-full">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-bold uppercase tracking-wider">Intake Pipeline</span>
                  <span className="text-accent font-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    RUNNING
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-accent rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-white/30 pt-2 border-t border-white/5">
                  <span>48 Leads Routed Today</span>
                  <span>Avg Latency: 32s</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Automated SMS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-1"
          >
            <Card glow="teal" className="h-full bg-teal-500/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Automated SMS</h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Instant engagement with every lead via AI-personalized messaging.
                  </p>
                </div>
                <Smartphone className="w-7 h-7 text-accent shrink-0" />
              </div>
              
              <div className="space-y-2.5 bg-black/30 border border-white/5 p-4 rounded-2xl text-[11px] mt-4 w-full">
                <div className="flex gap-2 items-end">
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl rounded-bl-none text-white/80 max-w-[85%]">
                    Hi! Is the condo on 5th Ave still available?
                  </div>
                </div>
                <div className="flex gap-2 items-end justify-end">
                  <div className="bg-accent/15 border border-accent/25 px-3 py-1.5 rounded-2xl rounded-br-none text-white max-w-[85%]">
                    Yes! I can lock in a viewing for Saturday at 10am. Sound good?
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Reports */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1"
          >
            <Card className="h-full border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">Reports</h3>
                  <BarChart2 className="w-4 h-4 text-accent" />
                </div>
                <p className="text-white/50 text-[11px]">Real-time ROI tracking.</p>
              </div>
              
              {/* SVG Area Chart Sparkline */}
              <div className="w-full h-16 relative mt-4">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(200, 141, 95, 0.4)" />
                      <stop offset="100%" stopColor="rgba(200, 141, 95, 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 25 Q 15 15, 30 20 T 60 10 T 90 5 L 100 2 L 100 30 L 0 30 Z" fill="url(#sparklineGrad)" />
                  <path d="M 0 25 Q 15 15, 30 20 T 60 10 T 90 5 L 100 2" fill="none" stroke="#C88D5F" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(200,141,95,0.8)]" />
                </svg>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: API */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1"
          >
            <Card className="h-full border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">API</h3>
                  <Code className="w-4 h-4 text-teal-400" />
                </div>
                <p className="text-white/50 text-[11px] mb-3">Connect your stack.</p>
              </div>
              
              <div className="bg-black/50 border border-white/5 p-3 rounded-xl font-mono text-[9px] text-teal-300 leading-relaxed overflow-hidden">
                <span className="text-white/40">{"{"}</span>
                <div className="pl-3">
                  <span className="text-white/50">"event":</span> "lead.rtd",<br />
                  <span className="text-white/50">"lead":</span> "Sarah.C",<br />
                  <span className="text-white/50">"agent":</span> "usr_9"
                </div>
                <span className="text-white/40">{"}"}</span>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
