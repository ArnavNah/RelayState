"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Clock, Calendar, Database } from "lucide-react";

const operations = [
  {
    area: "First-touch coverage",
    desc: "Website, portal, and missed-call response stays active beyond agent availability.",
    impact: "Faster response",
  },
  {
    area: "Qualification consistency",
    desc: "Every conversation starts with clearer intent, urgency, timeline, and fit signals.",
    impact: "Cleaner context",
  },
  {
    area: "Handoff reliability",
    desc: "Routing, reminders, and meeting transitions happen with less manual chasing.",
    impact: "Fewer dropped steps",
  },
  {
    area: "CRM continuity",
    desc: "Summaries, tags, next actions, and lead status stay more current.",
    impact: "Better pipeline hygiene",
  },
];

export const StructuredResponse = () => {
  return (
    <section className="py-48 bg-surface-container text-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          {/* Table Side */}
          <div className="lg:col-span-7">
            <div className="mb-24">
              <div className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-8">OPERATIONAL AREA</div>
              <h2 className="text-4xl md:text-7xl font-black mb-12 leading-[0.95] tracking-tighter">
                RelayEstate does not just speed up follow-up. It improves how your team responds.
              </h2>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 pb-8 border-b border-white/10">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">SYSTEM AREA</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 text-right">OUTCOME</div>
              </div>
              <div className="divide-y divide-white/10">
                {operations.map((op, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black tracking-tight">{op.area}</h3>
                      <p className="text-white/50 text-sm font-medium leading-relaxed max-w-sm">{op.desc}</p>
                    </div>
                    <div className="md:text-right self-center">
                      <span className="text-sm font-black text-white/60 uppercase tracking-[0.2em]">{op.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
            >
              <Card className="bg-white/5 border border-white/10 p-0 overflow-hidden shadow-2xl rounded-[4rem]">
                <div className="relative aspect-[16/10]">
                  <div className="absolute inset-0 bg-surface/20 z-10" />
                  <img 
                    src="/property_concept.png" 
                    className="w-full h-full object-cover grayscale-[0.2]" 
                    alt="Property Management"
                  />
                  <div className="absolute top-10 left-10 z-20">
                    <h4 className="text-4xl font-black text-white tracking-tighter">Lead flow recovered</h4>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 space-y-12">
                  <div className="space-y-4">
                    <h5 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">From inquiry to booked next step with less friction.</h5>
                    <p className="text-white/40 text-base font-medium leading-relaxed">
                      A structured workflow helps the team respond faster, capture usable context earlier, and move leads forward.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {[
                      { icon: Clock, label: "Response target", sub: "First-touch speed", val: "< 60s" },
                      { icon: Calendar, label: "Booked next step", sub: "Scheduling continuity", val: "1 flow" },
                      { icon: Database, label: "CRM updated", sub: "Notes, tags, and routing", val: "Synced" }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between gap-4 group">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover:bg-white/10 shrink-0">
                            <stat.icon className="w-6 h-6 text-white/40" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-base font-black tracking-tight truncate text-white">{stat.label}</div>
                            <div className="text-[9px] text-white/40 uppercase font-black tracking-[0.2em] truncate mt-0.5">{stat.sub}</div>
                          </div>
                        </div>
                        <div className="text-3xl md:text-4xl font-black tracking-tight text-white shrink-0">{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
