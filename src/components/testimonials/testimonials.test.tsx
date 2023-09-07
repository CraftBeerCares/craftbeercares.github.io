import { render } from "@testing-library/react";
import Testimonials, { getQuoteNumber } from "./testimonials";



const mockDependencies = (matches: boolean = false, innerWidth: number = 4000) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  Object.defineProperty(window, 'innerWidth', {
    writable: false, 
    value: innerWidth
  });
}


it("renders Testimonails", () => {
  mockDependencies();
  const { container } = render(<Testimonials />);
  expect(container).toMatchSnapshot();
});


describe("getQuoteNumber returns", () => {
  it.each`
  largeWindow | offsetWidth | expected
  ${false} | ${4000} | ${1}
  ${true} | ${4000} | ${3}
  ${true} | ${840} | ${2}
`("largeWindow=$largeWindow offsetWidth=$offsetWidth produces $expected slides", async ({ largeWindow, offsetWidth, expected }) => {
    mockDependencies(largeWindow);

    const div = {
      offsetWidth: offsetWidth
    } as HTMLDivElement;

    expect(getQuoteNumber(div)).toBe(expected)
  });
});