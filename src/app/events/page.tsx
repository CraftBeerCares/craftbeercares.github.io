import type { Metadata } from "next";
import { Events } from "./events";

export const metadata: Metadata = {
  title: "Events",
};

export default function Page() {
  return <Events />;
}
