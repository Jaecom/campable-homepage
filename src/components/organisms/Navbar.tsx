"use client";

import React, { useState, useRef } from "react";
import NavLink from "../atoms/NavLink";
import CampableLogo from "@/public/icons/campable_logo.svg";
import Link from "next/link";
import HamburgerMenu from "../atoms/HamburgerMenu";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null); // Use ref to track the menu DOM element
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const localeToChange = locale === "en" ? "kr" : "en";

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const onLocaleChangeHandler = () => {
		router.replace(pathname, { locale: localeToChange });
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
						<NavLink href="/products">Products</NavLink>
					</li>
					<li className="h-full">
						<NavLink href="/contacts">Contacts</NavLink>
					</li>
					<li className="h-full">
						<div
							className="flex h-full items-center uppercase tracking-[1.5px] font-dmSans text-[15px] cursor-pointer"
							onClick={onLocaleChangeHandler}
						>
							{localeToChange}
						</div>
					</li>
				</ul>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="w-full px-[32px] bg-[#121212] relative z-[100]" ref={menuRef}>
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
						<li className="py-4">
							<div
								className="flex h-full items-center uppercase tracking-[1.5px] font-dmSans text-[15px] cursor-pointer"
								onClick={onLocaleChangeHandler}
							>
								{localeToChange}
							</div>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
