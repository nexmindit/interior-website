import Navbar from "../components/Navbar";
import {
	Phone,
	Mail,
	MapPin,
	Globe,
	Facebook,
	Instagram,
	MessageCircle,
	ArrowUpRight,
} from "lucide-react";

const contactDetails = [
	{
		label: "Visit us",
		value: "20 Sukhumvit Soi 15, Bangkok 10110, Thailand",
		icon: MapPin,
	},
	{
		label: "Call",
		value: "+66 866 558 408",
		href: "tel:+66866558408",
		icon: Phone,
	},
	{
		label: "Email",
		value: "aomjai@regenlanes.com",
		href: "mailto:aomjai@regenlanes.com",
		icon: Mail,
	},
	{
		label: "Website",
		value: "www.regenlanes.com",
		href: "https://www.regenlanes.com",
		icon: Globe,
	},
];

const socialLinks = [
	{ label: "Facebook", href: "https://facebook.com", icon: Facebook, hover: "hover:border-[#1877F2] hover:text-[#1877F2]" },
	{ label: "Instagram", href: "https://instagram.com", icon: Instagram, hover: "hover:border-[#E4405F] hover:text-[#E4405F]" },
	{ label: "TikTok", href: "https://www.tiktok.com", icon: ArrowUpRight, hover: "hover:border-black hover:text-black" },
	{ label: "Line", href: "https://line.me/en/", icon: MessageCircle, hover: "hover:border-[#00B900] hover:text-[#00B900]" },
];

export default function ContactPage() {
	return (
		<div className="bg-white text-black">
			<Navbar />

			<main className="pt-28 pb-20">
				<section className="px-6 md:px-12">
					<div className="mx-auto max-w-5xl text-center">
						<p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Get In Touch</p>
						<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Contact Us</h1>
						<p className="mt-5 text-lg text-zinc-600">
							Tell us about your renovation or custom furniture needs. We will respond with a tailored scope, timeline, and investment guide.
						</p>
					</div>
				</section>

				<section className="px-6 md:px-12 mt-14">
					<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="rounded-xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
								<div className="flex items-center justify-between gap-4">
									<div>
										<h2 className="text-2xl font-semibold">Contact Information</h2>
										<p className="mt-1 text-sm text-gray-500">Regen Lanes Holding Company Limited</p>
									</div>
									<span className="text-xs uppercase tracking-[0.2em] text-gray-500">Mon - Sat, 9:00 - 18:00</span>
								</div>

								<div className="mt-6 space-y-6">
									{contactDetails.map(({ label, value, href, icon: Icon }) => (
										<div
											key={label}
											className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 px-4 py-4"
										>
											<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-black shadow-sm">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<p className="text-xs uppercase tracking-[0.2em] text-gray-500">{label}</p>
												{href ? (
													<a href={href} className="mt-1 inline-block text-base font-semibold hover:text-gray-600 transition-colors">
														{value}
													</a>
												) : (
													<p className="mt-1 text-base font-semibold">{value}</p>
												)}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
								<div className="flex items-center justify-between">
									<h3 className="text-xl font-semibold">Connect with us</h3>
									<span className="text-xs uppercase tracking-[0.2em] text-gray-500">Social</span>
								</div>
								<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
									{socialLinks.map(({ label, href, icon: Icon, hover }) => (
										<a
											key={label}
											href={href}
											target="_blank"
											rel="noreferrer"
											className={`group flex items-center gap-2 rounded-sm border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition-all ${hover}`}
										>
											<Icon className="h-4 w-4 transition group-hover:scale-110" />
											{label}
										</a>
									))}
								</div>
							</div>
						</div>

						<div className="rounded-xl border border-gray-100 bg-gray-50 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
							<div className="flex items-start justify-between">
								<div>
									<p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Start a project</p>
									<h3 className="mt-3 text-2xl font-semibold">Send us a message</h3>
									<p className="mt-2 text-sm text-gray-600">We typically respond within one business day.</p>
								</div>
								<ArrowUpRight className="h-5 w-5 text-gray-400" />
							</div>

							<form className="mt-8 space-y-6">
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<div className="space-y-2">
										<label className="text-xs uppercase tracking-[0.2em] text-gray-500">Name</label>
										<input
											type="text"
											name="name"
											placeholder="Your name"
											className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</label>
										<input
											type="email"
											name="email"
											placeholder="your@email.com"
											className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-xs uppercase tracking-[0.2em] text-gray-500">Subject</label>
									<input
										type="text"
										name="subject"
										placeholder="Interior Inquiry"
										className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-xs uppercase tracking-[0.2em] text-gray-500">Message</label>
									<textarea
										name="message"
										rows={4}
										placeholder="How can we help you?"
										className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
									/>
								</div>

								<button
									type="button"
									className="w-full bg-black py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-gray-800"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</section>

				<section className="px-6 md:px-12 mt-16">
					<div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
						<iframe
							title="Regen Lanes location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.666373199898!2d100.5562!3d13.7386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee3e7c07447%3A0x6c6e001391694f29!2sSukhumvit%20Soi%2015!5e0!3m2!1sen!2sth!4v1620000000000!5m2!1sen!2sth"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="h-[400px] w-full grayscale transition duration-700 hover:grayscale-0"
						></iframe>
					</div>
				</section>

				<footer className="mt-16 border-t border-gray-100 bg-white px-6 py-12">
					<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-sm bg-black text-xs font-bold text-white">R</div>
							<span className="text-lg font-medium tracking-tight">regenlanes</span>
						</div>
						<p className="text-xs uppercase tracking-[0.2em] text-gray-500">© 2025 Regen Lanes Holding Company Limited.</p>
					</div>
				</footer>
			</main>
		</div>
	);
}
