"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useState } from "react";
import { Globe, Instagram, Mail } from "lucide-react";

type Language = "en" | "no";

interface Translations {
  nav: {
    switchTo: string;
  };
  hero: {
    name: string;
  };
  cards: {
    triathlete: string;
    doctor: string;
  };
  stat: {
    label: string;
    value: string;
    career: string;
    doctor: string;
    qualifier: string;
    nextRace: string;
    nextRaceCity: string;
    nextRaceDate: string;
    follow: string;
  };
  contact: {
    title: string;
    text: string;
    email: string;
    instagram: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      switchTo: "NO",
    },
    hero: {
      name: "ØYSTEIN AAS",
    },
    cards: {
      triathlete: "TRIATHLETE",
      doctor: "DOCTOR",
    },
    stat: {
      label: "Ironman finisher",
      value: "x4",
      career: "Career",
      doctor: "Full time medical doctor",
      qualifier: "World Championship official qualifier",
      nextRace: "Next race",
      nextRaceCity: "Leeds",
      nextRaceDate: "16. August",
      follow: "Follow the journey",
    },
    contact: {
      title: "Ready For The Next Start Line",
      text: "Join the team, reach out.",
      email: "Send Email",
      instagram: "Instagram",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  no: {
    nav: {
      switchTo: "EN",
    },
    hero: {
      name: "ØYSTEIN AAS",
    },
    cards: {
      triathlete: "TRIATLET",
      doctor: "LEGE",
    },
    stat: {
      label: "Ironman finisher",
      value: "x4",
      career: "Karriere",
      doctor: "Lege på fulltid",
      qualifier: "Offisiell VM-kvalifisert",
      nextRace: "Neste løp",
      nextRaceCity: "Leeds",
      nextRaceDate: "16. august",
      follow: "Følg reisen",
    },
    contact: {
      title: "Klar For Neste Startstrek",
      text: "Bli med på laget. Ta kontakt.",
      email: "Send E-post",
      instagram: "Instagram",
    },
    footer: {
      rights: "Alle rettigheter reservert.",
    },
  },
};

export default function TriathleteHomepage(): ReactElement {
  const [lang, setLang] = useState<Language>("no");
  const t = translations[lang];

  const toggleLanguage = (): void => {
    setLang(lang === "en" ? "no" : "en");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <nav className="fixed right-0 top-0 z-50 flex w-full justify-end px-4 py-4 sm:px-8">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/45 p-1.5 shadow-[0_0_34px_rgba(255,46,0,0.18)] backdrop-blur-xl">
          <a
            href="https://instagram.com/oysteinaas"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-orange-200"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <a
            href="mailto:oystein.aas95@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-orange-200"
            aria-label="Email"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            onClick={toggleLanguage}
            className="flex h-10 items-center gap-2 rounded-full bg-orange-500 px-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-orange-300"
            aria-label="Toggle language"
            title="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {t.nav.switchTo}
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen px-4 pb-12 pt-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,92,0,0.28),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(0,208,255,0.18),transparent_30%),linear-gradient(125deg,#050505_0%,#120705_46%,#031015_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col justify-center">
          <div className="mb-10">
            <div className="max-w-4xl">
              <h1 className="relative text-[clamp(4.4rem,15vw,9rem)] font-black uppercase leading-[0.8] tracking-normal text-white drop-shadow-[0_0_34px_rgba(255,255,255,0.16)] after:absolute after:-bottom-4 after:left-1 after:h-1 after:w-36 after:bg-orange-400 after:shadow-[0_0_24px_rgba(255,111,0,0.8)]">
                {t.hero.name}
              </h1>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <ShowcaseCard
              title={t.cards.triathlete}
              image="/assets/bike.JPG"
              alt="Øystein Aas racing triathlon"
              tone="orange"
              priority
            />
            <ShowcaseCard
              title={t.cards.doctor}
              image="/assets/doctor.jpg"
              alt="Øystein Aas as a doctor"
              tone="cyan"
              objectPosition="center 15%"
            />
          </div>
        </div>
      </section>

      <section
        className="relative isolate px-4 py-8 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#050505_0%,#160805_44%,#050505_100%)]" />
        <div className="mx-auto max-w-7xl">
          {/*
            3-col × 3-row grid. Row sizes: [normal, tiny, normal]
            - Doctor:    col 1, row 1
            - Finisher:  col 2, rows 1–2  (tall)
            - Qualifier: col 1, rows 2–3  (tall)
            - Next race: col 2, row 3
            - Follow:    col 3, rows 1–3  (full height)
          */}
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr_400px] lg:grid-rows-[180px_40px_180px]">

            {/* Full time doctor — row 1, col 1 */}
            <div className="hidden lg:flex relative flex-col justify-between overflow-hidden border border-white/10 bg-black/30 px-6 py-5 backdrop-blur lg:[grid-area:1/1/2/2]">
              <div className="text-sm font-black uppercase tracking-[0.24em] text-white/40 leading-tight">
                {t.stat.career}
              </div>
              <div className="text-[clamp(1.6rem,4vw,2.4rem)] font-black uppercase leading-tight text-white">
                {t.stat.doctor}
              </div>
            </div>

            {/* Iron Man Finisher — rows 1–2, col 2 */}
            <div className="relative flex flex-row lg:flex-col justify-between overflow-hidden border border-white/10 bg-black/30 px-6 py-5 shadow-[0_0_60px_rgba(255,95,0,0.08)] backdrop-blur lg:[grid-area:1/2/3/3]">
              <div className="text-xl font-black uppercase tracking-[0.2em] leading-tight">
                {t.stat.label}
              </div>
              <div className="self-end text-[clamp(4rem,10vw,6.5rem)] font-black leading-none text-orange-400 drop-shadow-[0_0_35px_rgba(255,95,0,0.55)]">
                {t.stat.value}
              </div>
            </div>

            {/* World Championship qualifier — rows 2–3, col 1 */}
            <div className="relative flex flex-row lg:flex-col justify-between overflow-hidden border border-white/10 bg-black/30 px-6 py-5 backdrop-blur lg:[grid-area:2/1/4/2]">
              <div className="text-xl font-black uppercase tracking-[0.2em] text-white leading-tight">
                {t.stat.qualifier}
              </div>
              <div className="self-end text-[clamp(4rem,10vw,6.5rem)] font-black leading-none text-white/20">
                x1
              </div>
            </div>

            {/* Next race — row 3, col 2 */}
            <div className="relative flex flex-col gap-4 justify-between overflow-hidden border border-orange-300/35 bg-orange-500 px-6 py-5 shadow-[0_0_50px_rgba(255,95,0,0.18)] lg:[grid-area:3/2/4/3]">
              <div className="text-xl font-black uppercase tracking-[0.24em] text-black leading-tight">
                {t.stat.nextRace}
              </div>
              <div className="font-bold uppercase leading-none text-black">
                <div className="text-xl text-black">
                  {t.stat.nextRaceDate}
                </div>
                <div className="text-[clamp(3rem,7vw,4rem)]">
                  {t.stat.nextRaceCity}
                </div>
              </div>
            </div>

            {/* Follow card — all 3 rows, col 3 */}
            <div className="relative min-h-[440px] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_90px_rgba(255,95,0,0.16)] lg:[grid-area:1/3/4/4]">
              <Image
                src="/assets/finish-line.JPG"
                alt="Finish line"
                fill
                sizes="420px"
                className="absolute inset-0 h-full w-full object-cover object-60%-left scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_85%,rgba(255,95,0,0.55),transparent_50%)] mix-blend-screen" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,60,0,0.2),transparent_55%)] mix-blend-screen" />
              <div className="absolute inset-0 [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
              <div className="absolute inset-x-0 top-0 h-2 bg-orange-400 shadow-[0_0_28px_rgba(255,111,0,.9)]" />

              <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-right">
                <div className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-black uppercase leading-[0.85] text-white/80 drop-shadow-[0_0_34px_rgba(255,95,0,.5)]">
                  {t.stat.follow}
                </div>
                <a
                  href="https://instagram.com/oysteinaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-full bg-white/10 border border-white/10 px-5 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-end gap-8 border-t border-white/10 pt-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium text-zinc-400">
              {t.contact.text}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:oystein.aas95@gmail.com"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-orange-300"
            >
              <Mail className="h-4 w-4" />
              {t.contact.email}
            </a>
            <a
              href="https://instagram.com/oysteinaas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" />
              {t.contact.instagram}
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-8 text-center text-xs font-semibold text-zinc-600 sm:px-8">
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
  priority = false,
  objectPosition,
}: {
  title: string;
  image: string;
  alt: string;
  tone: "orange" | "cyan";
  priority?: boolean;
  objectPosition?: string;
}): ReactElement {
  const glow =
    tone === "orange"
      ? "from-orange-500/70 via-red-500/25 to-transparent text-orange-200 shadow-[0_0_70px_rgba(255,83,0,0.22)]"
      : "from-cyan-400/60 via-blue-500/20 to-transparent text-cyan-100 shadow-[0_0_70px_rgba(0,202,255,0.18)]";

  const titleEffect =
    tone === "orange"
      ? "text-orange-50/56 mix-blend-difference drop-shadow-[0_0_30px_rgba(255,112,31,.48)]"
      : "text-cyan-50/56 mix-blend-difference drop-shadow-[0_0_30px_rgba(34,211,238,.44)]";

  const topBorder = tone === "orange" ? "bg-orange-400" : "bg-cyan-400";

  return (
    <article
      className={`relative min-h-[360px] md:min-h-[460px] overflow-hidden border border-white/10 bg-zinc-950 ${glow}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 55vw, 100vw"
        className={`absolute inset-0 h-full w-full object-cover saturate-[1.2]`}
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-black/10"/>
      <div className={`absolute inset-0 bg-gradient-to-tr ${glow} mix-blend-screen`} />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(90deg,transparent_0,transparent_47%,rgba(255,255,255,.35)_50%,transparent_53%,transparent_100%)] [background-size:9px_100%]" />
      <div className={`absolute left-0 top-0 h-2 w-full ${topBorder}`}/>

      <div className="relative z-10 flex h-full min-h-[360px] md:min-h-[460px] items-center justify-center text-center">
        <h2
          className={`text-[clamp(3.2rem,10vw,6.5rem)] font-black uppercase leading-[0.82] tracking-normal ${titleEffect}`}
        >
          {title}
        </h2>
      </div>
    </article>
  );
}