import { PageTemplate, ArticleHeader, ArticleRow, Thanks } from "@/components";
import { secondary } from "@/styles/fonts";
import styles from "./about.module.css";
import clsx from "clsx";

export const About = () => {
  return (
    <PageTemplate>
      <ArticleHeader imageSrc="/assets/003.webp" imageAlt="A picture of me">
        <h1 className={secondary.className}>The Craft Beer Cares Story</h1>
        <p>
          Craft Beer Cares was founded by Gautam Bhatnagar and Michaela
          Zelenanska in 2017. Inspired by other initiatives such as Cook for
          Syria that were happening at the time, the two took their social
          interests and contacts in craft beer and worked towards organising
          something that could raise money for great causes.
        </p>
        <p>
          Our first festival took place at BrewClub in Clapton, 1-2 July 2017.
          Since then, thanks to many friends and contacts within the craft beer
          industry as well as other wonderful friends, family members,
          volunteers, and enthusiastic attendees, we have held a grand total of
          4 beer festivals within 4 years, and have raised over £50,000 for
          charitable organisations.
        </p>
      </ArticleHeader>
      <ArticleRow
        imageSrc="/assets/001.webp"
        imageAlt="alt"
        imagePosition="right"
      >
        <p>
          Our most recent festival, Love Beer London, took place in partnership
          with the London Brewers Alliance and SIBA Southeast, and took place
          13-15 February 2020, only a short month before COVID-19 brought the UK
          into its first lockdown.
        </p>
        <p>
          Together, we managed to raise nearly £10,000 for The Benevolent, now
          called The Drinks Trust, a charity that provides support, care and
          assistance to people working in the drinks trade. Considering the
          upheaval many hospitality and drinks industry workers would find
          themselves in during the cycles of lockdown, furlough, reopening, and
          in some cases losing their jobs, we are glad to have been able to have
          contributed to such an incredible charity when we were able to do so.
        </p>
      </ArticleRow>
      <ArticleRow imageSrc="/assets/001.webp" imageAlt="alt">
        <p>
          Although our current plans for our next festival event may be some
          months off, if not perhaps even a bit longer, we at Craft Beer Cares
          are keen to promote other events, organisations, fund-raisers, and
          programmes that are supporting charities and non-profit organisations
          big and small, taking place throughout the UK.
        </p>
        <p>
          If you&apos;d like to receive news about charity events within the
          beer industry, please sign up for our newsletter. And if you have an
          event or an initiative you&apos;re holding for a charity or another
          great cause, please let us know by contacting us.
        </p>
      </ArticleRow>
      <div className={styles.thanks}>
        <Thanks />
      </div>
    </PageTemplate>
  );
};
