import type { Metadata } from "next";
import { Contact } from "./contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return <Contact />;
}
