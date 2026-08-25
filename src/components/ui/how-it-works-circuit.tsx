"use client";

import React, { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

const Chip = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    {[4, 9, 14, 19].map((x) => (
      <line key={`t${x}`} x1={x} y1="2" x2={x} y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ))}
    {[4, 9, 14, 19].map((x) => (
      <line key={`b${x}`} x1={x} y1="18" x2={x} y2="22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ))}
  </svg>
);

export interface CircuitStep {
  title: string;
  description: string;
}

export interface HowItWorksCircuitProps {
  steps?: CircuitStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_STEPS: CircuitStep[] = [
  { title: "Online Application", description: "Fill out the admission form or visit campus office." },
  { title: "Campus Interaction", description: "Meet faculty and tour our state-of-the-art facilities." },
  { title: "Document Check", description: "Submit birth certificate, TC, and previous marksheets." },
  { title: "Seat Confirmation", description: "Receive official confirmation and welcome package." },
  { title: "Begin Learning", description: "Attend student orientation and start your academic journey." },
];

const BOARD_BG = "#001f1f";
const TRACE = "#10b981";
const TRACE_DIM = "rgba(16, 185, 129, 0.25)";
const PULSE = "#cdface";

function ChipCard({ step, index, up }: { step: CircuitStep; index: number; up: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="relative flex flex-col items-center shrink-0" style={{ minWidth: 140 }}>
      {/* stub trace from backbone to chip */}
      <svg width="2" height="34" className={up ? "order-1 mb-0" : "order-3 mt-0"}>
        <m.line
          x1="1" y1={up ? 34 : 0} x2="1" y2={up ? 0 : 34}
          stroke={TRACE} strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: index * 0.12 }}
        />
      </svg>

      <m.div
        initial={{ opacity: 0, scale: 0.85, y: up ? 8 : -8 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.15, ease: "easeOut" }}
        className={`w-[136px] ${up ? "order-2" : "order-2"}`}
      >
        <div
          className="rounded-xl border p-3 text-center shadow-lg transition-all hover:scale-105"
          style={{ backgroundColor: "#062b2b", borderColor: "rgba(16, 185, 129, 0.4)" }}
        >
          <Chip className="w-4 h-4 mx-auto mb-1" style={{ color: PULSE }} />
          <span className="text-[10px] font-bold tracking-widest" style={{ color: PULSE }}>
            0{index + 1}
          </span>
          <h3 className="text-xs font-bold text-white mt-1 leading-snug">{step.title}</h3>
          <p className="text-slate-300 text-[10px] mt-1 leading-relaxed font-normal">{step.description}</p>
        </div>
      </m.div>
    </div>
  );
}

export default function HowItWorksCircuit({
  steps,
  title = "How Admissions Work",
  subtitle = "One signal, five stops along the admission circuit.",
  className
}: HowItWorksCircuitProps) {
  const data = steps && steps.length > 0 ? steps : DEFAULT_STEPS;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <LazyMotion features={domAnimation}>
      <section className={`py-12 px-6 relative overflow-hidden ${className || ""}`} style={{ backgroundColor: BOARD_BG }}>
        {/* PCB texture dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{ backgroundImage: `radial-gradient(${TRACE_DIM} 1.5px, transparent 1.5px)`, backgroundSize: "20px 20px" }}
        />

        <div className="max-w-xl mx-auto text-center mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-[#cdface]/80">
            {subtitle}
          </p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-thin z-10">
          <div className="relative flex justify-start lg:justify-center gap-6 px-4" style={{ minWidth: data.length * 156 }}>
            {/* backbone trace */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2.5px]" style={{ backgroundColor: TRACE_DIM }} />

            {/* traveling pulse */}
            {isInView && (
              <m.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-20"
                style={{ backgroundColor: PULSE, boxShadow: `0 0 12px 4px ${PULSE}` }}
                initial={{ left: "0%" }}
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            <div className="relative flex justify-between w-full z-10 gap-4">
              {data.map((step, index) => (
                <ChipCard key={step.title} step={step} index={index} up={index % 2 === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
