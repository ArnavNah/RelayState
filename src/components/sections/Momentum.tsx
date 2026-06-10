"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Inbox, Clock, AlertCircle } from "lucide-react";

const steps = [
  {
    label: "INQUIRY INTAKE",
    title: "The lead arrives, but the response window is short.",
    desc: "A website form, portal lead, missed call, or referral handoff creates intent. If the first response is slow, momentum starts fading immediately.",
    cardTitle: "Lead sources stack up fast",
    cardItems: [
      "Website forms arrive without instant acknowledgment",
      "Portal leads compete with other active tasks",
      "Missed calls rarely get a structured text-back"
    ],
    icon: Inbox,
    side: "left",
  },
  {
    label: "RESPONSE DELAY",
    title: "The gap where most leads are lost to competitors.",
    desc: "While your team is busy in showings or meetings, the inquiry is cooling down. Speed to lead is the single biggest factor in conversion.",
    cardTitle: "Friction in the first 5 minutes",
    cardItems: [
      "Manual outreach takes 15-30 minutes on average",
      "Leads reach out to 3+ agents simultaneously",
      "Non-responsive windows create poor first impressions"
    ],
    icon: Clock,
    side: "right",
  },
  {
    label: "FRAGMENTED FOLLOW-UP",
    title: "Context is dropped during the handoff.",
    desc: "When leads aren't qualified and routed instantly, data gets lost. CRM updates become an afterthought, and continuity is broken.",
    cardTitle: "Pipeline leakage becomes invisible",
    cardItems: [
      "Leads are forgotten without active reminders",
      "Qualification data isn't captured at the source",
      "Routing logic is inconsistent and slow"
    ],
    icon: AlertCircle,
    side: "left",
  },
];

export const Momentum = () => {
  return (
    <section className="py-48 bg-surface-container text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-5xl mx-auto mb-40">
          <h2 className="text-5xl md:text-[7.5rem] font-black mb-12 leading-[0.85] tracking-tighter">
            Where real estate teams lose momentum after the lead comes in.
          </h2>
          <p className="text-white/40 text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
            Most teams already have leads coming from websites, portals, referrals, and calls. The real problem is what happens in the minutes and hours after that first inquiry.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-64">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-16 md:gap-32 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}>
                
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                      {step.label}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter mb-8">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center z-10 shadow-sm relative">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    <div className="absolute inset-[-8px] rounded-full border border-white/5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: step.side === "left" ? 50 : -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Card className="p-10 md:p-16 bg-white/5 border border-white/10 shadow-2xl rounded-[3rem]">
                      <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-white/30" />
                        </div>
                        <h4 className="text-2xl font-black tracking-tight">{step.cardTitle}</h4>
                      </div>
                      <ul className="space-y-5">
                        {step.cardItems.map((item, j) => (
                          <li key={j} className="text-white/40 flex gap-4 text-sm font-medium leading-relaxed">
                            <span className="text-accent font-black text-lg leading-none">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
