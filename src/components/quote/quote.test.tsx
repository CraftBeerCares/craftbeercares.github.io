import { render } from "@testing-library/react";
import Quote from "./quote";

it("renders Quote", () => {
  const { container } = render(<Quote quote="quote" author="author" />);
  expect(container).toMatchSnapshot();
});
