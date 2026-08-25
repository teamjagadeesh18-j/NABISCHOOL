"use client";
import { TextEffect } from '@/components/core/text-effect';
import React, { useState } from "react";

export default function CssImageStacking() {
  const items = [
    { title: "Disciplined Classroom Learning", tag: "30+ YEARS LEGACY", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop", text: "Character building, structured homework, and State Board academic excellence in Avadi." },
    { title: "Sports & Athletics Training", tag: "PHYSICAL FITNESS", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop", text: "Fostering team spirit, stamina, and outdoor health on spacious grounds." },
    { title: "Stage Performances & Cultural Fests", tag: "EXPRESSION", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop", text: "Building public speaking confidence and creative artistic expression." },
    { title: "Science & Technology Experiments", tag: "PRACTICAL LABS", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop", text: "Well-equipped physics, chemistry, and computer science facilities." },
    { title: "Knowledge Center & Library", tag: "RESEARCH", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop", text: "Extensive library collection nurturing independent reading habits." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#f4fbf7] py-24 px-6 border-t border-emerald-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 font-body">
          AVADI CAMPUS FOCAL SHOWCASE
        </span>
        <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-5xl font-extrabold text-[#064e3b] mt-4 font-heading leading-tight">
          Explore Campus Life at Nabi Crescent
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-emerald-800/80 text-base sm:text-lg mt-3 font-body">
          Click through our interactive campus spotlight stages.
        </TextEffect>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Selector List */}
        <div className="lg:col-span-5 space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 backdrop-blur-md ${active === idx ? "bg-white text-[#064e3b] shadow-[0_10px_30px_rgba(6,95,70,0.12)] border border-emerald-400 translate-x-2" : "bg-white/50 text-emerald-800/80 hover:bg-white/80 border border-transparent"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 font-body">
                  0{idx + 1}. {item.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1} / 0{items.length}</span>
              </div>
              <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-lg font-bold text-[#064e3b] font-heading mt-1">{item.title}</TextEffect>
              {active === idx && (
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs text-emerald-800/80 font-body mt-2 leading-relaxed">
                  {item.text}
                </TextEffect>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Stage Image */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(6,95,70,0.14)] group">
            <img
              src={items[active].src}
              alt={items[active].title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#064e3b] text-xs font-bold px-4 py-1.5 rounded-full shadow-md font-body">
              📍 {items[active].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
