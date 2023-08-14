import PageTemplate from "@/components/pageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return <PageTemplate>About</PageTemplate>;
}
