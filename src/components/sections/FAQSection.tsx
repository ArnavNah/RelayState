"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap } from "lucide-react";
import { Card } from "../ui/Card";

const faqItems = [
  {
    question: "Does RelayEstate replace our CRM?",
    answer: "No. RelayEstate is built to strengthen the response and routing layer around your existing system. It helps capture context earlier, trigger the right next step faster, and keep lead continuity cleaner before and during the CRM handoff.",
  },
  {
    question: "Can it handle after-hours or weekend inquiries?",
    answer: "Yes. RelayEstate stays active 24/7. When a lead comes in on a Saturday evening or at 3 AM, the system instantly engages, qualifies, and schedules the next step, ensuring you never lose momentum due to agent availability.",
  },
  {
    question: "How custom can the routing and qualification logic be?",
    answer: "Extremely. You can route leads based on territory, price point, source, or agent performance. Qualification questions can be tailored to match your team's specific script and required data points.",
  },
  {
    question: "How long does deployment take?",
    answer: "Standard deployment takes less than 48 hours. We work with your team to map your existing lead flow and then plug RelayEstate in to automate the heavy lifting without disrupting your current operations.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-48 bg-surface text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-5xl mx-auto mb-40">
          <h2 className="text-5xl md:text-[7.5rem] font-black mb-12 leading-[0.85] tracking-tighter">
            What teams usually ask before they tighten the workflow.
          </h2>
          <p className="text-white/30 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            RelayEstate is designed to fit into the response, routing, and follow-up systems you already use, while removing the gaps that cause lead momentum to fade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Side Card */}
          <div className="lg:col-span-5">
            <Card className="p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-[4rem] space-y-12 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Common Objections</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter">
                Built to reduce friction, not add another layer of it.
              </h3>
              <p className="text-white/30 text-xl font-medium leading-relaxed">
                Most teams are not missing leads because they lack tools. They lose momentum because response, qualification, routing, and handoff do not stay connected.
              </p>
              <div className="pt-12 border-t border-white/5 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <p className="text-base text-white/50 leading-relaxed italic font-medium">
                  Designed to work alongside your CRM, calendars, and lead sources.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Side Accordion */}
          <div className="lg:col-span-7 space-y-6">
            {faqItems.map((item, i) => (
              <div 
                key={i} 
                className={`group rounded-[3rem] border transition-all duration-700 overflow-hidden ${
                  openIndex === i ? "bg-white/[0.03] border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-10 py-10 flex justify-between items-center text-left"
                >
                  <span className="text-2xl font-black tracking-tight">{item.question}</span>
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === i ? "rotate-180 bg-white/5" : ""}`}>
                    {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-10 pb-12 text-white/30 leading-relaxed text-xl font-medium max-w-2xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
