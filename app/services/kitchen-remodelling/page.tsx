import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import { Package, Layers, LayoutGrid, Lamp, Grid3X3, Settings2 } from "lucide-react";

const heroImage =
	"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop";

const showcaseImages = [
	"https://images.unsplash.com/photo-1539922980492-38f6673af8dd?q=80&w=2670&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop",
];

const features = [
	{
		icon: Package,
		title: "Custom Cabinetry",
		copy: "Bespoke joinery designed to maximize storage and match your aesthetic. Featuring soft-close hardware and premium finishes tailored to your space.",
	},
	{
		icon: Layers,
		title: "Countertops & Surfaces",
		copy: "Exquisite and durable surfaces including Quartz, Granite, Marble, and Sintered Stone, precision-cut for a flawless and hygienic fit.",
	},
	{
		icon: LayoutGrid,
		title: "Functional Layout",
		copy: "Expert space planning that optimizes the \"work triangle,\" islands, and traffic flow to ensure your kitchen is practical for cooking and socializing.",
	},
	{
		icon: Lamp,
		title: "Lighting Design",
		copy: "Layered lighting schemes including under-cabinet task lighting, pendant statement pieces, and ambient mood lighting.",
	},
	{
		icon: Grid3X3,
		title: "Tiling & Backsplash",
		copy: "Curated selection of tiles, mosaics, or stone slabs to create stunning backsplashes that serve as the visual centerpiece of the room.",
	},
	{
		icon: Settings2,
		title: "Appliances Integration",
		copy: "Seamless installation of built-in ovens, concealed refrigerators, and smart kitchen systems for a streamlined and modern look.",
	},
];

const ctaImage =
	"https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2674&auto=format&fit=crop";

export default function KitchenRemodelingPage() {
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
							<p className="text-[10px] uppercase tracking-[0.2em] text-white/90">Our Services</p>
							<h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
								Kitchen<br />
								<span className="italic font-light">Remodeling</span>
							</h1>
							<p className="text-sm font-light text-white/90 md:text-base">
								Where culinary precision meets design elegance. The heart of your home, reimagined.
							</p>
						</div>
					</div>
				</header>

				{/* Overview */}
				<section className="w-full max-w-5xl mx-auto px-6 py-24 text-center">
					<h2 className="mb-8 text-2xl font-semibold md:text-3xl">A recipe for perfection.</h2>
					<p className="mb-12 text-lg font-light leading-relaxed text-zinc-600">
						We specialize in creating kitchens that are as beautiful as they are functional. From custom cabinetry and
						premium countertops to intelligent appliance integration and ergonomic layouts, every detail is crafted to
						enhance your culinary experience.
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
							{features.map(({ icon: Icon, title, copy }) => (
								<div
									key={title}
									className="group rounded-sm border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-black hover:shadow-lg"
								>
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 transition-colors group-hover:bg-black group-hover:text-white">
										<Icon className="h-6 w-6 stroke-1" />
									</div>
									<h3 className="mb-3 text-xl font-semibold">{title}</h3>
									<p className="text-sm font-light leading-relaxed text-zinc-600">{copy}</p>
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
							alt="Kitchen Dining Area"
							fill
							sizes="100vw"
							className="object-cover grayscale brightness-50"
						/>
					</div>
					<div className="relative z-10 px-6 text-center">
						<h2 className="mb-6 text-3xl font-semibold text-white md:text-5xl">
							Ready to cook in style?
						</h2>
						<p className="mb-10 max-w-xl font-light text-zinc-300">
							Let us help you design a kitchen that brings your family together.
						</p>
						<Link
							href="/contactus"
							className="inline-block bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-zinc-200"
						>
							Start Your Kitchen Project
						</Link>
					</div>
				</section>

			</main>
		</div>
	);
}
