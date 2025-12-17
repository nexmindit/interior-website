"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: "All", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Custom Furniture", value: "furniture" },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="min-h-screen flex flex-col bg-white text-zinc-900">
            <Navbar />

            {/* Header */}
            <header className="w-full pt-32 pb-12 px-6 md:px-12 text-center fade-in-up">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-6 font-medium">
                    Selected Works
                </p>
                <h1 className="text-4xl md:text-6xl font-light mb-8 text-zinc-900">
                    Our Portfolio
                </h1>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
                    {filterButtons.map((btn) => (
                        <button
                            key={btn.value}
                            onClick={() => setActiveFilter(btn.value)}
                            className={`text-xs uppercase tracking-widest pb-1 transition-all border-b ${activeFilter === btn.value
                                ? "border-black text-black font-medium"
                                : "border-transparent text-zinc-400 hover:text-black"
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </header>

            {/* Projects Grid */}
            <section className="w-full px-6 md:px-12 pb-24 flex-1">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100">
                                <Image
                                    src={project.image}
                                    alt={`Project ${index + 1}`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
