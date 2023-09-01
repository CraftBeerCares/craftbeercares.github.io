import { render } from "@testing-library/react";
import {Footer} from "./footer";

it("renders Footer", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
