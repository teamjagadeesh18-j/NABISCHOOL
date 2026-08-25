'use client';
import { TextEffect } from '@/components/core/text-effect';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X, ChevronRight } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] font-body">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 text-sm text-[#181c31]">
        <a href="/" className="hover:opacity-90 transition-opacity min-w-0 shrink">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#001f1f] text-white flex items-center justify-center font-bold font-heading shadow-sm shrink-0">
              N
            </div>
            <div className="min-w-0">
              <span className="sm:hidden font-bold text-sm text-[#181c31] font-heading tracking-tight block whitespace-nowrap">
                Nabi Crescent Matric School
              </span>
              <span className="hidden sm:block font-bold text-base text-[#181c31] font-heading tracking-tight whitespace-nowrap">
                Nabi Crescent Matriculation School
              </span>
              <span className="text-[11px] text-[#757693] block -mt-0.5 font-medium whitespace-nowrap">
                Matriculation Campus
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-xs lg:text-sm">
          <a href="/about" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">About Us</a>
          <a href="/academics" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">Programs</a>
          <a href="/facilities" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">Amenities</a>
          <a href="/gallery" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">Campus Life</a>
          <a href="/#testimonials" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">Parent Voices</a>
          <a href="/contact" className="whitespace-nowrap hover:text-[#001f1f] transition-colors">Enquire</a>
        </nav>

        {/* Desktop CTA & Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block">
            <OrbitBorderButton
              label="Apply Now"
              link="/apply"
              padding="7px 16px 7px 16px"
              colors={{ fill: "#001f1f", textColor: "#ffffff" }}
              stroke={{ color: "#7a8aff", size: 30, speed: 50 }}
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#181c31] hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#001f1f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#181c31]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Navigation Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e7eb] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-sm text-[#181c31] font-body">
            <a 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="/academics" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>Academic Programs</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="/facilities" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>Campus Amenities</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>Campus Life & Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="/#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>Parent Voices</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 hover:text-[#001f1f] transition-colors flex items-center justify-between"
            >
              <span>Enquire & Location</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            
            <div className="pt-3 border-t border-slate-200">
              <a 
                href="/apply" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3 bg-[#001f1f] text-white text-center rounded-xl font-semibold shadow-md hover:opacity-95 transition-all"
              >
                Apply for Admission 2026-27
              </a>
            </div>
          </nav>
        </div>
      )}
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
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="font-bold text-xs text-[#001f1f] font-heading">{logo.name}</TextEffect>
              <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[11px] text-[#004d40] font-medium font-body mt-1">{logo.badge}</TextEffect>
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
          <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#001f1f] tracking-tight leading-[1.3] font-heading mb-4">
            Why Parents Choose Nabi Crescent Matriculation School
          </TextEffect>
          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base sm:text-lg text-[#5c7070] leading-[1.56] font-body">
            Delivering structured, values-based Matriculation education with dedicated teachers, safe campus facilities, and clear academic guidance for every student.
          </TextEffect>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-[14px] border border-[#dce3e3] bg-[#ffffff] text-[#004d40] text-sm font-semibold font-body shadow-sm">
              Core Foundations
            </span>
            <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl lg:text-[32px] font-semibold text-[#001f1f] leading-[1.3] font-heading">
              Structured Routines & Individual Attention
            </TextEffect>

            <div className="space-y-4 font-body pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-semibold text-[#001f1f]">Structured Daily Routines</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#5c7070] leading-relaxed">Building clear study habits, focus, and self-discipline for young minds.</TextEffect>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-semibold text-[#001f1f]">Matriculation Board Rigor</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#5c7070] leading-relaxed">Comprehensive State Board curriculum fostering core subject clarity in Science and Math.</TextEffect>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#004d40] shrink-0 mt-2"></span>
                <div>
                  <TextEffect as="h4" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base font-semibold text-[#001f1f]">Holistic Co-Curricular Wellbeing</TextEffect>
                  <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-sm text-[#5c7070] leading-relaxed">Nurturing physical health, outdoor games, teamwork, and confidence.</TextEffect>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#dce3e3]">
              <div>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">100%</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs lg:text-[14px] text-[#5c7070] font-body">Pass Rate</TextEffect>
              </div>
              <div>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">25+ Yrs</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs lg:text-[14px] text-[#5c7070] font-body">Trust History</TextEffect>
              </div>
              <div>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl lg:text-[24px] font-bold text-[#001f1f] font-heading">1:15</TextEffect>
                <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-xs lg:text-[14px] text-[#5c7070] font-body">Teacher Ratio</TextEffect>
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
