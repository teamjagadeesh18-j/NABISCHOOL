"use client";
import React from "react";

export default function MarqueeHeroRibbon() {
  const row1 = [
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop", tag: "Classroom Excellence" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop", tag: "Sports & Athletics" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop", tag: "Cultural Events" },
  ];
  const row2 = [
    { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop", tag: "Science Laboratory" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop", tag: "Campus Library" },
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop", tag: "Green School Grounds" },
  ];

  return (
    <div className="w-full bg-[#f4fbf7] py-10 border-y border-emerald-200 overflow-hidden my-6">
      <div className="text-center mb-6 px-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 font-body">
          📍 CAMPUS LIFE REEL
        </span>
      </div>

      <div className="space-y-4">
        {/* Row 1: Left Motion */}
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-5 animate-scroll-horizontal w-max">
            {[...row1, ...row1, ...row1].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 sm:w-80 group">
                <img
                  src={img.src}
                  alt={img.tag}
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <span className="block mt-2 text-center text-[11px] font-bold text-[#064e3b] uppercase tracking-widest font-body">
                  ✦ {img.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Motion */}
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-5 animate-scroll-horizontal-reverse w-max">
            {[...row2, ...row2, ...row2].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 sm:w-80 group">
                <img
                  src={img.src}
                  alt={img.tag}
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <span className="block mt-2 text-center text-[11px] font-bold text-[#064e3b] uppercase tracking-widest font-body">
                  ✦ {img.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
