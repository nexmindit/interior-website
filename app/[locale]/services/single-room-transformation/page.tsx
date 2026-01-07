import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Navbar from "../../../components/Navbar";
import { Bed, Monitor, Shirt, Sofa } from "lucide-react";

export async function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'th' }];
}

const heroImage =
	"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop";

const roomImages = {
	livingRoom: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2600&auto=format&fit=crop",
	masterBedroom: "https://images.unsplash.com/photo-1757524619631-ab883c3a7de5?q=80&w=2670&auto=format&fit=crop",
	homeOffice: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop",
	walkInCloset: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=2574&auto=format&fit=crop",
};

export default async function SingleRoomTransformationPage({
	params
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("services");
	const tSingle = await getTranslations("services.singleRoom");

	const roomCards = [
		{
			titleKey: "livingRoom",
			subtitleKey: "livingSpaces",
			descKey: "livingRoomDesc",
			icon: Sofa,
			image: roomImages.livingRoom,
		},
		{
			titleKey: "masterBedroom",
			subtitleKey: "restRetreat",
			descKey: "masterBedroomDesc",
			icon: Bed,
			image: roomImages.masterBedroom,
		},
		{
			titleKey: "homeOffice",
			subtitleKey: "workspace",
			descKey: "homeOfficeDesc",
			icon: Monitor,
			image: roomImages.homeOffice,
		},
		{
			titleKey: "walkInCloset",
			subtitleKey: "organization",
			descKey: "walkInClosetDesc",
			icon: Shirt,
			image: roomImages.walkInCloset,
		},
	];

	const reasons = [
		{ titleKey: "costEffective", descKey: "costEffectiveDesc" },
		{ titleKey: "minimalDisruption", descKey: "minimalDisruptionDesc" },
		{ titleKey: "targetedNeeds", descKey: "targetedNeedsDesc" },
		{ titleKey: "instantRefresh", descKey: "instantRefreshDesc" },
	];

	return (
		<div className="flex min-h-screen flex-col bg-white text-black">
			<Navbar />

			<main className="flex flex-1 flex-col pt-20 md:pt-24">
				<header className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden md:h-[60vh]">
					<div className="absolute inset-0 bg-gray-900">
						<Image
							src={heroImage}
							alt="Modern living room"
							fill
							priority
							sizes="100vw"
							className="object-cover opacity-60"
						/>
					</div>
					<div className="relative z-10 px-6 text-center text-white fade-in-up">
						<p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-90">{t("ourServices")}</p>
						<h1 className="mb-6 text-4xl leading-tight md:text-6xl lg:text-7xl">
							{tSingle("subtitle")}
						</h1>
						<p className="mx-auto max-w-xl text-sm font-light opacity-90 md:text-base">
							{tSingle("heroDesc")}
						</p>
					</div>
				</header>

				<section className="mx-auto w-full max-w-4xl px-6 py-20 text-center md:px-12 md:py-24">
					<h2 className="mb-8 text-2xl text-black md:text-3xl">{tSingle("focusTitle")}</h2>
					<p className="text-lg font-light leading-relaxed text-zinc-600">
						{tSingle("focusDesc")}
					</p>
				</section>

				<section className="w-full bg-zinc-50 px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
						{roomCards.map(({ titleKey, subtitleKey, descKey, icon: Icon, image }) => (
							<div
								key={titleKey}
								className="group overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={image}
										alt={tSingle(titleKey)}
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
								</div>
								<div className="p-8 md:p-10">
									<div className="mb-4 flex items-center gap-3 text-black">
										<Icon className="h-5 w-5" />
										<span className="text-xs font-medium uppercase tracking-[0.2em]">{tSingle(subtitleKey)}</span>
									</div>
									<h3 className="mb-4 text-2xl">{tSingle(titleKey)}</h3>
									<p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">{tSingle(descKey)}</p>
									<Link
										href="/contactus"
										className="border-b border-zinc-300 pb-1 text-xs transition-colors hover:border-black"
									>
										{tSingle("inquireNow")}
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="w-full px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto flex max-w-5xl flex-col gap-12 border-t border-zinc-100 pt-16 md:flex-row">
						<div className="md:w-1/3">
							<h3 className="mb-4 text-2xl">{tSingle("whyTitle")}</h3>
						</div>
						<div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
							{reasons.map(({ titleKey, descKey }) => (
								<div key={titleKey}>
									<h4 className="mb-2 font-medium text-black">{tSingle(titleKey)}</h4>
									<p className="text-sm font-light text-zinc-600">{tSingle(descKey)}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
