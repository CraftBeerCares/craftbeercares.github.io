import { render } from "@testing-library/react";
import ArticleRow from "./articleRow";

describe("renders ArticleRow", () => {
  it.each`
  imageFirst
  ${true}
  ${false}
`("imageFirst=$imageFirst", async ({ imageFirst }) => {
  const { container } = render(<ArticleRow imageSrc="/assets/001.webp" imageAlt="test alt" imageFirst={imageFirst}><p>Hello</p></ArticleRow>);
  expect(container).toMatchSnapshot();
});
})

