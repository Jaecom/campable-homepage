import React from "react";
import H1 from "@/src/components/atoms/H1";
import BrailleIcon from "@/public/icons/products_braille.svg";
import { useTranslations } from "next-intl";

const page = () => {
	const t = useTranslations("ProductsPage");

	return (
		<div className="flex justify-center items-center mt-[60px] md:mt-[130px] px-[16px]">
			<div className="flex flex-col items-center gap-y-[30px] max-w-[600px] text-center">
				<H1>Products</H1>
				<BrailleIcon />
				<h3 className="font-dmSans uppercase font-bold text-[20px]">Braille Camp</h3>
				<p className="font-bold">{t("title")}</p>
				<p>{t("description")}</p>
				<a
					className="rounded-full border-solid border-[2px] border-primary px-[40px] py-[20px] font-bold text-primary font-dmSans text-[18px]"
					href="https://braille.campable.io"
					target="_blank"
				>
					braille.campable.io
				</a>
			</div>
		</div>
	);
};

export default page;
