"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const WiredCard = dynamic(
  () =>
    import("wired-elements-react").then((m) => {
      return m.WiredCard as unknown as React.ComponentType<
        React.PropsWithChildren<{ elevation?: number }>
      >;
    }),
  { ssr: false },
);
const WiredButton = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredButton),
  { ssr: false },
);
const WiredLink = dynamic(
  () => import("wired-elements-react").then((m) => m.WiredLink),
  { ssr: false },
);

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[calc(100dvh-5rem)] max-sm:min-h-[50dvh] flex items-center justify-center px-4 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <WiredCard elevation={3}>
          <div className="flex flex-col items-center gap-6 px-12 py-16 max-sm:px-6 max-sm:py-10 text-center">
            <h1 className="text-8xl max-sm:text-6xl font-bold">504</h1>
            <p className="text-xl max-sm:text-lg text-orange-600 dark:text-orange-400">
              {error.message || "Something went wrong."}
            </p>
            <p className="text-lg max-sm:text-base">
              You can also reach out to me directly —{" "}
              <WiredLink
                elevation={2}
                href="#contact"
                className="text-lg max-sm:text-base text-secondary"
                style={
                  {
                    "--wired-link-decoration-color": "#eab308",
                  } as React.CSSProperties
                }
              >
                get in touch.
              </WiredLink>
            </p>
            <Link href="/">
              <WiredButton
                elevation={2}
                className="bg-btn-primary hover:bg-btn-primary-hover dark:bg-btn-primary dark:hover:bg-btn-primary-hover uppercase text-secondary dark:text-slate-50"
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
