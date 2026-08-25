"use client";
import React from "react";

export default function SchoolMessageSection() {
  const config = {
    "themeBg": "bg-[#f4fbf7]",
    "border": "border-emerald-200",
    "badgeBg": "bg-emerald-100",
    "badgeText": "text-emerald-900",
    "badgeBorder": "border-emerald-300",
    "primaryText": "text-[#064e3b]",
    "accentGold": "text-emerald-700",
    "cardBg": "bg-white",
    "cardShadow": "shadow-[0_20px_50px_rgba(6,95,70,0.08)]",
    "leaderName": "School Management & Leadership",
    "leaderRole": "Managing Trustee & Correspondent",
    "motto": "Celebrating over 30 years of disciplined education, ethical values, and holistic growth in Avadi.",
    "salutation": "DEAR PARENTS & NOBLE STUDENTS",
    "heading": "30+ Years of Unshakable Academic Honor",
    "paragraph1": "For over three decades, Nabi Crescent Matriculation School has stood as Avadi's premier hall of learning. We nurture character, academic brilliance, and moral discipline in every young heart.",
    "paragraph2": "Your partnership with Nabi Crescent ensures that your child is equipped with knowledge, humility, and the confidence to achieve lifelong success.",
    "stats": [
        {
            "value": "100%",
            "label": "30-Year Pass Record"
        },
        {
            "value": "30+",
            "label": "Years of Educational Legacy"
        },
        {
            "value": "4000+",
            "label": "Successful Alumni"
        }
    ]
};

  return (
    <section className={`w-full ${config.themeBg} py-20 px-6 ${config.border} border-t border-b`}>
      <div className="max-w-6xl mx-auto">
        <div className={`${config.cardBg} ${config.cardShadow} rounded-3xl p-8 sm:p-12 border ${config.border} relative overflow-hidden`}>
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} font-body`}>
              {config.salutation}
            </span>
            <span className={`text-xs font-bold tracking-widest uppercase ${config.accentGold} font-body`}>
              LEADERSHIP DIRECTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${config.primaryText} font-heading leading-tight`}>
                {config.heading}
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg font-body leading-relaxed">
                "{config.paragraph1}"
              </p>

              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                "{config.paragraph2}"
              </p>

              {/* Leadership Signature Badge */}
              <div className="pt-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${config.badgeBg} flex items-center justify-center font-bold font-heading text-lg ${config.badgeText}`}>
                  ✦
                </div>
                <div>
                  <h4 className={`text-base font-bold ${config.primaryText} font-heading`}>
                    Principal & Management Desk
                  </h4>
                  <p className="text-xs text-slate-500 font-body">
                    {config.leaderRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-100">
              <span className={`text-xs font-bold uppercase tracking-widest ${config.accentGold} font-body`}>
                INSTITUTION HIGHLIGHTS
              </span>
              <div className="space-y-5">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${config.primaryText} font-heading block`}>
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
