import { render } from "@testing-library/react";
import Header from "./header";

it("renders Header", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
