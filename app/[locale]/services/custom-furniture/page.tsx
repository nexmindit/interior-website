import Image from "next/image";
import { Link } from "../../../i18n/navigation";

import Navbar from "../../../components/Navbar";
import { Award, Camera, Palette, Ruler } from "lucide-react";

const heroImage =
	"https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2574&auto=format&fit=crop";

const categories = [
	{
		title: "Beds",
		image:
			"https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2671&auto=format&fit=crop",
	},
	{
		title: "Tables",
		image:
			"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2576&auto=format&fit=crop",
	},
	{
		title: "Cabinets & Wardrobes",
		image:
			"https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2576&auto=format&fit=crop",
	},
	{
		title: "Shelves & Units",
		image:
			"https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2639&auto=format&fit=crop",
	},
	{
		title: "Office Desks",
		image:
			"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2640&auto=format&fit=crop",
	},
	{
		title: "Built-ins",
		image:
			"https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2674&auto=format&fit=crop",
	},
	{
		title: "TV Units",
		image:
			"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2574&auto=format&fit=crop",
	},
];

const whyCustom = [
	{
		icon: Ruler,
		title: "Perfect Fit",
		copy: "Measurements tailored to the millimeter to fit your specific space constraints.",
	},
	{
		icon: Palette,
		title: "Your Style",
		copy: "Choose your wood, fabric, finish, and hardware. Total creative control.",
	},
	{
		icon: Award,
		title: "Lasting Quality",
		copy: "Built by skilled artisans using durable materials meant to last a lifetime.",
	},
];

export default function FullHouseInteriorRenovationPage() {
	return (
		<div className="bg-white text-black">
			<Navbar />

			<main className="flex min-h-screen flex-col pt-20 md:pt-24">
				{/* Hero */}
				<header className="relative w-full overflow-hidden">
					<div className="relative h-[60vh] w-full md:h-[70vh]">
						<Image
							src={heroImage}
							alt="Custom furniture craftsmanship"
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/70" />
					</div>

					<div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
						<div className="space-y-4 max-w-3xl">
							<p className="text-[10px] uppercase tracking-[0.2em] text-white/80">Our Services</p>
							<h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
								Custom Furniture <br />
								<span className="italic font-light">Manufacturing</span>
							</h1>
							<p className="text-sm font-light text-white/90 md:text-base">
								Bespoke pieces handcrafted to your exact style and measurements.
							</p>
						</div>
					</div>
				</header>

				{/* Value proposition */}
				<section className="w-full bg-zinc-50 px-6 py-20 md:px-12">
					<div className="mx-auto max-w-4xl text-center">
						<div className="mb-8 flex justify-center text-black">
							<Camera className="h-12 w-12 stroke-1" />
						</div>
						<h2 className="mb-6 text-3xl font-semibold md:text-4xl">&quot;Show us a picture, and we recreate it.&quot;</h2>
						<p className="mb-10 text-lg font-light leading-relaxed text-zinc-600">
							Seen a designer piece you love but it doesn&apos;t fit your budget or space? We specialize in recreating
							high-end furniture styles with premium local materials at a fraction of the cost, without compromising on
							quality or aesthetics.
						</p>
						<Link
							href="/contactus"
							className="inline-block bg-black px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-zinc-800"
						>
							Get a Quote
						</Link>
					</div>
				</section>

				{/* Product categories */}
				<section className="w-full px-6 py-20 md:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="mb-14 text-center">
							<h2 className="mb-4 text-2xl font-semibold md:text-3xl">What We Build</h2>
							<div className="mx-auto h-px w-12 bg-black" />
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
							{categories.map(({ title, image }) => (
								<div
									key={title}
									className="group relative aspect-square cursor-pointer overflow-hidden rounded-md bg-zinc-100"
								>
									<Image
										src={image}
										alt={title}
										fill
										sizes="(min-width: 1024px) 25vw, 50vw"
										className="object-cover transition duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 transition group-hover:bg-transparent" />
									<div className="absolute bottom-4 left-4 right-4">
										<p className="text-lg font-semibold tracking-wide text-white md:text-xl">{title}</p>
									</div>
								</div>
							))}

							<div className="group relative flex aspect-square items-center justify-center rounded-md bg-black text-center text-white">
								<Link href="/contactus" className="absolute inset-0 z-10" />
								<div className="p-4">
									<p className="mb-2 text-lg font-semibold md:text-xl">And More</p>
									<p className="text-xs font-light text-zinc-300">Custom requests welcome</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Why custom */}
				<section className="w-full border-t border-zinc-100 px-6 pb-24 md:px-12">
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 pt-12 md:grid-cols-3">
						{whyCustom.map(({ icon: Icon, title, copy }) => (
							<div key={title} className="text-center">
								<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-black">
									<Icon className="h-8 w-8" />
								</div>
								<h3 className="mb-2 text-lg font-semibold">{title}</h3>
								<p className="text-sm font-light text-zinc-600">{copy}</p>
							</div>
						))}
					</div>
				</section>

			</main>
		</div>
	);
}
