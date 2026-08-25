"use client";

import * as React from "react";
import { useEffect, useCallback } from "react";
import { motion, useAnimate, type AnimationOptions } from "framer-motion";

const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"] as const;

type Props = {
  text: string;
  font?: React.CSSProperties;
  color?: string;
  className?: string;
  tag?: string;

  direction?:
    | "center-horizontal"
    | "center-vertical"
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top";

  transition?: AnimationOptions;
};

const INSET_MAP: Record<string, string> = {
  "center-horizontal": "inset(0% 50% 0% 50%)",
  "center-vertical": "inset(50% 0% 50% 0%)",
  "left-to-right": "inset(0% 100% 0% 0%)",
  "right-to-left": "inset(0% 0% 0% 100%)",
  "top-to-bottom": "inset(0% 0% 100% 0%)",
  "bottom-to-top": "inset(100% 0% 0% 0%)",
};

export function MaskTextReveal({
  text = "Curtain Reveal",
  font = {},
  color,
  className = "",
  tag = "h1",
  direction = "bottom-to-top",
  transition = {
    type: "tween",
    stiffness: 800,
    damping: 60,
    mass: 1,
    ease: "easeInOut",
    duration: 1,
  },
}: Partial<Props>) {
  const [scope, animate] = useAnimate();

  const startClip = INSET_MAP[direction] || INSET_MAP["bottom-to-top"];
  const endClip = "inset(0% 0% 0% 0%)";

  const resetToHidden = useCallback(() => {
    if (!scope.current) return;
    animate(".curtain-text", { clipPath: startClip }, { duration: 0 });
  }, [animate, startClip, scope]);

  const runAppear = useCallback(() => {
    if (!scope.current) return;
    animate(".curtain-text", { clipPath: endClip }, transition as any);
  }, [animate, transition, endClip, scope]);

  useEffect(() => {
    resetToHidden();
    const t = setTimeout(runAppear, 50);
    return () => clearTimeout(t);
  }, [runAppear, resetToHidden]);

  const fontStyles = (font ?? {}) as React.CSSProperties;
  const safeTag = (TAGS as readonly string[]).includes(tag) ? tag : "h1";
  const Tag = (motion as any)[safeTag] || motion.h1;

  return (
    <div
      ref={scope}
      style={{
        width: "100%",
        display: "flex",
        justifyContent:
          fontStyles.textAlign === "right"
            ? "flex-end"
            : fontStyles.textAlign === "center"
              ? "center"
              : "flex-start",
        overflow: "visible",
      }}
    >
      <Tag
        className={`curtain-text ${className}`}
        style={{
          margin: 0,
          display: "inline-block",
          whiteSpace: "pre-wrap",
          ...fontStyles,
          ...(color ? { color } : {}),
          clipPath: startClip,
          willChange: "clip-path",
        }}
      >
        {text}
      </Tag>
    </div>
  );
}

export default MaskTextReveal;
