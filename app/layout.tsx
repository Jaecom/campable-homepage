import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dmSans" });

export const metadata: Metadata = {
	title: "CampAble",
	description: "For accessibility and inclusion",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${lora.variable} ${dmSans.variable} text-white`}>
			<body>{children}</body>
		</html>
	);
}
