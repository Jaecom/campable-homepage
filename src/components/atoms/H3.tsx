import React from "react";

// Define a Props interface
type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
};

const H3 = ({ style, className, children }: Props) => {
	return (
		<h3
			style={style}
			className={`font-lora font-semibold text-[16px] md:text-[20px] uppercase tracking-[1.5px] ${className}`}
		>
			{children}
		</h3>
	);
};

export default H3;
