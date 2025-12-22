"use client";

import { useState, useEffect, useRef } from "react";
import { Award, FileCheck, Clock, Ruler, Blocks } from "lucide-react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Navbar from "./components/Navbar";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop";

const projects = [
  {
    titleKey: "urbanLoft",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    titleKey: "sathornResidence",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    titleKey: "officeHQ",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    titleKey: "minimalKitchen",
    image:
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop",
  },
];

const projectTitles: Record<string, string> = {
  urbanLoft: "The Urban Loft",
  sathornResidence: "Sathorn Residence",
  officeHQ: "Office HQ",
  minimalKitchen: "Minimal Kitchen",
};

export default function Home() {
  const t = useTranslations("home");

  // Slider images: hero + project images
  const slideImages = [heroImage, ...projects.map((p) => p.image)];
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoRef = useRef<number | null>(null);

  useEffect(() => {
    // auto-advance every 5s
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slideImages.length);
    }, 5000);

    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [slideImages.length]);

  const prevSlide = () => setCurrentSlide((s) => (s - 1 + slideImages.length) % slideImages.length);
  const nextSlide = () => setCurrentSlide((s) => (s + 1) % slideImages.length);

  const whyChooseItems = [
    { Icon: Award, titleKey: "qualityWorkmanship", descKey: "qualityWorkmanshipDesc" },
    { Icon: FileCheck, titleKey: "transparentPricing", descKey: "transparentPricingDesc" },
    { Icon: Clock, titleKey: "fastReliable", descKey: "fastReliableDesc" },
    { Icon: Ruler, titleKey: "tailoredToYou", descKey: "tailoredToYouDesc" },
    { Icon: Blocks, titleKey: "oneStopPartner", descKey: "oneStopPartnerDesc" },
  ];

  const services = [
    { titleKey: "residential", descKey: "residentialDesc" },
    { titleKey: "commercial", descKey: "commercialDesc" },
    { titleKey: "consultation", descKey: "consultationDesc" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <header className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400">
            {t("tagline")}
          </p>
          <h1 className="mt-6 text-4xl font-light leading-tight text-black md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            {t("heroDescription")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center border border-black px-8 py-3 text-sm font-medium uppercase tracking-widest transition hover:bg-black hover:text-white"
            >
              {t("viewPortfolio")}
            </a>
            <a
              href="/contactus"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest text-zinc-500 transition hover:text-black"
            >
              {t("startProject")}
            </a>
          </div>
          <div className="mt-16">
            {/* Slider Component */}
            <div className="relative w-full aspect-video md:aspect-21/9 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-sm group">
              {/* Slides Container */}
              <div id="slider-container" className="w-full h-full relative bg-gray-100">
                {slideImages.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className={`absolute inset-0 object-cover ${idx === currentSlide ? "fade-enter-active" : "fade-exit-active"
                      }`}
                    style={{ display: Math.abs(idx - currentSlide) > 1 ? "none" : "block" }}
                    priority={idx === 0}
                  />
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Controls */}
              <button
                id="prevBtn"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                id="nextBtn"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10" id="indicators">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none ${i === currentSlide ? "scale-110 bg-white" : "bg-white/50 hover:bg-white/75"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            {t("whatWeDo")}
          </span>
          <h2 className="text-3xl font-light text-black md:text-4xl">
            {t("redefiningLanes")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            {t("whatWeDoDescription")}
          </p>
        </div>
      </section>


      {/* NEW SECTION: What We Do */}
      <section className="w-full bg-brand-light py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Content */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">{t("services")}</p>
            <h2 className="text-3xl md:text-4xl serif-font mb-8 text-brand-black leading-tight">{t("whatWeDoTitle")}</h2>

            <div className="space-y-6 text-brand-gray font-light leading-relaxed text-sm md:text-base">
              <p>
                {t("servicesDescription1")}
              </p>
              <p>
                {t("servicesDescription2")}
              </p>
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            <h3 className="text-2xl serif-font mb-8 text-brand-black">{t("whyChoose")}</h3>

            <ul className="space-y-6">
              {whyChooseItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-gray-50 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-brand-black uppercase tracking-wide mb-1">{t(item.titleKey)}</h4>
                    <p className="text-xs text-gray-400 font-light">{t(item.descKey)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                {t("selectedWorks")}
              </p>
              <h2 className="mt-3 text-3xl font-light text-black">{t("spatialCaseStudies")}</h2>
            </div>
            <a
              href="#"
              className="text-sm text-zinc-500 transition hover:text-black"
            >
              {t("seeAll")}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.titleKey}
                className={`group relative h-80 overflow-hidden rounded-2xl ${project.span ?? ""}`}
              >
                <Image
                  src={project.image}
                  alt={projectTitles[project.titleKey]}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-lg font-light text-white">{projectTitles[project.titleKey]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">
            {t("ourExpertise")}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className="rounded-2xl border border-zinc-800 p-8 text-center transition hover:border-white/80"
              >
                <h3 className="text-xl font-semibold">{t(service.titleKey)}</h3>
                <p className="mt-3 text-sm text-zinc-400">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            {t("startYourProject")}
          </p>
          <h2 className="mt-4 text-3xl font-light text-black">{t("tellUsAboutSpace")}</h2>
          <p className="mt-3 text-base text-zinc-500">
            {t("shareAmbitions")}
          </p>
        </div>
        <form className="mx-auto mt-12 max-w-3xl space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="text-left text-sm font-medium text-zinc-600">
              {t("name")}
              <input
                type="text"
                placeholder={t("yourName")}
                className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
              />
            </label>
            <label className="text-left text-sm font-medium text-zinc-600">
              {t("email")}
              <input
                type="email"
                placeholder="email@address.com"
                className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
              />
            </label>
          </div>
          <label className="block text-left text-sm font-medium text-zinc-600">
            {t("message")}
            <textarea
              rows={4}
              placeholder={t("tellUsNeeds")}
              className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
            />
          </label>
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-black px-10 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-800"
            >
              {t("sendInquiry")}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
