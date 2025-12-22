"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  image: string;
  category: "residential" | "commercial" | "furniture";
};

const projects: Project[] = [
  // Residential - Living room/bedroom interiors
  {
    image: "/images/portfolio/120872d4-cf5e-4385-9378-be18df6d5684.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/15010b21-bee1-4957-bd31-a5dc56a0ab3f.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/32775ae8-d0be-41fb-a19d-36dd9fed60c2.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/5caf5ee2-f5b2-4f2e-bbbf-a9a85796596d.jpg",
    category: "residential",
  },
  // Commercial spaces
  {
    image: "/images/portfolio/63fe640f-a62b-4a18-962a-728b055d98f7.jpg",
    category: "commercial",
  },
  {
    image: "/images/portfolio/64a8688a-6cb8-4fc8-8c7a-67984774e7d4.jpg",
    category: "commercial",
  },
  {
    image: "/images/portfolio/6da41fff-0684-4c69-9251-769cdd5ba84b.jpg",
    category: "commercial",
  },
  // Custom Furniture / Built-ins
  {
    image: "/images/portfolio/8170c0f8-3e64-4441-8dd1-669d7fe5e752.jpg",
    category: "furniture",
  },
  {
    image: "/images/portfolio/84697d5f-1000-4ba7-a1a4-3177d4c5448e.jpg",
    category: "furniture",
  },
  {
    image: "/images/portfolio/8ad18b4d-43ed-4d27-9976-2d25faf8b307.jpg",
    category: "furniture",
  },
  // More Residential
  {
    image: "/images/portfolio/8b071601-9e89-4429-a789-1cedf62f6a34.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/8f452864-e8ec-449f-b63e-cb6018557a01.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/97f4df1d-958f-4107-94de-3952a3701718.jpg",
    category: "residential",
  },
  // More Commercial
  {
    image: "/images/portfolio/9873cdc0-c9fa-4c80-8602-c9d0e943f34a.jpg",
    category: "commercial",
  },
  {
    image: "/images/portfolio/a33d1325-12a7-44ef-bc7c-83ff410c1de6.jpg",
    category: "commercial",
  },
  // More Furniture
  {
    image: "/images/portfolio/a6c57804-3c41-43f4-9a01-a209c2b7c301.jpg",
    category: "furniture",
  },
  {
    image: "/images/portfolio/e6ece9e7-4f91-449e-a133-f64d9c04923e.jpg",
    category: "furniture",
  },
  {
    image: "/images/portfolio/f2e8141d-f030-4ea4-9c6c-385b9c0714dc.jpg",
    category: "furniture",
  },
];

type FilterCategory = "all" | "residential" | "commercial" | "furniture";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  }, [filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  }, [filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Navbar />

      {/* Header */}
      <header className="w-full pt-32 pb-12 px-6 md:px-12 text-center fade-in-up">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-6 font-medium">
          {t("selectedWorks")}
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-8 text-zinc-900">
          {t("title")}
        </h1>
      </header>

      {/* Masonry Gallery */}
      <section className="w-full px-6 md:px-12 pb-24 flex-1">
        <div className="max-w-[1400px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden bg-zinc-100">
                <Image
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  width={600}
                  height={800}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredProjects[currentIndex].image}
              alt={`Project ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-wider">
            {currentIndex + 1} / {filteredProjects.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto py-2 px-4">
            {filteredProjects.map((project, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 overflow-hidden transition-all duration-200 ${index === currentIndex
                    ? "ring-2 ring-white opacity-100"
                    : "opacity-50 hover:opacity-80"
                  }`}
              >
                <Image
                  src={project.image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
