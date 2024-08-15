import React from "react";

const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <h1 className={`font-lora text-[100px] font-bold ${className}`}>{children}</h1>;
};

export default H1;
