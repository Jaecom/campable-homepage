import React from "react";
import Image from "next/image";
import AccessibilityIcon from "@/public/icons/accessibility_icon.svg";
import H3 from "@/src/components/atoms/H3";
import H2 from "@/src/components/atoms/H2";
import { useTranslations } from "next-intl";

const HomePage = () => {
	const t = useTranslations("HomePage");

	return (
		<div>
			<section className="h-[500px] relative flex justify-center items-center mt-[-px] border-solid border-b-[2px] border-primary">
				<Image src="/images/home_background.png" fill style={{ objectFit: "cover" }} alt="background image" />
				<div className="z-10 text-center">
					<H3>CampAble</H3>
					<p className="font-lora font-semibold text-[20px] md:text-[30px]">
						Empowering people with disability <br />
						to believe in their ability
					</p>
				</div>
			</section>
			<section className="bg-background px-[10px] py-[80px] gap-x-[100px] border-solid border-b-[0.5px] border-white">
				<div className="flex flex-col text-center md:text-left md:flex-row items-center justify-center">
					<div className="max-w-[650px]">
						<H2>Who are we?</H2>
						<div className="md:hidden flex justify-center">
							<Image
								src="/images/home_2_camp.png"
								width={250}
								height={250}
								alt="camp image"
								style={{ objectFit: "cover" }}
							/>
						</div>
						<p>{t("who_are_we")}</p>
					</div>

					<div className="hidden md:block">
						<Image
							src="/images/home_2_camp.png"
							width={400}
							height={400}
							alt="camp image"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</section>
			<section className="bg-background flex flex-col items-center justify-center px-[10px] py-[80px] border-solid border-b-[0.5px] border-white">
				<div className="flex flex-col text-center items-center max-w-[650px] gap-y-3 ">
					<H3>Purpose</H3>
					<AccessibilityIcon />
					<p className="font-lora font-bold">Empowering people with disability to believe in their ability</p>
					<p className="break-keep">{t("purpose")}</p>
				</div>
			</section>
			<section className="bg-background flex item-center justify-center px-[10px] py-[80px] relative">
				<Image src="/images/home_4_background.png" fill style={{ objectFit: "cover" }} alt="background image" />
				<div className="flex flex-col text-center items-center max-w-[650px] gap-y-3 z-10">
					<H3>Vision</H3>
					<p className="font-lora font-bold">&quot;To provide an all-in-one accessibility solution&ldquo;</p>
					<p className="break-keep">{t("vision")}</p>
				</div>
			</section>
			<footer className="bg-background flex item-center justify-center px-[10px] py-[80px]">
				Hi, we are CampAble :)
			</footer>
		</div>
	);
};

export default HomePage;
