import { render } from "@testing-library/react";
import NotFound from "./not-found";

it("renders Not Found", () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});
