import React from "react";
import Navbar from "@/src/components/organisms/Navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
