"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const WiredCard = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredCard),
  { ssr: false },
);
const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <WiredCard elevation={3}>
          <div className="flex flex-col items-center gap-6 px-12 py-16 max-sm:px-6 max-sm:py-10 text-center">
            <h1 className="text-8xl max-sm:text-6xl font-bold">404</h1>
            <p className="text-xl max-sm:text-lg">
              Oops! This page got lost in the wires.
            </p>
            <Link href="/">
              <WiredButton
                elevation={2}
                className="bg-amber-100 hover:bg-amber-200 dark:bg-amber-800 dark:hover:bg-amber-700 uppercase text-slate-900 dark:text-slate-50"
              >
                Go Back Home
              </WiredButton>
            </Link>
          </div>
        </WiredCard>
      </motion.div>
    </div>
  );
}
