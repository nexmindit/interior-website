"use client";

import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

import Navbar from "../../../components/Navbar";
import {
	ArrowRight,
	ClipboardCheck,
	Hammer,
	Layers,
	Lightbulb,
	Sofa,
	Zap,
} from "lucide-react";

const heroImage =
	"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop";

const galleryImages = [
	{
		src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2676&auto=format&fit=crop",
		alt: "Renovation process in progress",
	},
	{
		src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2674&auto=format&fit=crop",
		alt: "Finished modern interior",
	},
];

export default function FullHouseInteriorRenovationPage() {
	const t = useTranslations("services");
	const tFull = useTranslations("services.fullRenovation");

	const features = [
		{
			titleKey: "demolitionStructure",
			descKey: "demolitionStructureDesc",
			icon: Hammer,
		},
		{
			titleKey: "mepSystems",
			descKey: "mepSystemsDesc",
			icon: Zap,
		},
		{
			titleKey: "flooringFinishes",
			descKey: "flooringFinishesDesc",
			icon: Layers,
		},
		{
			titleKey: "lightingDesign",
			descKey: "lightingDesignDesc",
			icon: Lightbulb,
		},
		{
			titleKey: "builtInsFurniture",
			descKey: "builtInsFurnitureDesc",
			icon: Sofa,
		},
		{
			titleKey: "projectManagement",
			descKey: "projectManagementDesc",
			icon: ClipboardCheck,
		},
	];

	return (
		<div className="flex min-h-screen flex-col bg-white text-black">
			<Navbar />

			<main className="flex flex-1 flex-col pt-20 md:pt-24">
				<header className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden md:h-[60vh]">
					<div className="absolute inset-0 bg-gray-900">
						<Image
							src={heroImage}
							alt="Full Home Renovation"
							fill
							priority
							sizes="100vw"
							className="object-cover opacity-60"
						/>
					</div>
					<div className="relative z-10 px-6 text-center text-white">
						<p className="mb-4 text-[10px] uppercase tracking-[0.2em] opacity-90 md:text-xs">{t("ourServices")}</p>
						<h1 className="text-4xl leading-tight md:text-6xl">{tFull("title")}</h1>
					</div>
				</header>

				<section className="mx-auto w-full max-w-4xl px-6 py-20 text-center md:px-12 md:py-24">
					<h2 className="mb-8 text-2xl md:text-3xl">{tFull("subtitle")}</h2>
					<p className="text-lg font-light leading-relaxed text-zinc-600">
						{tFull("description")}
					</p>
				</section>

				<section className="w-full bg-zinc-50 px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map(({ titleKey, descKey, icon: Icon }) => (
								<div
									key={titleKey}
									className="rounded-sm border border-zinc-100 bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
								>
									<Icon className="mb-6 h-8 w-8 stroke-1 text-black" />
									<h3 className="mb-3 text-xl">{tFull(titleKey)}</h3>
									<p className="text-sm font-light leading-relaxed text-zinc-600">{tFull(descKey)}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="w-full px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div className="grid h-[600px] grid-rows-2 gap-4">
							{galleryImages.map(({ src, alt }) => (
								<div key={src} className="relative h-full overflow-hidden rounded-sm">
									<Image
										src={src}
										alt={alt}
										fill
										sizes="(min-width: 1024px) 50vw, 100vw"
										className="object-cover"
									/>
								</div>
							))}
						</div>

						<div>
							<p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">{tFull("whyFullRenovation")}</p>
							<h2 className="mb-8 text-3xl leading-tight md:text-4xl">{tFull("whyTitle")}</h2>
							<div className="space-y-6 text-zinc-600">
								<p>
									{tFull("whyDesc1")}
								</p>
								<p>
									{tFull("whyDesc2")}
								</p>
							</div>
							<div className="mt-10">
								<Link
									href="/contactus"
									className="inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-medium uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-60"
								>
									{t("requestConsultation")}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
