import { render } from "@testing-library/react";
import { Home } from "./home";

it("renders Home page", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
