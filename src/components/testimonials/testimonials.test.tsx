import { render } from "@testing-library/react";
import { Testimonials } from "./testimonials";

it("renders Testimonial", () => {
  const { container } = render(<Testimonials />);
  expect(container).toMatchSnapshot();
});
