"use client";

import Carousel from "react-multi-carousel";
import Quote from "../quote/quote";
import testimonials from "./testimonials.json";
import styles from "./testimonials.module.css";
import "react-multi-carousel/lib/styles.css";

export const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.testimonials}>
      <Carousel
        responsive={responsive}
        ssr={false}
        slidesToSlide={2}
        infinite={true}
        className="testimonials"
        showDots={true}
        dotListClass={styles.dotList}
        renderDotsOutside={true}
        itemClass={styles.testimonial}
      >
        {testimonials.map(({ quote, author }, index) => {
          return <Quote key={index} quote={quote} author={author} />;
        })}
      </Carousel>
    </div>
  );
};
