import type { Metadata } from "next";
import { JoinUs } from "./joinUs";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function Page() {
  return <JoinUs />;
}
