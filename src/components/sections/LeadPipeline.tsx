"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../ui/Timeline";

const pipelineSteps = [
  {
    title: "Lead Acquisition",
    description: "Multi-channel intake from Zillow, Realtor.com, and social campaigns.",
  },
  {
    title: "Automated Verification",
    description: "AI-driven scoring and data enrichment for every inbound lead.",
  },
  {
    title: "Smart Distribution",
    description: "Routing to the top-performing agent based on territory and specialization.",
  },
  {
    title: "Engagement Loop",
    description: "Automated SMS and email nurturing until the first human touch.",
  },
];

export const LeadPipeline = () => {
  return (
    <section id="pipeline" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
          >
            THE PERFECT <br />
            <span className="text-accent">LEAD JOURNEY</span>
          </motion.h2>
          <p className="text-white/60 text-lg mb-12 max-w-lg">
            Standardize your sales process and ensure no lead ever falls through the cracks with our automated pipeline.
          </p>
          <Timeline items={pipelineSteps} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
          <img
            src="/pipeline_visualization.png"
            alt="Pipeline Visualization"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
