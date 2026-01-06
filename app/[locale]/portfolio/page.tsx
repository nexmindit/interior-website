"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useTranslations } from "next-intl";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  image: string;
  category: "residential" | "commercial" | "furniture";
};

const projects: Project[] = [
  {
    image: "/images/portfolio/020EA05B538C62EBB0CCBC174DAF4094DA40FC91.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/062D26CDB804074536170EB1C6F27D5E3D23B688.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/132259BF0E30246FCA0C3E5F6190A3DAE0FCAF66.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/3B878978A8DF2E83CCA5142C960587A3CA1F0B19.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/41DC0530A4386931194A72A99F4BEAF42457F41D.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/568D12D4A9248EB7B12B9C8F3174A6AECE2A56D0.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/597E34CFA4488AFCD5018CD4A0B6BFD2C79EDBA6.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/7F57DFE0AFACE367FB80F7737B2DEFBED7B5094E.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/8062917E49E13885B3B8E1F38317C3218CD1F676.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/83439CE4352029CB2D9A6277E28627553085AE9A.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/842AB1263FC336B7DAE94E81C5EC97EDE86E8EB0.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/8EDC5E872811B218D7D510D84382BDA4F9740EA1.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/9610F8F70459A2EEC66F2EB26573E1077DFB4F53.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/CF0FC618DC7E27DC2E4B7CFD4669A3A350B03182.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/D63110F2095EDC1C302021E26056079C2FB611B8.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/D9939A89B8E912B8BA012A75EE526AC870720E62.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/F21A5FA5007F49A1A6564E52BB4858C5FF5A9586.jpg",
    category: "residential",
  },
  {
    image: "/images/portfolio/F2CD12E545C3B727DF568F35D5EC8EA2D661ED6A.jpg",
    category: "residential",
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
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6 font-medium">
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
