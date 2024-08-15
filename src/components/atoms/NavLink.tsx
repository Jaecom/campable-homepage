"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children?: React.ReactNode;
	disableActive?: boolean;
};

const NavLink = ({ href, children, disableActive }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			className={`h-full ${
				isActive && !disableActive ? "border-b-[2px] border-white border-solid font-bold" : "font-light"
			} flex items-center uppercase font-dmSans text-[15px]`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default NavLink;
