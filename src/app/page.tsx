"use client";

import { useState } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/assets/hero image 1.jpg",
    alt: "Nanako Shibasaki - portrait 1",
    priority: true,
  },
  {
    src: "/assets/hero image 2.jpg",
    alt: "Nanako Shibasaki - portrait 2",
    priority: true,
  },
  {
    src: "/assets/hero image 3.jpg",
    alt: "Nanako Shibasaki - portrait 3",
    priority: false,
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Highlights", href: "#highlights" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Contact", href: "#contact" },
];

const languages = ["ID", "JP", "EN"] as const;
type Language = (typeof languages)[number];

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative h-screen h-dvh w-full overflow-hidden bg-black text-white select-none">
      {/* Top Header: Brand Wordmark (Left) & Language Switcher (Right) */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        {/* Brand Wordmark */}
        <div className="pointer-events-auto flex items-baseline gap-2.5 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/10 transition-colors hover:bg-black/60">
          <a
            href="/"
            className="flex items-baseline gap-2 text-decoration-none group"
          >
            <span className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-white transition-opacity group-hover:opacity-90">
              Nanako Shibasaki
            </span>
            <span className="text-[10px] md:text-xs font-light tracking-widest text-zinc-400">
              柴崎七虹
            </span>
          </a>
        </div>

        {/* Top Right: Language Switcher (Desktop) + Mobile Menu Toggle */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Desktop Language Switcher (hidden on mobile) */}
          <nav
            aria-label="Language selector"
            className="hidden items-center rounded-full border border-white/15 bg-black/40 p-1 backdrop-blur-md md:flex"
          >
            {languages.map((lang) => {
              const isActive = currentLang === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setCurrentLang(lang)}
                  aria-pressed={isActive}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button (Narrow Viewports) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md md:hidden"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute inset-x-4 top-20 z-40 rounded-2xl border border-white/15 bg-black/90 p-6 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile primary" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher inside Mobile Burger Menu */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-xs font-medium tracking-widest uppercase text-zinc-400">
              Language
            </span>
            <div
              role="group"
              aria-label="Mobile language selector"
              className="flex items-center rounded-full border border-white/15 bg-white/5 p-1"
            >
              {languages.map((lang) => {
                const isActive = currentLang === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setCurrentLang(lang)}
                    aria-pressed={isActive}
                    className={`rounded-full px-3 py-1 text-xs font-medium tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-white text-black shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Nav Dock (Desktop Anchor Links) */}
      <nav
        aria-label="Primary navigation"
        className="pointer-events-none absolute inset-x-0 bottom-8 z-30 hidden items-center justify-center px-4 md:flex"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-black/45 px-5 py-2 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-black/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative rounded-full px-3.5 py-1.5 text-xs font-medium tracking-widest uppercase text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-3.5 bottom-0 h-[1.5px] origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </nav>

      {/* Full screen 3-panel hero showcase */}
      <section
        aria-label="Hero showcase"
        className="group/hero flex h-full w-full flex-col md:flex-row"
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="group/panel relative h-full w-full flex-1 cursor-pointer overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="pointer-events-none select-none object-cover object-center"
            />

            {/* Dynamic black overlay: 40% default, 75% for siblings on hover, 0% for active */}
            <div className="pointer-events-none absolute inset-0 bg-black opacity-40 transition-opacity duration-500 ease-out group-hover/hero:opacity-75 group-hover/panel:!opacity-0" />
          </div>
        ))}
      </section>
    </main>
  );
}




