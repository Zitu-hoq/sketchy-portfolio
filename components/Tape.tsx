"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

export default function Tape() {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16 overflow-x-clip -mx-32 max-lg:-mx-24 max-md:-mx-16 max-sm:-mx-8 max-lg:py-12 max-md:py-8 max-sm:py-4">
      <div className="bg-linear-to-r from-[#fee685] to-[#fef3c6] dark:from-[#92400e] dark:to-[#b45309] -rotate-3 -mx-1">
        <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-none py-3 gap-4 pr-4 max-lg:py-2 max-md:gap-2 max-md:py-1 max-sm:py-0"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-4 py-3 items-center max-md:py-2 max-sm:py-1 max-md:gap-2"
                  >
                    <span className="text-slate-900 dark:text-amber-50 text-lg uppercase font-extrabold max-md:text-xl max-sm:text-lg">
                      {word}
                    </span>
                    <span>&#9733;</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
