"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Check, Clock, Zap, Target, Share2 } from "lucide-react";

const orchestrations = [
  {
    category: "INQUIRY INTAKE",
    status: "New inquiry",
    time: "08:42",
    title: "Website buyer lead captured",
    desc: "Downtown Montreal - 3-bed - ready within 60 days",
    color: "bg-accent/20 border-accent/30 text-white shadow-[0_0_30px_rgba(200,141,95,0.15)]",
  },
  {
    category: "RESPONSE LAYER",
    status: "Instant text",
    time: "08:43",
    title: "First-touch reply sent automatically",
    desc: "Introduces next step and opens qualification flow",
    color: "bg-white/5 border-white/10",
  },
  {
    category: "QUALIFICATION",
    status: "Intent tagged",
    time: "08:45",
    title: "Timeline, urgency, and fit captured",
    desc: "Buyer intent confirmed with budget and neighborhood match",
    color: "bg-white/5 border-white/10",
  },
  {
    category: "ROUTING + CONTINUITY",
    status: "Next step booked",
    time: "08:47",
    title: "Lead routed, meeting booked, CRM synced",
    desc: "Assigned to the right agent with summary, tags, and task creation",
    color: "bg-white/5 border-white/10",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-48 bg-surface text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
          <h2 className="text-5xl md:text-[7.5rem] font-black max-w-5xl leading-[0.85] tracking-tighter">
            Four systems that keep every inquiry moving.
          </h2>
          <div className="max-w-md pt-6">
            <p className="text-white/30 text-xl font-medium leading-relaxed">
              RelayEstate automates the response, qualification, and routing into a structured workflow so your team can move faster without losing context.
            </p>
          </div>
        </div>

        {/* Orchestration Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[4rem] p-6 md:p-20 overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10 pb-16 border-b border-white/5">
            <h3 className="text-4xl font-black tracking-tight">Lead orchestration layer</h3>
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <div className="w-5 h-5 rounded-lg border border-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                Instant reply
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <div className="w-5 h-5 rounded-lg border border-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                Qualified + tagged
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <Clock className="w-5 h-5" />
                Response target: under 60s
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orchestrations.map((item, i) => (
              <div key={i} className="space-y-8">
                <div className="text-[10px] font-black tracking-[0.3em] text-white/10 uppercase px-6">
                  {item.category}
                </div>
                <Card className={`p-10 ${item.color} rounded-[2.5rem] h-full flex flex-col justify-between group hover:scale-[1.03] transition-all duration-700`}>
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{item.status}</span>
                      <span className="text-[10px] font-black opacity-40">{item.time}</span>
                    </div>
                    <h4 className="text-2xl font-black mb-6 leading-tight tracking-tight">{item.title}</h4>
                    <p className="text-xs font-medium opacity-30 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-40">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h5 className="text-3xl font-black tracking-tight">Latency reduction</h5>
            <p className="text-white/30 text-base font-medium leading-relaxed">
              We eliminate the gap between lead arrival and initial contact, ensuring your team is always first to the conversation.
            </p>
          </div>
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h5 className="text-3xl font-black tracking-tight">High intent capture</h5>
            <p className="text-white/30 text-base font-medium leading-relaxed">
              Automated qualification flows capture urgency and fit before an agent even picks up the phone.
            </p>
          </div>
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center">
              <Share2 className="w-8 h-8 text-accent" />
            </div>
            <h5 className="text-3xl font-black tracking-tight">Seamless routing</h5>
            <p className="text-white/30 text-base font-medium leading-relaxed">
              Leads are pushed into your CRM with full context, tags, and assigned tasks based on your custom logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
