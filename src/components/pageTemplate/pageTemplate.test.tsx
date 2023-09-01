import { render } from "@testing-library/react";
import {PageTemplate} from "./pageTemplate";

it("renders Page Template", () => {
  const { container } = render(<PageTemplate>Hello</PageTemplate>);
  expect(container).toMatchSnapshot();
});
