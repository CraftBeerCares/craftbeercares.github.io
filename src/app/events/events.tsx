import { ArticleHeader, PageTemplate } from "@/components";
import { secondary } from "@/styles/fonts";

export const Events = () => {
  return (
    <PageTemplate>
      <ArticleHeader
        imageSrc="/assets/003.webp"
        imageAlt="A picture of me"
        blurbPosition="right"
      >
        <h1 className={secondary.className}>Craft Beer Cares to Return!</h1>
        <p>
          It has been quite a while since our last festival, Love Beer London,
          and even longer since our eponymous festival, Craft Beer Cares.
          We&apos;ve missed everyone, and can&apos;t wait to announce our next
          major event.
        </p>
        <p>
          Our next festival is currently a work in progress, and we are looking
          at dates for a 2024 beery bash with a focus on fundraising for great
          causes.
        </p>
      </ArticleHeader>
    </PageTemplate>
  );
};
