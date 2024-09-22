import React from "react";
import H1 from "@/src/components/atoms/H1";
import BrailleIcon from "@/public/icons/products_braille.svg";

const page = () => {
	return (
		<div className="flex justify-center items-center mt-[60px] md:mt-[130px] px-[16px]">
			<div className="flex flex-col items-center gap-y-[30px] max-w-[600px] text-center">
				<H1>Products</H1>
				<BrailleIcon />
				<h3 className="font-dmSans uppercase font-bold text-[20px]">Braille Camp</h3>
				<p className="font-bold">Braille Camp는 CampAble팀이 개발한 교육용 웹 점역 소프트웨어 입니다. </p>
				<p>
					Braille Camp는 텍스트 뿐만 수식도 점역해 낼 수 있는 수학에 특화된 점역 프로그램입니다.CampAble은 시각장애인
					학생들에게 쉽고 빠르게 원하는 교육 자료를 점역하고 더 많은 교육 자료의 접근성을 높이려 노력하고 있습니다.
				</p>
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
