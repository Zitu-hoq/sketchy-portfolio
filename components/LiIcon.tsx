"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

interface LiIconProps {
  reference: RefObject<HTMLElement | null>;
}

export default function LiIcon({ reference }: LiIconProps) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <figure className="absolute left-0 stroke-slate-900 dark:stroke-amber-50">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-slate-900 stroke-1 fill-none dark:stroke-amber-200"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-amber-50 dark:fill-amber-950 xs:stroke-[3px]"
          style={{ pathLength }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-slate-800 dark:fill-amber-100"
        />
      </svg>
    </figure>
  );
}
