'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

import { MaskTextReveal } from '@/components/ui/mask-text-reveal';
import OrbitBorderButton from '@/components/ui/orbit-border-button';

interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
  bgImage?: string;
}

const Icon = ({ mouseX, mouseY, iconData, index }: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  React.useEffect(() => {
    const handleMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
          Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );
        if (distance < 160) {
          const angle = Math.atan2(mouseY.current - (rect.top + rect.height / 2), mouseX.current - (rect.left + rect.width / 2));
          const force = (1 - distance / 160) * 45;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else { x.set(0); y.set(0); }
      }
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [x, y, mouseX, mouseY]);

  const IconComponent = iconData.icon;
  const floatDuration = 3.5 + (index % 3) * 0.7;
  const floatDelay = index * 0.3;

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "absolute pointer-events-auto z-10",
        iconData.className
      )}
    >
      <motion.div
        animate={{
          y: [0, -10, 0, 8, 0],
          rotate: [0, 2.5, -2.5, 1, 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-[#e6e4df] backdrop-blur-md shadow-md flex items-center justify-center text-[#001f1f] hover:shadow-lg transition-shadow"
      >
        <IconComponent className="w-5 h-5 sm:w-8 sm:h-8" />
      </motion.div>
    </motion.div>
  );
};

export function FloatingIconsHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  icons,
  bgImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80"
}: FloatingIconsHeroProps) {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      mouseX.current = e.touches[0].clientX;
      mouseY.current = e.touches[0].clientY;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#f7f6f2] py-14 sm:py-20 px-4 sm:px-6"
    >
      {/* Subtle School Campus Background Image in Website's Light Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.14]">
        <img
          src={bgImage}
          alt="Nabi Crescent Matriculation School Campus"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7f6f2]/50 to-[#f7f6f2]" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {icons.map((iconData, index) => (
          <Icon key={iconData.id} mouseX={mouseX} mouseY={mouseY} iconData={iconData} index={index} />
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-[#e6f4f4] text-[#001f1f] border border-[#d2e8e8] backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider font-body shadow-sm">
          📍 Arundhati Palaiyam, Avadi • Rating 4.7★
        </span>

        <MaskTextReveal
          text={title}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#001f1f] leading-tight font-heading"
          direction="bottom-to-top"
        />

        <p className="text-sm sm:text-lg text-[#5c7070] leading-relaxed font-body max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>

        <div className="pt-3 sm:pt-4 flex justify-center gap-4 font-body">
          <OrbitBorderButton
            label={ctaText}
            link={ctaHref}
            className="text-[#001f1f]"
          />
        </div>
      </div>
    </section>
  );
}
