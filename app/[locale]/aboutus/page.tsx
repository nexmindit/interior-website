"use client";

import Image from "next/image";
import { Link } from "../../i18n/navigation";
import Navbar from "../../components/Navbar";
import { useTranslations } from "next-intl";
import {
	Award,
	CheckCircle2,
	Compass,
	Eye,
	Hammer,
	Ruler,
	Sparkles,
} from "lucide-react";

const heroImage =
	"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop";
const workshopImage =
	"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2400&auto=format&fit=crop";

export default function AboutPage() {
	const t = useTranslations("about");

	const values = [
		{
			Icon: Award,
			titleKey: "values.craftsmanshipFirst",
			descKey: "values.craftsmanshipFirstDesc",
		},
		{
			Icon: Ruler,
			titleKey: "values.precisionPlanning",
			descKey: "values.precisionPlanningDesc",
		},
		{
			Icon: Hammer,
			titleKey: "values.endToEnd",
			descKey: "values.endToEndDesc",
		},
		{
			Icon: Sparkles,
			titleKey: "values.minimalWarm",
			descKey: "values.minimalWarmDesc",
		},
	];

	const philosophyPoints = [
		t("sustainableMaterial"),
		t("clientCentric"),
		t("precisionEngineering"),
	];

	return (
		<div className="bg-white text-zinc-900">
			<Navbar />

			<main className="pt-24 md:pt-28">
				<section className="px-6 md:px-12 text-center">
					<p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-5 font-semibold">
						{t("whoWeAre")}
					</p>
					<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
						{t("title")}
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-zinc-600">
						{t("description")}
					</p>
				</section>

				<section className="px-6 md:px-12 mt-14 mb-24">
					<div className="relative h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl">
						<Image
							src={heroImage}
							alt="Regen Lanes studio interior"
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/10" />
					</div>
				</section>

				<section className="bg-zinc-50 py-20 px-6 md:px-12 border-y border-zinc-100">
					<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
						{[
							{
								Icon: Compass,
								titleKey: "ourMission",
								descKey: "missionText",
							},
							{
								Icon: Eye,
								titleKey: "ourVision",
								descKey: "visionText",
							},
						].map(({ Icon, titleKey, descKey }) => (
							<div
								key={titleKey}
								className="flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300"
							>
								<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-black">
									<Icon className="h-8 w-8" />
								</div>
								<h2 className="text-2xl font-semibold text-black mb-4">{t(titleKey)}</h2>
								<p className="text-zinc-600 leading-relaxed max-w-md">{t(descKey)}</p>
							</div>
						))}
					</div>
				</section>

				<section className="py-20 px-6 md:px-12">
					<div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
						<div className="lg:col-span-5 space-y-6">
							<p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">{t("ourPhilosophy")}</p>
							<h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
								{t("craftsmanshipTitle")}
							</h2>
							<p className="text-zinc-600 leading-relaxed">
								{t("philosophyDescription")}
							</p>
							<div className="space-y-4">
								{philosophyPoints.map((item) => (
									<div key={item} className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-black" />
										<span className="text-zinc-700">{item}</span>
									</div>
								))}
							</div>
						</div>

						<div className="lg:col-span-7">
							<div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-2xl">
								<Image
									src={workshopImage}
									alt="Workshop and material library"
									fill
									sizes="(min-width: 1024px) 60vw, 100vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
							</div>
						</div>
					</div>
				</section>


				<section className="w-full py-24 bg-black text-white text-center px-6">
					<h2 className="text-3xl md:text-5xl font-serif mb-6">
						{t("readyToTransform")}
					</h2>
					<p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
						{t("letDiscuss")}
					</p>
					<Link
						href="/contactus"
						className="inline-block px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-gray-200 transition-colors"
					>
						{t("startAProject")}
					</Link>
				</section>
			</main>
		</div>
	);
}
