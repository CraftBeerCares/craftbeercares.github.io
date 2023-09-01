import type { Metadata } from "next/";
import { Home } from "./home";

export const metadata: Metadata = {
  title: "Craft Beer Cares",
};

const Page = () => {
  return <Home />;
};

export default Page;
