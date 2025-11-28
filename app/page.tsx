"use client";

import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop";

const projects = [
  {
    title: "The Urban Loft",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sathorn Residence",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    title: "Office HQ",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    title: "Minimal Kitchen",
    image:
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop",
  },
];

const services = [
  {
    title: "Residential",
    copy: "Full-scale renovation and interior styling for modern homes and condos.",
  },
  {
    title: "Commercial",
    copy: "Office and retail design that communicates brand identity through space.",
  },
  {
    title: "Consultation",
    copy: "Space planning, 3D rendering, and curated material selection advice.",
  },
];

const navLinks = [
  { href: "#about", label: "Studio" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 3L3 8L12 13L21 8L12 3Z" />
              <path d="M3 8V18L12 23V13" />
              <path d="M21 8V18L12 23" />
              <path d="M12 13V23" />
              <path d="M7.5 10.5L16.5 15.5" strokeDasharray="2 2" />
            </svg>
            <span className="text-xl font-semibold tracking-tight lowercase">
              regenlanes
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-black px-5 py-2 text-sm font-medium uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Contact
            </a>
          </div>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} border-t border-zinc-100 md:hidden`}>
          {[...navLinks, { href: "#contact", label: "Contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-sm text-zinc-700 transition hover:bg-zinc-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400">
            minimalist interior & architecture studio
          </p>
          <h1 className="mt-6 text-4xl font-light leading-tight text-black md:text-7xl">
            Design that <span className="font-semibold">regenerates</span> space.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            Precise and architectural interiors that harmonize structure with
            human rituals. Regenlanes crafts monochrome, light-filled rooms for
            residences and modern commercial landmarks.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-black px-8 py-3 text-sm font-medium uppercase tracking-widest transition hover:bg-black hover:text-white"
            >
              View portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest text-zinc-500 transition hover:text-black"
            >
              Start a project
            </a>
          </div>
          <div className="mt-16">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-100 shadow-sm md:h-96">
              <img
                src={heroImage}
                alt="Regenlanes minimalist interior"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            the philosophy
          </span>
          <h2 className="text-3xl font-light text-black md:text-4xl">
            Redefining the lanes of living.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            At <strong>regenlanes</strong>, design is the orchestration of light,
            volume, and human experience. Clean lines, monochrome palettes, and
            functional layouts breathe life into spaces—turning empty rooms into
            mindful atmospheres.
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                selected works
              </p>
              <h2 className="mt-3 text-3xl font-light text-black">Spatial case studies</h2>
            </div>
            <a
              href="#"
              className="text-sm text-zinc-500 transition hover:text-black"
            >
              See all →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative h-80 overflow-hidden rounded-2xl ${project.span ?? ""}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-lg font-light text-white">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">
            Our expertise
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-800 p-8 text-center transition hover:border-white/80"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            start your project
          </p>
          <h2 className="mt-4 text-3xl font-light text-black">Tell us about your space.</h2>
          <p className="mt-3 text-base text-zinc-500">
            Share your ambitions and we will respond with a tailored scope,
            timeline, and investment guide.
          </p>
        </div>
        <form className="mx-auto mt-12 max-w-3xl space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="text-left text-sm font-medium text-zinc-600">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
              />
            </label>
            <label className="text-left text-sm font-medium text-zinc-600">
              Email
              <input
                type="email"
                placeholder="email@address.com"
                className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
              />
            </label>
          </div>
          <label className="block text-left text-sm font-medium text-zinc-600">
            Message
            <textarea
              rows={4}
              placeholder="Tell us about your needs..."
              className="mt-2 w-full border-b border-zinc-300 pb-2 text-base outline-none transition focus:border-black"
            />
          </label>
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-black px-10 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-800"
            >
              Send inquiry
            </button>
          </div>
        </form>
      </section>

      <footer className="border-t border-zinc-100 bg-zinc-50 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-zinc-500 md:flex-row">
          <div className="flex items-center gap-2 text-black">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3L3 8L12 13L21 8L12 3Z" />
              <path d="M3 8V18L12 23V13" />
              <path d="M21 8V18L12 23" />
            </svg>
            <span className="font-semibold lowercase">regenlanes</span>
          </div>
          <p className="text-center">&copy; 2024 Regenlanes. All rights reserved.</p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="transition hover:text-black"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
