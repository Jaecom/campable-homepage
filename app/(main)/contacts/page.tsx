import React from "react";
import H1 from "@/src/components/atoms/H1";

const page = () => {
	return (
		<div className="flex flex-col gap-y-[10px] items-center justify-center mt-[130px]">
			<H1>Contact Us</H1>
			<a className="font-dmSans underline text-[22px] md:text-[30px]" href="mailto:campable.io@gmail.com">
				campable.io@gmail.com
			</a>
			<p>We’ll always be there for you :)</p>
		</div>
	);
};

export default page;
