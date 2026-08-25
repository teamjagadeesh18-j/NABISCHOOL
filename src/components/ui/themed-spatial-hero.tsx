'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import OrbitBorderButton from '@/components/ui/orbit-border-button';

export function AnnouncementBar() {
  return (
    <div className="bg-[#004d40] text-white py-2 px-4 text-xs font-medium font-body relative text-center">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-white/90" />
        <span>✨ Admissions Open for New Academic Session • Nabi Crescent Matriculation School</span>
      </div>
    </div>
  );
}

export function SpatialHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f6f2]/90 backdrop-blur-md border-b border-[#dce3e3] font-body">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between text-sm text-[#001f1f]">
        <a href="/" className="hover:opacity-90 transition-opacity"><div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#004d40] text-white flex items-center justify-center font-bold font-heading shadow-sm">
            N
          </div>
          <div>
            <span className="font-bold text-base text-[#001f1f] font-heading tracking-tight block">
              Nabi Crescent Matriculation School
            </span>
            <span className="text-[11px] text-[#5c7070] block -mt-1 font-medium">Matriculation Campus</span>
          </div>
        </div></a>

        <nav className="hidden md:flex items-center gap-6 font-medium text-xs lg:text-sm">
          <a href="/about" className="whitespace-nowrap hover:text-[#004d40] transition-colors">About Us</a>
          <a href="/academics" className="whitespace-nowrap hover:text-[#004d40] transition-colors">Programs</a>
          <a href="/facilities" className="whitespace-nowrap hover:text-[#004d40] transition-colors">Environment</a>
          <a href="/gallery" className="whitespace-nowrap hover:text-[#004d40] transition-colors">Activities</a>
          <a href="/#testimonials" className="whitespace-nowrap hover:text-[#004d40] transition-colors">Experiences</a>
          <a href="/contact" className="whitespace-nowrap hover:text-[#004d40] transition-colors">Contact Desk</a>
        </nav>

        <div className="flex items-center gap-3">
          <OrbitBorderButton
            label="Apply Now"
            link="/apply"
            padding="8px 20px 8px 20px"
            colors={{ fill: "#004d40", textColor: "#ffffff" }}
            stroke={{ color: "#00bfa5", size: 30, speed: 50 }}
          />
        </div>
      </div>
    </header>
  );
}

export function LogoStripCard() {
  const logos = [
    { name: "State Board Approved", badge: "Tamil Nadu Board" },
    { name: "STEM Learning Initiative", badge: "Practical Science" },
    { name: "Digital Learning Portal", badge: "Smart Classrooms" },
    { name: "Sports & Fitness Hub", badge: "Athletics First" },
    { name: "Student Project Hub", badge: "Hands-on Learning" },
    { name: "Excellence Awards", badge: "Rank Holders" },
  ];

  return (
    <section className="bg-[#ffffff] py-10 border-b border-[#dce3e3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="p-4 rounded-[14px] border border-[#dce3e3] bg-[#f7f6f2] text-center shadow-sm">
              <p className="font-bold text-xs text-[#001f1f] font-heading">{logo.name}</p>
              <p className="text-[11px] text-[#004d40] font-medium font-body mt-1">{logo.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpatialFeatureSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f7f6f2]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-[14px] bg-[#cdface] text-[#001f1f] border border-[#dce3e3] text-xs font-semibold tracking-wide uppercase font-body mb-4">
            DISCIPLINED LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#001f1f] tracking-tight leading-[1.3] font-heading mb-4">
            Why Parents Choose Nabi Crescent Matriculation School
          </h2>
          <p className="text-base sm:text-lg text-[#5c7070] leading-[1.56] font-body">
            Delivering structured, values-based Matriculation education with dedicated teachers, safe campus facilities, and clear academic guidance for every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-[14px] border border-[#dce3e3] bg-[#ffffff] text-[#004d40] text-sm font-semibold font-body shadow-sm">
              Core Foundations
            </span>
            <h3 className="text-2xl lg:text-[32px] font-semibold text-[#001f1f] leading-[1.3] font-heading">
              Structured Routines & Individual Attention
            </h3>

            <div className="space-y-4 font-body pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#001f1f]">Structured Daily Routines</h4>
                  <p className="text-sm text-[#5c7070] leading-relaxed">Building clear study habits, focus, and self-discipline for young minds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#001f1f]">Matriculation Board Rigor</h4>
                  <p className="text-sm text-[#5c7070] leading-relaxed">Comprehensive State Board curriculum fostering core subject clarity in Science and Math.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#001f1f]">Holistic Co-Curricular Wellbeing</h4>
                  <p className="text-sm text-[#5c7070] leading-relaxed">Nurturing physical health, outdoor games, teamwork, and confidence.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#dce3e3]">
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">100%</p>
                <p className="text-xs lg:text-[14px] text-[#5c7070] font-body">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">25+ Yrs</p>
                <p className="text-xs lg:text-[14px] text-[#5c7070] font-body">Trust History</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">1:15</p>
                <p className="text-xs lg:text-[14px] text-[#5c7070] font-body">Teacher Ratio</p>
              </div>
            </div>
          </div>

          <div className="rounded-[14px] bg-[#ffffff] border border-[#dce3e3] overflow-hidden shadow-lg p-3">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
              alt="Classroom Learning at Nabi Crescent Matriculation School" 
              className="w-full h-[360px] object-cover rounded-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
