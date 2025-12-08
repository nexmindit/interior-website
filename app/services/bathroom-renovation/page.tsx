import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import { Droplets, Grid, ShowerHead, BoxSelect, Wind, Gem } from "lucide-react";

const heroImage =
	"https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?q=80&w=2574&auto=format&fit=crop";

const features = [
	{
		icon: Droplets,
		title: "Waterproofing Systems",
		copy: "Industry-standard membrane applications to ensure zero leaks and long-term protection against moisture damage and mold.",
	},
	{
		icon: Grid,
		title: "Tiling & Stone",
		copy: "Expert installation of ceramic, porcelain, or natural stone tiles with precision grouting for walls and anti-slip floors.",
	},
	{
		icon: ShowerHead,
		title: "Premium Fixtures",
		copy: "Selection and installation of high-end faucets, rain showers, freestanding bathtubs, and modern sanitary ware.",
	},
	{
		icon: BoxSelect,
		title: "Custom Vanities",
		copy: "Floating or floor-standing vanity units designed for optimal storage, topped with durable stone surfaces and integrated sinks.",
	},
	{
		icon: Wind,
		title: "Lighting & Ventilation",
		copy: "Strategic lighting for makeup and mood, combined with quiet, high-efficiency exhaust systems to maintain air quality.",
	},
	{
		icon: Gem,
		title: "Luxury Features",
		copy: "Integration of smart toilets, heated towel rails, steam systems, and niche shelving for that 5-star hotel experience.",
	},
];

const bathtubImage =
	"https://plus.unsplash.com/premium_photo-1670360414883-b06c690ba80b?q=80&w=2671&auto=format&fit=crop";

const textureImage =
	"https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2670&auto=format&fit=crop";

export default function BathroomRenovationPage() {
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
							<p className="text-[10px] uppercase tracking-[0.2em] text-white/90">Our Services</p>
							<h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
								Bathroom<br />
								<span className="italic font-light">Sanctuary</span>
							</h1>
							<p className="text-sm font-light text-white/90 md:text-base">
								Transforming your daily routine into a private wellness ritual.
							</p>
						</div>
					</div>
				</header>

				{/* Overview */}
				<section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
					<h2 className="mb-8 text-2xl font-semibold md:text-3xl">Immerse yourself in luxury.</h2>
					<p className="text-lg font-light leading-relaxed text-zinc-600">
						We elevate bathrooms beyond mere utility. Our renovation services focus on creating a harmonious balance of
						waterproofing integrity, ergonomic design, and luxury aesthetics. From rain showers to freestanding soaking tubs,
						we build spaces where you can truly unwind.
					</p>
				</section>

				{/* Features Grid */}
				<section className="w-full bg-zinc-50 px-6 py-24 md:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map(({ icon: Icon, title, copy }) => (
								<div
									key={title}
									className="group rounded-sm border border-zinc-200 bg-white p-8 transition-all duration-300 hover:border-t-2 hover:border-t-black hover:shadow-lg"
								>
									<div className="mb-6 transition-transform group-hover:scale-110">
										<Icon className="h-8 w-8 stroke-1 text-black" />
									</div>
									<h3 className="mb-3 text-xl font-semibold">{title}</h3>
									<p className="text-sm font-light leading-relaxed text-zinc-600">{copy}</p>
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
							<p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">The Experience</p>
							<h2 className="mb-8 text-3xl font-semibold leading-tight md:text-4xl">
								Serenity in stone and water.
							</h2>
							<div className="space-y-6 text-zinc-600 font-light">
								<p>
									A great bathroom design considers the flow of movement and the tactile experience of materials. We use
									natural stone, warm woods, and matte finishes to create a soothing palette.
								</p>
								<p>
									Whether you dream of a centerpiece freestanding bathtub or a spacious walk-in rain shower, our team
									maximizes every inch to deliver functionality without compromising on style.
								</p>
							</div>

							<div className="mt-10">
								<Link
									href="/contactus"
									className="inline-flex items-center gap-2 border border-black px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white"
								>
									Plan Your Renovation
								</Link>
							</div>
						</div>
					</div>
				</section>

			</main>
		</div>
	);
}
