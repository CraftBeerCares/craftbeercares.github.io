import { render } from "@testing-library/react";
import ArticleRow from "./articleRow";

describe("renders ArticleRow", () => {
  it.each`
    imagePosition
    ${"left"}
    ${"right"}
  `("imagePosition=$imagePosition", async ({ imageFirst }) => {
    const { container } = render(
      <ArticleRow
        imageSrc="/assets/001.webp"
        imageAlt="test alt"
        imagePosition={imageFirst}
      >
        <p>Hello</p>
      </ArticleRow>
    );
    expect(container).toMatchSnapshot();
  });
});
