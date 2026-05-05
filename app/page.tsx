"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { Globe, Instagram, Mail, Sun, Moon, ArrowUpRight } from "lucide-react";

type Language = "en" | "no";
type Theme = "dark" | "light";

const HERO_NAME = "ØYSTEIN AAS";

interface Translations {
  nav: {
    switchTo: string;
  };
  cards: {
    triathlete: string;
    doctor: string;
  };
  stats: {
    ironmanFinisherLabel: string;
    ironmanFinisherCount: string;
    careerLabel: string;
    careerValue: string;
    qualifierLabel: string;
    qualifierCount: string;
    nextRaceLabel: string;
    nextRaceName: string;
    nextRaceDate: string;
    followHeading: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailButton: string;
    instagramButton: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { switchTo: "NO" },
    cards: { triathlete: "TRIATHLETE", doctor: "DOCTOR" },
    stats: {
      ironmanFinisherLabel: "Ironman finisher",
      ironmanFinisherCount: "x4",
      careerLabel: "Career",
      careerValue: "Full time medical doctor",
      qualifierLabel: "World Championship official qualifier",
      qualifierCount: "x1",
      nextRaceLabel: "Next race",
      nextRaceName: "IM Leeds",
      nextRaceDate: "16. August",
      followHeading: "Follow the journey",
    },
    contact: {
      title: "Be a part of team Aas?",
      subtitle: "Join the team, reach out.",
      emailButton: "Send Email",
      instagramButton: "Instagram",
    },
    footer: { rights: "All rights reserved." },
  },
  no: {
    nav: { switchTo: "EN" },
    cards: { triathlete: "TRIATLET", doctor: "LEGE" },
    stats: {
      ironmanFinisherLabel: "Ironman finisher",
      ironmanFinisherCount: "x4",
      careerLabel: "Karriere",
      careerValue: "Lege på fulltid",
      qualifierLabel: "Offisielt VM-kvalifisert",
      qualifierCount: "x1",
      nextRaceLabel: "Neste løp",
      nextRaceName: "IM Leeds",
      nextRaceDate: "16. august",
      followHeading: "Følg reisen",
    },
    contact: {
      title: "Bli en del av team Aas?",
      subtitle: "Ta kontakt for å bli med på laget.",
      emailButton: "Send E-post",
      instagramButton: "Instagram",
    },
    footer: { rights: "Alle rettigheter reservert." },
  },
};

export default function TriathleteHomepage(): ReactElement {
  const [lang, setLang] = useState<Language>("no");
  const [theme, setTheme] = useState<Theme>("dark");
  const t = translations[lang];
  const isDark = theme === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Small delay so the CSS animations feel intentional rather than instant
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);

  const toggleLanguage = (): void => setLang(lang === "en" ? "no" : "en");
  const toggleTheme = (): void => setTheme(isDark ? "light" : "dark");

  // ── Semantic tokens ────────────────────────────────────────────────────────
  const bg = isDark ? "bg-[#050505]" : "bg-[#f5f2f0]";
  const text = isDark ? "text-white" : "text-[#100a08]";

  // hero gradient
  const heroGradient = isDark
    ? "bg-[radial-gradient(circle_at_18%_14%,rgba(220,38,38,0.28),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(0,208,255,0.18),transparent_30%),linear-gradient(125deg,#050505_0%,#180404_46%,#031015_100%)]"
    : "bg-[radial-gradient(circle_at_18%_14%,rgba(220,38,38,0.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(0,180,220,0.12),transparent_30%),linear-gradient(125deg,#f5f2f0_0%,#fdf0ee_46%,#edf6fa_100%)]";

  const heroFade = isDark
    ? "bg-gradient-to-t from-[#050505] to-transparent"
    : "bg-gradient-to-t from-[#f5f2f0] to-transparent";

  // stat section bg
  const statsBg = isDark
    ? "bg-[linear-gradient(180deg,#050505_0%,#180404_44%,#050505_100%)]"
    : "bg-[linear-gradient(180deg,#f5f2f0_0%,#fde8e6_44%,#f5f2f0_100%)]";

  // card border / glass
  const cardBorder = isDark ? "border-white/10 bg-black/30" : "border-black/10 bg-white/60";
  const cardText = isDark ? "text-white" : "text-[#100a08]";
  const cardMuted = isDark ? "text-white/40" : "text-black/40";

  // nav pill
  const navPill = isDark
    ? "border-white/15 bg-black/45 shadow-[0_0_34px_rgba(220,38,38,0.18)]"
    : "border-black/10 bg-white/70 shadow-[0_0_34px_rgba(220,38,38,0.14)]";
  const navIcon = isDark ? "text-white/80 hover:bg-white/10 hover:text-red-200" : "text-black/70 hover:bg-black/10 hover:text-red-600";

  // contact section
  const contactBorder = isDark ? "border-white/10" : "border-black/10";
  const contactTitle = isDark ? "text-white" : "text-[#100a08]";
  const contactSub = isDark ? "text-zinc-400" : "text-zinc-600";

  // footer
  const footerText = isDark ? "text-zinc-600" : "text-zinc-400";

  // theme toggle button
  const themeBtn = isDark
    ? "bg-white/10 text-white hover:bg-white/20"
    : "bg-black/10 text-black hover:bg-black/20";

  return (
    <main className={`min-h-screen overflow-hidden ${bg} ${text} transition-colors duration-300`}>
      <style>{`
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.96) translateY(18px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .anim-fade-down  { animation: fade-down 0.6s cubic-bezier(.22,.68,0,1.2) both; }
        .anim-fade-up    { animation: fade-up  0.65s cubic-bezier(.22,.68,0,1.2) both; }
        .anim-fade-in    { animation: fade-in  0.7s ease both; }
        .anim-scale-up   { animation: scale-up 0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .anim-delay-1 { animation-delay: 0.08s; }
        .anim-delay-2 { animation-delay: 0.18s; }
        .anim-delay-3 { animation-delay: 0.28s; }
        .anim-delay-4 { animation-delay: 0.38s; }
        .anim-delay-5 { animation-delay: 0.48s; }
        .anim-delay-6 { animation-delay: 0.58s; }
        .anim-delay-7 { animation-delay: 0.68s; }
      `}</style>
      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav className={`fixed left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 transition-all duration-300 ${scrolled ? "top-3" : "top-4 sm:top-6 lg:top-20"}`}>
        <div className="mx-auto flex max-w-7xl justify-end">
        <div className={`flex items-center gap-2 rounded-full border p-1.5 backdrop-blur-xl transition-colors duration-300 ${navPill} ${mounted ? "anim-fade-down" : "opacity-0"}`}>
          <a
            href="https://instagram.com/oysteinaas"
            target="_blank"
            rel="noopener noreferrer"
            className={`grid h-10 w-10 place-items-center rounded-full transition ${navIcon}`}
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <a
            href="mailto:oystein.aas95@gmail.com"
            className={`grid h-10 w-10 place-items-center rounded-full transition ${navIcon}`}
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`grid h-10 w-10 place-items-center rounded-full transition cursor-pointer ${themeBtn}`}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="cursor-pointer flex h-10 items-center gap-2 rounded-full bg-red-600 px-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-400"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {t.nav.switchTo}
          </button>
        </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 pb-4 lg:pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-20">
        <div className={`absolute inset-0 transition-all duration-300 ${heroGradient}`} />
        <div className={`absolute inset-0 opacity-[0.12] [background-image:linear-gradient(${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)"}._1px,transparent_1px),linear-gradient(90deg,${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.06)"}_1px,transparent_1px)] [background-size:54px_54px]`} />
        <div className={`absolute inset-x-0 bottom-0 h-48 transition-all duration-300 ${heroFade}`} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="max-w-4xl">
              <h1 className={`relative text-[clamp(4.4rem,15vw,9rem)] font-bold uppercase leading-[0.8] tracking-normal drop-shadow-[0_0_34px_rgba(255,255,255,0.10)] after:absolute after:-bottom-4 after:left-1 after:h-1 after:w-36 after:bg-red-600 after:shadow-[0_0_24px_rgba(200,0,0,0.8)] ${mounted ? "anim-fade-up anim-delay-1" : "opacity-0"}`}>
                {HERO_NAME}
              </h1>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className={mounted ? "anim-scale-up anim-delay-2" : "opacity-0"}>
            <ShowcaseCard
              title={t.cards.triathlete}
              image="/assets/bike.JPG"
              alt="Øystein Aas racing triathlon"
              tone="red"
              isDark={isDark}
              priority
              objectPosition="center 20%"
            />
            </div>
            <div className={mounted ? "anim-scale-up anim-delay-3" : "opacity-0"}>
            <ShowcaseCard
              title={t.cards.doctor}
              image="/assets/doctor.jpg"
              alt="Øystein Aas as a doctor"
              tone="sky"
              isDark={isDark}
              objectPosition="center 10%"
            />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <section className="relative isolate px-4 py-4 lg:py-8 sm:px-8 lg:px-12">
        <div className={`absolute inset-0 -z-10 transition-all duration-300 ${statsBg}`} />
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:gap-5 lg:grid-cols-[1fr_1fr_400px] lg:grid-rows-[180px_40px_180px]">

            {/* Career */}
            <div className={`flex gap-2 relative flex-col justify-between overflow-hidden border px-6 py-7 lg:py-5 backdrop-blur transition-colors duration-300 lg:[grid-area:1/1/2/2] ${cardBorder} ${mounted ? "anim-fade-up anim-delay-3" : "opacity-0"}`}>
              <div className={`text-sm font-bold uppercase tracking-[0.24em] leading-tight`}>
                {t.stats.careerLabel}
              </div>
              <div className={`text-[clamp(1.6rem,4vw,2.4rem)] font-bold uppercase leading-tight ${cardText}`}>
                {t.stats.careerValue}
              </div>
            </div>

            {/* Ironman Finisher */}
            <div className={`relative flex flex-row lg:flex-col justify-between overflow-hidden border px-6 py-7 lg:py-5 shadow-[0_0_60px_rgba(220,38,38,0.08)] backdrop-blur transition-colors duration-300 lg:[grid-area:1/2/3/3] ${cardBorder} ${mounted ? "anim-fade-up anim-delay-4" : "opacity-0"}`}>
              <div className={`max-w-[20ch] lg:max-w-none text-xl font-bold uppercase tracking-[0.2em] leading-tight ${cardText}`}>
                {t.stats.ironmanFinisherLabel}
              </div>
              <div className="self-end text-[clamp(4rem,10vw,6.5rem)] font-bold leading-none text-red-600 drop-shadow-[0_0_35px_rgba(220,38,38,0.55)] tabular-nums">
                {t.stats.ironmanFinisherCount}
              </div>
            </div>

            {/* World Championship qualifier */}
            <div className={`relative flex flex-row lg:flex-col justify-between overflow-hidden border px-6 py-7 lg:py-5 backdrop-blur transition-colors duration-300 lg:[grid-area:2/1/4/2] ${cardBorder} ${mounted ? "anim-fade-up anim-delay-5" : "opacity-0"}`}>
              <div className={`max-w-[30ch] lg:max-w- text-xl font-bold uppercase tracking-[0.2em] leading-tight ${cardText}`}>
                {t.stats.qualifierLabel}
              </div>
              <div className={`self-end text-[clamp(4rem,10vw,6.5rem)] font-bold leading-none ${isDark ? "text-white/30" : "text-black/60"}`}>
                {t.stats.qualifierCount}
              </div>
            </div>

            {/* Next race */}
            <a
              href="https://www.ironman.com/races/im-leeds"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col gap-4 justify-between overflow-hidden border border-red-400/35 bg-red-700 pl-6 py-5 pr-5 shadow-[0_0_50px_rgba(220,38,38,0.22)] transition hover:bg-red-600 lg:[grid-area:3/2/4/3] ${mounted ? "anim-fade-up anim-delay-6" : "opacity-0"}`}
            >
              <div className="flex items-start justify-between">
                <div className="text-xl font-bold uppercase tracking-[0.24em] text-white leading-tight">
                  {t.stats.nextRaceLabel}
                </div>
                <ArrowUpRight className="size-10 text-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
              <div className="font-bold uppercase leading-none text-white">
                <div className="text-xl">{t.stats.nextRaceDate}</div>
                <div className="text-5xl lg:text-4xl xl:text-6xl">{t.stats.nextRaceName}</div>
              </div>
            </a>

            {/* Follow card */}
            <div className={`relative min-h-[440px] overflow-hidden mt-7 lg:mt-0 ${isDark && "border border-white/10"} bg-zinc-950 shadow-[0_0_90px_rgba(220,38,38,0.16)] lg:[grid-area:1/3/4/4] ${mounted ? "anim-scale-up anim-delay-4" : "opacity-0"}`}>
              <Image
                src="/assets/finish-line.JPG"
                alt="Finish line"
                fill
                sizes="420px"
                className="absolute inset-0 h-full w-full object-cover object-60%-left scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-900/20 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-r from-red-800/25 via-transparent to-transparent" />
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_85%,rgba(255,0,0,0.3),transparent_60%)] mix-blend-screen" />

              <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-right">
                <div className="text-[clamp(3.8rem,9vw,5rem)] lg:text-[clamp(2.4rem,4.5vw,4rem)] font-bold uppercase leading-[0.85] text-white/80 drop-shadow-[0_0_34px_rgba(220,38,38,.5)]">
                  {t.stats.followHeading}
                </div>
                <a
                  href="https://instagram.com/oysteinaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-full bg-sky-500/50 border border-white/30 px-5 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-sky-500/30"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" className={`px-4 py-20 sm:px-8 lg:px-12 ${mounted ? "anim-fade-in anim-delay-7" : "opacity-0"}`}>
        <div className={`mx-auto grid max-w-7xl items-end gap-8 border-t pt-12 lg:grid-cols-[1fr_auto] transition-colors duration-300 ${contactBorder}`}>
          <div>
            <h2 className={`text-4xl font-bold uppercase leading-none sm:text-6xl ${contactTitle}`}>
              {t.contact.title}
            </h2>
            <p className={`mt-5 max-w-2xl text-lg font-medium ${contactSub}`}>
              {t.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:oystein.aas95@gmail.com"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-red-600 px-5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-red-400"
            >
              <Mail className="h-4 w-4" />
              {t.contact.emailButton}
            </a>
            <a
              href="https://instagram.com/oysteinaas"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-bold uppercase tracking-[0.16em] transition ${isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"}`}
            >
              <Instagram className="h-4 w-4" />
              {t.contact.instagramButton}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className={`px-4 pb-8 text-center text-xs font-semibold transition-colors duration-300 ${footerText}`}>
        © 2026 Øystein Aas. {t.footer.rights}
      </footer>
    </main>
  );
}

function ShowcaseCard({
  title,
  image,
  alt,
  tone,
  isDark,
  priority = false,
  objectPosition,
}: {
  title: string;
  image: string;
  alt: string;
  tone: "red" | "sky";
  isDark: boolean;
  priority?: boolean;
  objectPosition?: string;
}): ReactElement {
  const glow =
    tone === "red"
      ? "from-red-600/70 via-red-800/25 to-transparent text-red-100 shadow-[0_0_70px_rgba(220,38,38,0.22)]"
      : "from-sky-400/60 via-sky-500/20 to-transparent text-sky-100 shadow-[0_0_70px_rgba(0,202,255,0.18)]";

  const titleEffect =
    tone === "red"
      ? "text-red-50/56 mix-blend-difference drop-shadow-[0_0_30px_rgba(220,38,38,.5)]"
      : "text-sky-50/56 mix-blend-difference drop-shadow-[0_0_30px_rgba(34,211,238,.44)]";

  const topBorder = tone === "red" ? "bg-red-600" : "bg-sky-700";

  const border = isDark ? "border-white/10" : "border-white/70"

  return (
    <article
      className={`relative min-h-[300px] md:min-h-[460px] overflow-hidden border bg-zinc-950 ${border} ${glow}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover saturate-[1.2]"
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-black/10" />
      <div className={`absolute inset-0 bg-gradient-to-tr ${glow} mix-blend-screen`} />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(90deg,transparent_0,transparent_47%,rgba(255,255,255,.35)_50%,transparent_53%,transparent_100%)] [background-size:9px_100%]" />
      <div className={`absolute left-0 top-0 h-2 w-full ${topBorder}`} />

      <div className="absolute inset-x-0 bottom-[20%] z-10 flex justify-center text-center px-4">
        <h2
          className={`text-[clamp(3.2rem,15vw,6.5rem)] lg:text-[clamp(3.2rem,8vw,5.8rem)] xl:text-[clamp(3.2rem,10vw,6.2rem)] font-bold uppercase leading-[0.82] tracking-normal ${titleEffect}`}
        >
          {title}
        </h2>
      </div>
    </article>
  );
}