import { render } from "@testing-library/react";
import { About } from "./about";

it("renders About page", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
