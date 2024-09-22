"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children?: React.ReactNode;
	disableActive?: boolean;
	onClick?: () => void;
	disableUnderline?: boolean;
};

const NavLink = ({ href, children, disableActive, onClick, disableUnderline }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			className={`h-full ${
				isActive && !disableUnderline ? "border-b-[2px] border-white border-solid font-bold" : "font-light"
			} flex items-center`}
			href={href}
			onClick={onClick}
		>
			<div className="uppercase tracking-[1.5px] font-dmSans text-[15px]">{children}</div>
		</Link>
	);
};

export default NavLink;
