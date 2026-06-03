"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const linkClass = (path: string) =>
    `text-xl font-medium uppercase tracking-wider transition ${
      pathname === path ? "text-teal-400" : "hover:text-teal-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 uppercase text-xl hover:text-teal-400 transition"
        >
          <img
            src="/logo.PNG"
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className={linkClass("/")}>Home</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/work" className={linkClass("/work")}>
            Work
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <button
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              console.log(next);
              setTheme(next);
            }}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
