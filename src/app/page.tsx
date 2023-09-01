import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { secondary } from "@/styles/fonts";
import { clsx } from "clsx";
import { PageTemplate, ArticleRow } from "@/components";
import type { Metadata } from "next/";

export const metadata: Metadata = {
  title: "Craft Beer Cares",
};

const Page = () => {
  return (
    <PageTemplate>
      <div className={styles.logoContainer}>
        <Image src="/assets/logo.svg" alt="Craft Beer Cares Logo" fill={true} />
      </div>

      <h1 className={clsx(secondary.className, styles.subTitle)}>
        Craft Beer Cares is a collective of beer lovers who want to do good
        things.
      </h1>

      <ArticleRow
        imageSrc="/assets/001.webp"
        imageAlt="Image of Founder"
        imageFirst={true}
      >
        <p>
          We take part in events run by amazing people with a passion for
          fundraising, and have organised events combining charitable aims with
          the enjoyment of beer made by some of the most talented breweries in
          the UK and beyond.
        </p>
        <br />
        <p>
          Our events have raised funds for charities such as Art Against Knives,
          Hackney Winter Night Shelter, Mind, The Newman Holiday Trust and more!
        </p>
      </ArticleRow>

      <section className={styles.linkContainer}>
        <Link
          className={clsx(secondary.className, styles.navLink)}
          href="/events"
        >
          Check out The Events We&apos;ve Done For charity
        </Link>
      </section>

      <ArticleRow
        imageSrc="/assets/002.webp"
        imageAlt="DJ at Craft Beers Event"
        imageFirst={false}
      >
        <p>
          Not only do we put on events, but we also shout about events that
          great pubs, bars, breweries, and other oganisations are doing to
          benefit good causes.
        </p>
        <br />
        <p>
          Find out more about the events we organise and other good things
          happening by signing up to our newsletter, or by following us on
          Twitter, Facebook, or Instagram.
        </p>
      </ArticleRow>

      <section>
        <h1 className={clsx(secondary.className, styles.quoteTitle)}>
          Here's what some nice folks have said about craft beer cares!
        </h1>
      </section>
    </PageTemplate>
  );
};

export default Page;
