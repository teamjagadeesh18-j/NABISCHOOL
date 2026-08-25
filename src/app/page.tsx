"use client";

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import MarqueeHeroRibbon from "@/components/ui/marquee-hero-ribbon";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";
import { GraduationCap, BookOpen, PenTool, Globe, Bus } from "lucide-react";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import HowItWorksCircuit from "@/components/ui/how-it-works-circuit";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Over 30 years of community trust at Nabi Crescent Matriculation School, Avadi",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "Serving Avadi since 1991, Nabi Crescent has maintained top-tier discipline and moral character for over three decades.",
          "authorName": "Syed Ibrahim",
          "authorTitle": "Parent of Class 10 Student"
        },
        {
          "id": "t2",
          "quote": "Primary teachers show great care and patience. My child learned reading fluency and discipline right from LKG stage.",
          "authorName": "S. Prema",
          "authorTitle": "Primary School Parent"
        },
        {
          "id": "t3",
          "quote": "Passing out from Nabi Crescent in 2015 gave me the discipline and integrity that defines my career today.",
          "authorName": "Mohamed Farooq",
          "authorTitle": "Alumnus (Batch 2015)"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "Strong focus on ethics, character building, and academic clarity. The principal maintains high standards on campus.",
          "authorName": "Ayesha Begum",
          "authorTitle": "Parent Association Member"
        },
        {
          "id": "t5",
          "quote": "The State Board examination results are consistently strong every year. Teachers provide individual attention to weak subjects.",
          "authorName": "K. Vetrivel",
          "authorTitle": "High School Parent"
        },
        {
          "id": "t6",
          "quote": "Safe, secure campus in Avadi with friendly staff. Parents feel respected and valued at every meeting.",
          "authorName": "Fatima Zohra",
          "authorTitle": "Parent of Class 4 Student"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "30+ years of educational excellence in Avadi. I studied here and now my children are studying in the same classrooms!",
          "authorName": "Abdul Rahman",
          "authorTitle": "Alumnus & Business Owner"
        },
        {
          "id": "t8",
          "quote": "Clear academic schedule, structured homework, and regular assessments keep children focused throughout the term.",
          "authorName": "V. Anitha",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "A school rooted in integrity and disciplined learning. Highly recommended for families seeking quality education.",
          "authorName": "Tariq Ahmed",
          "authorTitle": "Parent of Class 7 Student"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#5c7070] antialiased selection:bg-[#001f1f] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* School Specific Animated Hero Section */}
      <FloatingIconsHero
        title="Rooted in Discipline, Growing in Excellence"
        subtitle="Providing safe, supportive, and academically rich environments where students discover their full potential."
        ctaText="Apply Now"
        ctaHref="#connect"
        icons={[
          { id: 1, icon: GraduationCap, className: "top-16 left-12" },
          { id: 2, icon: BookOpen, className: "top-24 right-16" },
          { id: 3, icon: PenTool, className: "bottom-20 left-20" },
          { id: 4, icon: Globe, className: "top-1/3 right-1/4" },
          { id: 5, icon: Bus, className: "bottom-16 right-20" },
        ]}
      />
      {/* Student Achievement Strip Card */}
                              
      <LogoStripCard />
      {/* Hero Sub-Marquee Campus Life Reel */}
      <MarqueeHeroRibbon />
      

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* How it Works Circuit Section */}
      <HowItWorksCircuit
        title="How Admissions Work"
        subtitle="One signal, five stops along the admission circuit."
      />

      {/* Academic Structure Section */}
      <AcademicStructure
        secondaryColor="#001f1f"
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Years",
            description: "A gentle, play-integrated foundational curriculum focusing on language, numbers, sensory development, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Foundation Stage",
            description: "Building fundamental skills in Mathematics, Science, Languages, and Environmental Studies through engaging, activity-based lessons.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School Exploration",
            description: "Strengthening analytical thinking, practical lab work, digital literacy, and collaborative problem-solving across core subjects.",
            buttonText: "Middle School Details",
          },
          {
            tag: "Classes 9 & 10",
            title: "High School Board Preparation",
            description: "Comprehensive State Board exam preparation supported by expert faculty, mock tests, personalized feedback, and concept clarity.",
            buttonText: "Board Preparation",
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary Streams",
            description: "Specialized Science, Computer Science, and Commerce streams preparing students for entrance exams, degree admissions, and future careers.",
            buttonText: "Explore Hr. Sec. Streams",
            isHighlighted: true,
          },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      <section id="testimonials" className="py-16 bg-[#f7f6f2] border-t border-[#dce3e3]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <InfiniteRibbon duration={35} className="bg-white text-[#001f1f] border-y border-[#dce3e3] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#004d40]">✦</span> Academic Excellence
        <span className="text-[#004d40]">✦</span> State Board Rigor
        <span className="text-[#004d40]">✦</span> Dedicated Faculty
        <span className="text-[#004d40]">✦</span> Holistic Student Development
        <span className="text-[#004d40]">✦</span> Safe & Caring Campus
        <span className="text-[#004d40]">✦</span> Admissions Open
      </InfiniteRibbon>
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
      </main>
  );
}