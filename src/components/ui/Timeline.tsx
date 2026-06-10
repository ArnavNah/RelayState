"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/10 group-last:bg-transparent" />
      
      {/* Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-copper-500 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-copper-500" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
};

export const Timeline: React.FC<{ items: { title: string; description: string }[] }> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
