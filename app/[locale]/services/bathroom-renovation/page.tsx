import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Navbar from "../../../components/Navbar";
import { Droplets, Grid, ShowerHead, BoxSelect, Wind, Gem } from "lucide-react";

export async function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'th' }];
}

const heroImage =
	"https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?q=80&w=2574&auto=format&fit=crop";

const bathtubImage =
	"https://plus.unsplash.com/premium_photo-1670360414883-b06c690ba80b?q=80&w=2671&auto=format&fit=crop";

const textureImage =
	"https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2670&auto=format&fit=crop";

export default async function BathroomRenovationPage({
	params
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("services");
	const tBathroom = await getTranslations("services.bathroom");

	const features = [
		{
			icon: Droplets,
			titleKey: "waterproofing",
			descKey: "waterproofingDesc",
		},
		{
			icon: Grid,
			titleKey: "tilingStone",
			descKey: "tilingStoneDesc",
		},
		{
			icon: ShowerHead,
			titleKey: "premiumFixtures",
			descKey: "premiumFixturesDesc",
		},
		{
			icon: BoxSelect,
			titleKey: "customVanities",
			descKey: "customVanitiesDesc",
		},
		{
			icon: Wind,
			titleKey: "lightingVentilation",
			descKey: "lightingVentilationDesc",
		},
		{
			icon: Gem,
			titleKey: "luxuryFeatures",
			descKey: "luxuryFeaturesDesc",
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
							alt="Luxury Bathroom with Bathtub"
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/60" />
					</div>

					<div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
						<div className="space-y-4 max-w-3xl fade-in-up">
							<p className="text-xs uppercase tracking-[0.2em] text-white/90">{t("ourServices")}</p>
							<h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
								{tBathroom("title")}
							</h1>
							<p className="text-sm font-light text-white/90 md:text-base">
								{tBathroom("subtitle")}
							</p>
						</div>
					</div>
				</header>

				{/* Overview */}
				<section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
					<h2 className="mb-8 text-2xl font-semibold md:text-3xl">{tBathroom("luxuryTitle")}</h2>
					<p className="text-lg font-light leading-relaxed text-zinc-600">
						{tBathroom("luxuryDesc")}
					</p>
				</section>

				{/* Features Grid */}
				<section className="w-full bg-zinc-50 px-6 py-24 md:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map(({ icon: Icon, titleKey, descKey }) => (
								<div
									key={titleKey}
									className="group rounded-sm border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-t-2 hover:border-t-black hover:shadow-lg"
								>
									<div className="mb-6 transition-transform group-hover:scale-110">
										<Icon className="h-8 w-8 stroke-1 text-black" />
									</div>
									<h3 className="mb-3 text-xl font-semibold">{tBathroom(titleKey)}</h3>
									<p className="text-sm font-light leading-relaxed text-zinc-600">{tBathroom(descKey)}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Visual Showcase */}
				<section className="w-full overflow-hidden px-6 py-24 md:px-12">
					<div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
						<div className="relative lg:w-1/2">
							<div className="relative z-10 overflow-hidden rounded-sm shadow-xl">
								<Image
									src={bathtubImage}
									alt="Freestanding Bathtub"
									width={600}
									height={700}
									className="h-auto w-full transition-transform duration-700 hover:scale-105"
								/>
							</div>
							<div className="absolute -bottom-10 -right-10 z-0 hidden w-2/3 overflow-hidden rounded-sm shadow-lg md:block">
								<Image
									src={textureImage}
									alt="Marble Texture"
									width={400}
									height={300}
									className="h-auto w-full"
								/>
							</div>
						</div>

						<div className="lg:w-1/2 lg:pl-12">
							<p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">{tBathroom("experienceTitle")}</p>
							<h2 className="mb-8 text-3xl font-semibold leading-tight md:text-4xl">
								{tBathroom("serenityTitle")}
							</h2>
							<div className="space-y-6 text-zinc-600 font-light">
								<p>
									{tBathroom("serenityDesc1")}
								</p>
								<p>
									{tBathroom("serenityDesc2")}
								</p>
							</div>

							<div className="mt-10">
								<Link
									href="/contactus"
									className="inline-flex items-center gap-2 border border-black px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
								>
									{tBathroom("planRenovation")}
								</Link>
							</div>
						</div>
					</div>
				</section>

			</main>
		</div>
	);
}
