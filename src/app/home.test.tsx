import { render } from "@testing-library/react";
import { Home } from "./home";
import { windowMock } from "./__mocks__/window.mock";

it("renders Home page", () => {
  windowMock();

  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
