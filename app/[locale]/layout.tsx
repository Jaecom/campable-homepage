import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "@/src/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dmSans" });

export const metadata: Metadata = {
	title: "CampAble",
	description: "For accessibility and inclusion",
};

export default async function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();

	return (
		<html lang={locale} className={`${lora.variable} ${dmSans.variable} text-white`}>
			<body className="bg-background">
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
