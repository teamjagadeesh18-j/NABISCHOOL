"use client";

import { TextEffect } from '@/components/core/text-effect';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is the primary focus of Nabi Crescent Matriculation School?',
      answer: 'Nabi Crescent Matriculation School focuses on academic excellence, disciplined daily routines, ethical values, and individual student care.',
    },
    {
      id: 'item-2',
      question: 'What classes and age groups does the school serve?',
      answer: 'We offer comprehensive schooling from Early Kindergarten through Secondary levels under the Tamil Nadu State Board framework.',
    },
    {
      id: 'item-3',
      question: 'How are science and practical learning integrated?',
      answer: 'Our students engage in hands-on science experiments, digital learning modules, interactive projects, and annual science exhibitions.',
    },
    {
      id: 'item-4',
      question: 'What safety and security standards are enforced on campus?',
      answer: 'The campus is fully enclosed with 24/7 security personnel, monitored CCTV cameras, and strict visitor entry protocols.',
    },
    {
      id: 'item-5',
      question: 'How can I schedule a school tour at Nabi Crescent?',
      answer: 'Click on the Apply Now button in our header or submit a request on our contact page to schedule a guided tour with our administrative team.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#dce3e3] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[14px] bg-[#cdface] text-[#001f1f] border border-[#dce3e3] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#001f1f] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5c7070] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about Nabi Crescent Matriculation School.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5c7070] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#004d40] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for guidance.
            </TextEffect>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#dce3e3]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#001f1f] hover:text-[#004d40] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5c7070]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#5c7070] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#004d40] font-semibold hover:underline">
              admissions team
            </Link>
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#5c7070] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </TextEffect>
    </div>
  );
};
