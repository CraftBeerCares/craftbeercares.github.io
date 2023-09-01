import { render } from "@testing-library/react";
import ArticleHeader from "./articleHeader";

it("renders ArticleHeader", () => {
  const { container } = render(
    <ArticleHeader imageSrc="/assets/001.webp" imageAlt="test alt">
      <p>Hello</p>
    </ArticleHeader>
  );
  expect(container).toMatchSnapshot();
});
