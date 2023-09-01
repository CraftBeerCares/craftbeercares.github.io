import { render } from "@testing-library/react";
import { Events } from "./events";

it("renders Events page", () => {
  const { container } = render(<Events />);
  expect(container).toMatchSnapshot();
});
