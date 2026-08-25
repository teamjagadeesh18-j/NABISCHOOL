"use client";

import React from "react";

export interface AcademicCard {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  isHighlighted?: boolean;
}

export interface AcademicStructureProps {
  title: string;
  subtitle: string;
  description: string;
  cards: AcademicCard[];
  secondaryColor?: string;
}

export default function AcademicStructure({
  title,
  subtitle,
  description,
  cards,
}: AcademicStructureProps) {
  return (
    <section id="academics" className="py-20 md:py-24 px-4 sm:px-6 bg-[#f7f6f2] border-t border-[#dce3e3] font-body">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-3.5 py-1 rounded-[14px] bg-[#cdface] text-[#001f1f] border border-[#dce3e3] text-xs font-semibold tracking-wider uppercase font-body">
            ACADEMIC STRUCTURE
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#001f1f] tracking-tight leading-[1.3] font-heading mb-3">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-lg md:text-xl font-semibold text-[#001f1f] font-body mb-3">
              {subtitle}
            </h3>
          )}
          <p className="text-[#5c7070] text-base md:text-lg leading-[1.56] font-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {cards.map((card, index) => {
            const isHighlightedCard = card.isHighlighted || index === 4;

            if (isHighlightedCard) {
              return (
                <div
                  key={index}
                  className="rounded-[14px] p-6 flex flex-col justify-between text-white shadow-xl bg-[#004d40] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase mb-3 block text-white/90">
                      {card.tag}
                    </span>
                    <h4 className="text-xl font-bold text-white font-heading mb-3 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-6 font-body">
                      {card.description}
                    </p>
                  </div>
                  <a
                    href="#connect"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-200 font-body mt-auto px-4 py-2.5 rounded-[29px] bg-white text-[#004d40] shadow-sm hover:bg-slate-50"
                  >
                    <span>{card.buttonText}</span>
                    <span className="text-sm transition-transform duration-200">
                      &gt;
                    </span>
                  </a>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-[#ffffff] border border-[#dce3e3] rounded-[14px] p-6 flex flex-col justify-between text-[#001f1f] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <span className="inline-block text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-3 px-2.5 py-0.5 rounded-[14px] bg-[#cdface] text-[#001f1f]">
                    {card.tag}
                  </span>
                  <h4 className="text-xl font-bold text-[#001f1f] font-heading mb-3 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-[#5c7070] text-xs md:text-sm leading-relaxed mb-6 font-body">
                    {card.description}
                  </p>
                </div>
                <a
                  href="#connect"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#004d40] hover:opacity-80 transition-colors font-body mt-auto"
                >
                  <span>{card.buttonText}</span>
                  <span className="text-sm transition-transform duration-200">
                    &gt;
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}