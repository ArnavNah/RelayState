"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Sparkles, Clock, Bot, User, CheckCircle2, Zap, MessageSquare } from "lucide-react";

export const DashboardShowcase = () => {
  return (
    <section className="py-32 bg-surface text-on-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Built for the lead moments that need speed and follow-through.
          </h2>
          <p className="text-white/40 text-lg">
            Our interface is optimized for high-volume environments where every second counts toward a conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Active Lead Stream (Live Feed) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Card className="aspect-[4/5] bg-white/5 border border-white/10 p-0 overflow-hidden relative group rounded-3xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  Live Lead Feed
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Multi-channel Intake</h3>
                  <p className="text-white/45 text-xs">Leads captured and tagged instantly from any source.</p>
                </div>
                
                <div className="space-y-3 flex-1 flex flex-col justify-center">
                  {[
                    { name: "Sarah Connor", source: "Zillow", price: "$1,250,000", status: "Instant Text Sent", statusColor: "text-accent border-accent/20 bg-accent/5" },
                    { name: "Bruce Wayne", source: "Facebook Ad", price: "$3,400,000", status: "Meeting Booked", statusColor: "text-teal-400 border-teal-500/20 bg-teal-500/5" },
                    { name: "Diana Prince", source: "Organic Web", price: "$2,100,000", status: "Intake Routing", statusColor: "text-white/40 border-white/5 bg-white/5" }
                  ].map((lead, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-colors">
                      <div>
                        <div className="font-bold text-sm text-white">{lead.name}</div>
                        <div className="text-[10px] text-white/40">{lead.source} • {lead.price}</div>
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${lead.statusColor}`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Response Speed Analyzer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="aspect-[4/5] bg-white/5 border border-white/10 p-0 overflow-hidden relative group rounded-3xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Latency Metrics</div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Instant Response Index</h3>
                  <p className="text-white/45 text-xs">Unmatched speed comparison against standard averages.</p>
                </div>
                
                {/* Visual speedometer circle mockup */}
                <div className="relative w-36 h-36 mx-auto flex items-center justify-center my-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#C88D5F" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" fill="transparent" className="drop-shadow-[0_0_8px_rgba(200,141,95,0.5)]" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-black text-white tracking-tight">34s</span>
                    <span className="text-[9px] font-black uppercase text-accent tracking-widest">Avg Speed</span>
                  </div>
                </div>
                
                {/* Horizontal comparison bar chart */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase">
                      <span>Industry Standard</span>
                      <span>42 minutes</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-accent uppercase">
                      <span>Relay Estate</span>
                      <span>34 seconds</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[8%] bg-accent rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: AI Qualification Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="aspect-[4/5] bg-white/5 border border-white/10 p-0 overflow-hidden relative group rounded-3xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30">AI Conversational Logs</div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automated Qualification</h3>
                  <p className="text-white/45 text-xs">Conversations mapped and tagged dynamically in real time.</p>
                </div>
                
                {/* Chat bubbles */}
                <div className="space-y-3 flex-1 flex flex-col justify-center text-xs">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-none bg-white/[0.04] border border-white/5 text-white/80 max-w-[85%]">
                      Hi Clark, noticed your request for 100 Main St. Are you looking to buy or sell?
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 items-start justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-accent/10 border border-accent/15 text-white max-w-[85%] text-right">
                      Looking to buy. Need to move within 30 days!
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <User className="w-3.5 h-3.5 text-white/60" />
                    </div>
                  </div>
                </div>

                {/* Tags output */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  <span className="text-[9px] font-black uppercase bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-full">
                    Buyer Intent
                  </span>
                  <span className="text-[9px] font-black uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-full">
                    Urgent (30 Days)
                  </span>
                  <span className="text-[9px] font-black uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-1 rounded-full">
                    Pre-Qualified
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
