import { render } from "@testing-library/react";
import { JoinUs } from "./joinUs";

it("renders Join Us page", () => {
  const { container } = render(<JoinUs />);
  expect(container).toMatchSnapshot();
});
