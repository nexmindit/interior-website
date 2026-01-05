import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-manrope",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="scroll-smooth">
            <body className={`${manrope.variable} antialiased bg-white text-black`}>
                {children}
            </body>
        </html>
    );
}
