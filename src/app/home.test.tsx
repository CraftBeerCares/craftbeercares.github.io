import { render } from "@testing-library/react";
import { Home } from "./home";
import { windowMock } from "./__mocks__/window.mock";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});


it("renders Home page", () => {
  windowMock();

  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
