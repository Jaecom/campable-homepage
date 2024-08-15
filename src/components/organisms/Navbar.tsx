import React from "react";
import NavLink from "../atoms/NavLink";
import CampableLogo from "@/public/icons/campable_logo.svg";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="h-[75px] px-[32px] flex justify-between items-center bg-background text-white">
			<Link href="/">
				<div className="flex items-center gap-x-2">
					<CampableLogo />
				</div>
			</Link>
			<ul className="h-full flex gap-x-[20px]">
				<li className="h-full">
					<NavLink href="/">About Us</NavLink>
				</li>
				<li className="h-full">
					<NavLink href="/awards">Press & Awards</NavLink>
				</li>
				<li className="h-full">
					<NavLink href="/products">Products</NavLink>
				</li>
				<li className="h-full">
					<NavLink href="/contacts">Contacts</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
