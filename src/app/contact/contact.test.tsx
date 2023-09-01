import { render } from "@testing-library/react";
import { Contact } from "./contact";

it("renders Contact page", () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
