import { render } from "@testing-library/react";
import Quote from "./quote";

describe("renders ArticleRow", () => {
  it.each`
    imageFirst
    ${true}
    ${false}
  `("imageFirst=$imageFirst", async ({ imageFirst }) => {
    const { container } = render(
      <Quote
        imageSrc="/assets/001.webp"
        imageAlt="test alt"
        imageFirst={imageFirst}
      >
        <p>Hello</p>
      </Quote>
    );
    expect(container).toMatchSnapshot();
  });
});
