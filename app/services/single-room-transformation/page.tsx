import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import { Bed, Monitor, Shirt, Sofa } from "lucide-react";

const heroImage =
	"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop";

const roomCards = [
	{
		title: "Living Room & Lounge",
		subtitle: "Living Spaces",
		copy:
			"The center of domestic life. We design living rooms that balance aesthetic appeal with everyday comfort, featuring custom media units, harmonious layouts, and sophisticated lighting schemes.",
		icon: Sofa,
		image:
			"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2600&auto=format&fit=crop",
	},
	{
		title: "Master Bedroom Suites",
		subtitle: "Rest & Retreat",
		copy:
			"Create your personal sanctuary. Our bedroom renovations focus on acoustics, soothing palettes, and integrated headboards to ensure deep rest and relaxation.",
		icon: Bed,
		image: "https://images.unsplash.com/photo-1757524619631-ab883c3a7de5?q=80&w=2670&auto=format&fit=crop",
	},
	{
		title: "Home Office & Studio",
		subtitle: "Workspace",
		copy:
			"Productivity meets style. We design ergonomic workspaces with custom shelving, optimized lighting, and cable management solutions to keep you focused and inspired.",
		icon: Monitor,
		image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop",
	},
	{
		title: "Walk-in Closets",
		subtitle: "Organization",
		copy:
			"Redesigned with functionality and elegance. Custom joinery, island units, and dedicated shoe displays turn your dressing area into a boutique experience.",
		icon: Shirt,
		image: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=2574&auto=format&fit=crop",
	},
];

const reasons = [
	{
		title: "Cost Effective",
		copy:
			"Focus your budget on high-quality materials for a smaller area to achieve a luxurious finish without overspending.",
	},
	{
		title: "Minimal Disruption",
		copy: "Faster turnaround times mean less impact on your daily life compared to a full home renovation.",
	},
	{
		title: "Targeted Needs",
		copy: "Solve specific pain points—like a lack of storage or poor lighting—exactly where they matter most.",
	},
	{
		title: "Instant Refresh",
		copy: "Transform the mood of your home instantly by upgrading the spaces you use the most.",
	},
];

export default function SingleRoomTransformationPage() {
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
						<p className="mb-4 text-[10px] uppercase tracking-[0.2em] opacity-90 md:text-xs">Our Services</p>
						<h1 className="mb-6 text-4xl leading-tight md:text-6xl lg:text-7xl">
							The Art of the <br />
							<span className="italic font-light">Single Space</span>
						</h1>
						<p className="mx-auto max-w-xl text-sm font-light opacity-90 md:text-base">
							Redefining your home, one room at a time.
						</p>
					</div>
				</header>

				<section className="mx-auto w-full max-w-4xl px-6 py-20 text-center md:px-12 md:py-24">
					<h2 className="mb-8 text-2xl text-black md:text-3xl">Focused design, maximum impact.</h2>
					<p className="text-lg font-light leading-relaxed text-zinc-600">
						Not every project requires a whole-home overhaul. Whether you are looking to modernize a dated living area, create a
						productive home office, or build the walk-in closet of your dreams, we bring the same level of precision and luxury to
						single-room transformations as we do to full-scale renovations.
					</p>
				</section>

				<section className="w-full bg-zinc-50 px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
						{roomCards.map(({ title, subtitle, copy, icon: Icon, image }) => (
							<div
								key={title}
								className="group overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={image}
										alt={title}
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
								</div>
								<div className="p-8 md:p-10">
									<div className="mb-4 flex items-center gap-3 text-black">
										<Icon className="h-5 w-5" />
										<span className="text-xs font-medium uppercase tracking-[0.2em]">{subtitle}</span>
									</div>
									<h3 className="mb-4 text-2xl">{title}</h3>
									<p className="mb-6 text-sm font-light leading-relaxed text-zinc-600">{copy}</p>
									<Link
										href="/contactus"
										className="border-b border-zinc-300 pb-1 text-xs transition-colors hover:border-black"
									>
										Inquire Now
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="w-full px-6 py-20 md:px-12 md:py-24">
					<div className="mx-auto flex max-w-5xl flex-col gap-12 border-t border-zinc-100 pt-16 md:flex-row">
						<div className="md:w-1/3">
							<h3 className="mb-4 text-2xl">Why upgrade a single room?</h3>
						</div>
						<div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
							{reasons.map(({ title, copy }) => (
								<div key={title}>
									<h4 className="mb-2 font-medium text-black">{title}</h4>
									<p className="text-sm font-light text-zinc-600">{copy}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
