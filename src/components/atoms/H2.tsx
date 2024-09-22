import React from "react";

// Define a Props interface
type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
};

const H2 = ({ style, className, children }: Props) => {
	return (
		<h3 style={style} className={`font-lora text-[30px] md:text-[100px] font-bold ${className}`}>
			{children}
		</h3>
	);
};

export default H2;
