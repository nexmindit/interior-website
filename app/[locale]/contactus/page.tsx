"use client";

import Navbar from "../../components/Navbar";
import { useTranslations } from "next-intl";
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

const socialLinks = [
	{ label: "Facebook", href: "https://facebook.com", icon: Facebook, hover: "hover:border-[#1877F2] hover:text-[#1877F2]" },
	{ label: "Instagram", href: "https://instagram.com", icon: Instagram, hover: "hover:border-[#E4405F] hover:text-[#E4405F]" },
	{ label: "TikTok", href: "https://www.tiktok.com", icon: ArrowUpRight, hover: "hover:border-black hover:text-black" },
	{ label: "Line", href: "https://line.me/en/", icon: MessageCircle, hover: "hover:border-[#00B900] hover:text-[#00B900]" },
];

export default function ContactPage() {
	const t = useTranslations("contact");

	const contactDetails = [
		{
			labelKey: "visitUs",
			value: "Ocean Tower II Building, 75/44 (23A Unit B) ชั้น 23, Sukhumvit 19 (Wattana), Klongtoey Nua, Bangkok 10110 Thailand",
			icon: MapPin,
		},
		{
			labelKey: "call",
			value: "+66 866 558 408",
			href: "tel:+66866558408",
			icon: Phone,
		},
		{
			labelKey: "email",
			value: "aomjai@regenlanes.com",
			href: "mailto:aomjai@regenlanes.com",
			icon: Mail,
		},
		{
			labelKey: "lineOfficial",
			value: "@regenlanes",
			href: "https://line.me/en/",
			icon: Globe,
		},
	];

	return (
		<div className="bg-white text-black">
			<Navbar />

			<main className="pt-28 pb-20">
				<section className="px-6 md:px-12">
					<div className="mx-auto max-w-5xl text-center">
						<p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">{t("getInTouch")}</p>
						<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">{t("title")}</h1>
						<p className="mt-5 text-lg text-zinc-600">
							{t("description")}
						</p>
					</div>
				</section>

				<section className="px-6 md:px-12 mt-14">
					<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="rounded-xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
								<div className="flex items-center justify-between gap-4">
									<div>
										<h2 className="text-2xl font-semibold">{t("contactInfo")}</h2>
										<p className="mt-1 text-sm text-gray-500">{t("companyName")}</p>
									</div>
									<span className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("hours")}</span>
								</div>

								<div className="mt-6 space-y-6">
									{contactDetails.map(({ labelKey, value, href, icon: Icon }) => (
										<div
											key={labelKey}
											className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50 px-4 py-4"
										>
											<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-white text-black shadow-sm">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<p className="text-xs uppercase tracking-[0.2em] text-gray-500">{t(labelKey)}</p>
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
									<h3 className="text-xl font-semibold">{t("connectWithUs")}</h3>
									<span className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("social")}</span>
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
									<p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">{t("startProject")}</p>
									<h3 className="mt-3 text-2xl font-semibold">{t("sendUsMessage")}</h3>
									<p className="mt-2 text-sm text-gray-600">{t("respondTime")}</p>
								</div>
								<ArrowUpRight className="h-5 w-5 text-gray-400" />
							</div>

							<form className="mt-8 space-y-6">
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<div className="space-y-2">
										<label className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("name")}</label>
										<input
											type="text"
											name="name"
											placeholder={t("yourName")}
											className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("emailLabel")}</label>
										<input
											type="email"
											name="email"
											placeholder={t("emailPlaceholder")}
											className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("subject")}</label>
									<input
										type="text"
										name="subject"
										placeholder={t("subjectPlaceholder")}
										className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-xs uppercase tracking-[0.2em] text-gray-500">{t("message")}</label>
									<textarea
										name="message"
										rows={4}
										placeholder={t("messagePlaceholder")}
										className="w-full border-b border-gray-300 bg-transparent pb-3 text-sm outline-none transition focus:border-black"
									/>
								</div>

								<button
									type="button"
									className="w-full bg-black py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-gray-800"
								>
									{t("sendMessage")}
								</button>
							</form>
						</div>
					</div>
				</section>

				<section className="px-6 md:px-12 mt-16">
					<div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
						<iframe
							title="Regen Lanes location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5447!2d100.5625!3d13.7445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee52d34e01f%3A0x5edc6a8395a5d2d0!2sOcean%20Tower%20II!5e0!3m2!1sen!2sth!4v1702700000000!5m2!1sen!2sth"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="h-[400px] w-full grayscale transition duration-700 hover:grayscale-0"
						></iframe>
					</div>
				</section>

			</main>
		</div>
	);
}
