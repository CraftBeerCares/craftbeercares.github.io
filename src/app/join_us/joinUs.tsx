import { ArticleHeader, ArticleRow, PageTemplate } from "@/components";
import clsx from "clsx";
import { secondary } from "@/styles/fonts";
import styles from "./joinUs.module.css";

export const JoinUs = () => {
  return (
    <PageTemplate>
      <ArticleHeader imageSrc="/assets/003.webp" imageAlt="A picture of me">
        <h1 className={clsx(styles.title, secondary.className)}>
          Get Involved!
        </h1>
        <p>
          Craft Beer Cares is a group that seeks to find ways people can “drink
          beer and do good,” which is done by organising our own events, or by
          sharing across activities and initiatives that support charities,
          organisations, and other good folks.
        </p>
        <p>
          There are a number of ways you can get involved in helping us out, so
          keep reading and keep in touch!
        </p>
      </ArticleHeader>
      <ArticleRow
        imageSrc="/assets/001.webp"
        imageAlt="alt"
        imagePosition="right"
      >
        <p>
          Sign up to the Craft Beer Cares newsletter to hear about events we are
          planning, as well as to find about other charitable events and
          fundraisers happening in the UK, and other good stuff happening in the
          world of beer!
        </p>
        <p>
          We will be publishing the newsletter on a monthly basis. If you&apos;d
          like to hear more from us, please be sure to follow us on Twitter,
          Facebook and Instagram, too.
        </p>
      </ArticleRow>
      <ArticleRow imageSrc="/assets/001.webp" imageAlt="alt">
        <p>
          We are incredibly grateful to all of the volunteers we have had to
          make our festivals be incredibly fun and successful fundraising
          events.
        </p>
        <p>
          If you would like to be involved in volunteering for our next event,
          please watch this space for future announcements of opportunities to
          be part of the team. Volunteers help us donate as much money as
          possible to our partner charities, and we&apos;re thrilled to say
          we&apos;ve had many repeat volunteers helping out over the years--you
          know who you are!
        </p>
      </ArticleRow>
      <ArticleRow
        imageSrc="/assets/001.webp"
        imageAlt="alt"
        imagePosition="right"
      >
        <p>
          We are always looking to support and shout about other events and
          activities doing good for the community, whether it&apos;s through
          charity fundraising or organisational involvement.
        </p>
        <p>
          If you want to get in touch about something charity-focused you are
          organising, or want to tip us off about a beer-related fundraising
          event, please contact us with as much detail as possible. We&apos;d
          love to hear from you!
        </p>
      </ArticleRow>
    </PageTemplate>
  );
};
