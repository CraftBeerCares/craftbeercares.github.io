import { render } from "@testing-library/react";
import Page from "./page";

it("renders Home page", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});