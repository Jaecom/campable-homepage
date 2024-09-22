"use client";

import React, { useState, useRef } from "react";
import NavLink from "../atoms/NavLink";
import CampableLogo from "@/public/icons/campable_logo.svg";
import Link from "next/link";
import HamburgerMenu from "../atoms/HamburgerMenu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null); // Use ref to track the menu DOM element

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="h-[75px]">
			<div className="px-[32px] h-full flex justify-between items-center bg-background text-white">
				<div className="md:hidden">
					<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />
				</div>

				{/* Logo */}
				<Link href="/">
					<div className="flex items-center gap-x-2">
						<CampableLogo />
					</div>
				</Link>

				<div className="w-[30px] opacity-0 md:hidden"></div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex h-full gap-x-[20px]">
					<li className="h-full">
						<NavLink href="/">About Us</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/awards">Press & Awards</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/products">Produ cts</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/contacts">Contacts</NavLink>
					</li>
				</ul>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="w-full px-[32px] bg-[#121212] relative z-10" ref={menuRef}>
					<ul>
						<li className="py-4">
							<NavLink href="/" disableUnderline onClick={toggleMenu}>
								About Us
							</NavLink>
						</li>
						<li className="py-4">
							<NavLink href="/awards" disableUnderline onClick={toggleMenu}>
								Press & Awards
							</NavLink>
						</li>
						<li className="py-4">
							<NavLink href="/products" disableUnderline onClick={toggleMenu}>
								Products
							</NavLink>
						</li>
						<li className="py-4">
							<NavLink href="/contacts" disableUnderline onClick={toggleMenu}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
