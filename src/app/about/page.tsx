import { PageTemplate, ArticleHeader } from "@/components";
import type { Metadata } from "next";
import { secondary } from "@/styles/fonts";
import styles from "./page.module.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <PageTemplate>
      <ArticleHeader
        imageSrc="/assets/003.webp"
        imageAlt="A picture of me"
        imageFirst={true}
      >
        <h1 className={clsx(styles.title, secondary.className)}>
          The Craft Beer Cares Story
        </h1>
        <p>
          Craft Beer Cares was founded by Gautam Bhatnagar and Michaela
          Zelenanska in 2017. Inspired by other initiatives such as Cook for
          Syria that were happening at the time, the two took their social
          interests and contacts in craft beer and worked towards organising
          something that could raise money for great causes.
        </p>
        <br />
        <p>
          Our first festival took place at BrewClub in Clapton, 1-2 July 2017.
          Since then, thanks to many friends and contacts within the craft beer
          industry as well as other wonderful friends, family members,
          volunteers, and enthusiastic attendees, we have held a grand total of
          4 beer festivals within 4 years, and have raised over £50,000 for
          charitable organisations.
        </p>
      </ArticleHeader>
    </PageTemplate>
  );
}
