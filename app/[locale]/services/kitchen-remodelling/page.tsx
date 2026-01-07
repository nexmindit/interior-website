import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Navbar from "../../../components/Navbar";
import { Package, Layers, LayoutGrid, Lamp, Grid3X3, Settings2 } from "lucide-react";

export async function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'th' }];
}

const heroImage =
	"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop";

const showcaseImages = [
	"https://images.unsplash.com/photo-1539922980492-38f6673af8dd?q=80&w=2670&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop",
];

const ctaImage =
	"https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2674&auto=format&fit=crop";

export default async function KitchenRemodelingPage({
	params
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("services");
	const tKitchen = await getTranslations("services.kitchen");

	const features = [
		{
			icon: Package,
			titleKey: "customCabinetry",
			descKey: "customCabinetryDesc",
		},
		{
			icon: Layers,
			titleKey: "countertops",
			descKey: "countertopsDesc",
		},
		{
			icon: LayoutGrid,
			titleKey: "functionalLayout",
			descKey: "functionalLayoutDesc",
		},
		{
			icon: Lamp,
			titleKey: "lightingDesign",
			descKey: "lightingDesignDesc",
		},
		{
			icon: Grid3X3,
			titleKey: "tiling",
			descKey: "tilingDesc",
		},
		{
			icon: Settings2,
			titleKey: "applianceIntegration",
			descKey: "applianceIntegrationDesc",
		},
	];

	return (
		<div className="bg-white text-black">
			<Navbar />

			<main className="flex min-h-screen flex-col pt-20 md:pt-24">
				{/* Hero */}
				<header className="relative w-full overflow-hidden">
					<div className="relative h-[60vh] w-full md:h-[70vh]">
						<Image
							src={heroImage}
							alt="Luxury Modern Kitchen"
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/60" />
					</div>

					<div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
						<div className="space-y-4 max-w-3xl fade-in-up">
							<p className="text-sm uppercase tracking-[0.2em] text-white/90">{t("ourServices")}</p>
							<h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
								{tKitchen("title")}
							</h1>
							<p className="text-sm font-light text-white/90 md:text-base">
								{tKitchen("subtitle")}
							</p>
						</div>
					</div>
				</header>

				{/* Overview */}
				<section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
					<h2 className="mb-8 text-2xl font-semibold md:text-3xl">{tKitchen("recipeTitle")}</h2>
					<p className="mb-12 text-lg font-light leading-relaxed text-zinc-600">
						{tKitchen("recipeDesc")}
					</p>

					{/* Image Grid */}
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="h-64 overflow-hidden rounded-sm md:h-80">
							<Image
								src={showcaseImages[0]}
								alt="Marble Countertop Detail"
								width={400}
								height={320}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
							/>
						</div>
						<div className="h-64 overflow-hidden rounded-sm md:h-80 md:col-span-2">
							<Image
								src={showcaseImages[1]}
								alt="Modern Kitchen Island"
								width={800}
								height={320}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
							/>
						</div>
					</div>
				</section>

				{/* Features Grid */}
				<section className="w-full bg-zinc-50 px-6 py-24 md:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map(({ icon: Icon, titleKey, descKey }) => (
								<div
									key={titleKey}
									className="group rounded-sm border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-black hover:shadow-lg"
								>
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 transition-colors group-hover:bg-black group-hover:text-white">
										<Icon className="h-6 w-6 stroke-1" />
									</div>
									<h3 className="mb-3 text-xl font-semibold">{tKitchen(titleKey)}</h3>
									<p className="text-sm font-light leading-relaxed text-zinc-600">{tKitchen(descKey)}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="relative mt-12 flex h-[500px] w-full items-center justify-center">
					<div className="absolute inset-0">
						<Image
							src={ctaImage}
							alt={tKitchen("diningNook")}
							fill
							sizes="100vw"
							className="object-cover grayscale brightness-50"
						/>
					</div>
					<div className="relative z-10 px-6 text-center">
						<h2 className="mb-6 text-3xl font-semibold text-white md:text-5xl">
							{tKitchen("ctaTitle")}
						</h2>
						<p className="mb-10 max-w-xl mx-auto font-light text-zinc-300">
							{tKitchen("ctaDesc")}
						</p>
						<Link
							href="/contactus"
							className="inline-block bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-zinc-200"
						>
							{tKitchen("startProject")}
						</Link>
					</div>
				</section>

			</main>
		</div>
	);
}
