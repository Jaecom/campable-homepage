import H1 from "@/src/components/atoms/H1";
import React from "react";
import ListIcon from "@/public/icons/list_item_icon.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AwardsPage = () => {
	const t = useTranslations("AwardsPage");
	const awards_24 = t.raw("awards.2024");
	const awards_23 = t.raw("awards.2023");
	const press_releases = t.raw("press_releases");

	return (
		<div className="bg-background overflow-x-hidden">
			<section className="flex border-y-[0.5px] border-solid border-white py-[40px] pl-[16px] md:pl-[100px] relative">
				<div>
					<H1 className="">Awards</H1>
					<p>{t("description")}</p>
				</div>
				<div className="md:hidden absolute bottom-[-70px] right-[-30px]">
					<Image src="/images/awards_trophy.png" width={120} height={120} alt="trophy" style={{ objectFit: "cover" }} />
				</div>
			</section>
			<section className="flex border-y-[0.5px] border-solid border-white py-[40px] pl-[16px] md:pl-[100px]">
				<div>
					<div>
						<div className="flex items-end">
							<ListIcon />
							<p className="text-primary font-dmSans text-[40px] translate-y-[25%] ml-[10px]">2024</p>
						</div>
						<div className="border-solid border-l-[2px] border-primary translate-x-[9px]">
							<ul className="flex flex-col gap-y-[10px] pt-[20px] ml-[20px]">
								{awards_24.map((text: string) => (
									<li>&#x2022; {text}</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<div className="flex items-end">
							<ListIcon />
							<p className="text-primary font-dmSans text-[40px] translate-y-[25%] ml-[10px]">2023</p>
						</div>
						<div className="border-solid border-l-[2px] border-primary translate-x-[9px]">
							<ul className="flex flex-col gap-y-[10px] pt-[20px] ml-[20px]">
								{awards_23.map((text: string) => (
									<li>&#x2022; {text}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="hidden md:flex items-end">
					<Image src="/images/awards_trophy.png" width={400} height={400} alt="trophy" style={{ objectFit: "cover" }} />
				</div>
			</section>
			<section className="border-b-[0.5px] border-solid border-white py-[40px] pl-[100px] relative">
				<H1>Press Release</H1>
				<div className="md:hidden absolute right-[-100px] top-[-50px]">
					<Image src="/images/awards_press.png" width={180} height={180} alt="press" style={{ objectFit: "cover" }} />
				</div>
			</section>
			<section className="flex border-y-[0.5px] border-solid border-white py-[40px] pl-[16px] md:pl-[0px] ">
				<div className="items-start hidden md:flex">
					<Image src="/images/awards_press.png" width={400} height={400} alt="trophy" style={{ objectFit: "cover" }} />
				</div>
				<div className="border-solid border-l-[2px] border-primary">
					<ul className="flex flex-col gap-y-[50px] ml-[20px]">
						{press_releases.map(
							({
								title,
								content,
								source,
								date,
								url,
							}: {
								title: string;
								content: string;
								source: string;
								date: string;
								url: string;
							}) => (
								<li className="flex flex-col gap-y-[12px] max-w-[600px] break-keep">
									<p className="font-extrabold">&lt;{title}&gt;</p>
									<p>{content}</p>
									<a className="underline" href={url} target="_blank">
										{source} {date}
									</a>
								</li>
							)
						)}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default AwardsPage;
