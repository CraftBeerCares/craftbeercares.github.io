import { Josefin_Sans, Amatic_SC } from "next/font/google";

const primary = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});

const secondary = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amatic",
});

export { primary, secondary };
