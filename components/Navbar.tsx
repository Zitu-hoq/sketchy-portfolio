"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const CustomMobileLink = ({ href, title, toggle }) => (
    <Link
      href={href}
      className={`relative group my-2 ${pathname === href ? "text-amber-400" : "text-white hover:text-amber-400"}`}
      onClick={toggle}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full bg-amber-400" : "w-0 bg-white"}`}
      >
        &nbsp;
      </span>
    </Link>
  );

  const linkClass = (path: string) =>
    `text-xl font-medium uppercase tracking-wider transition ${
      pathname === path ? "text-amber-400" : "hover:text-amber-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 uppercase text-xl hover:text-teal-400 transition"
        >
          <img
            src="/icon.png"
            alt="Home icon"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className={`${linkClass("/")} max-sm:hidden`}>Home</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/work" className={linkClass("/work")}>
            Work
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <button
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[60vw] flex flex-col justify-between items-center z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md rounded-lg py-16 sm:hidden"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={() => setIsOpen(false)}
            />
            <CustomMobileLink
              href="/work"
              title="Work"
              toggle={() => setIsOpen(false)}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={() => setIsOpen(false)}
            />
          </nav>
          <button
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              setTheme(next);
            }}
            className="flex items-center justify-center rounded-full p-1 bg-white text-slate-900 dark:bg-slate-900 dark:text-white mt-2"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === "dark" ? (
              <SunIcon className="fill-slate-900 dark:fill-white" />
            ) : (
              <MoonIcon className="fill-slate-900 dark:fill-white" />
            )}
          </button>
        </motion.div>
      )}
    </header>
  );
}
