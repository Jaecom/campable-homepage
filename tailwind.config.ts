import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				background: "#121212",
				primary: "#F5B542",
			},
			fontFamily: {
				lora: ["var(--font-lora)"],
				dmSans: ["var(--font-dmSans)"],
			},
		},
	},
	plugins: [],
};
export default config;
