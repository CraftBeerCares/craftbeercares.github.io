"use client";

import Quote from "../quote/quote";
import testimonials from "./testimonials.json";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import styles from "./testimonials.module.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useRef, useState } from "react";

export const getQuoteNumber = (div: HTMLDivElement | null) : number => {
  return window.matchMedia("(min-width: 701px)").matches
    ? Math.min(Math.floor((div?.offsetWidth ?? window.innerWidth) / 420), 3)
    : 1;
}

function Testimonials() {
  const elementRef = useRef<HTMLDivElement>(null);

  const [quoteNumber, setQuoteNumber] = useState(1);

  const setQuoteNumberEffect = () => {
    setQuoteNumber(getQuoteNumber(elementRef.current));
  };

  // listen for resize events
  useEffect(() => {
    setQuoteNumberEffect();

    window.addEventListener("resize", setQuoteNumberEffect);
    return () => {
      window.removeEventListener("resize", setQuoteNumberEffect);
    };
  }, []);

  return (
    <CarouselProvider
      naturalSlideHeight={105}
      naturalSlideWidth={102}
      totalSlides={testimonials.length}
      visibleSlides={quoteNumber}
      isIntrinsicHeight={true}
      infinite={true}
    >
      <Slider>
        {testimonials.map(({ quote, author }, index) => (
          <Slide index={index} key={index} className={styles.quoteBox}>
            <Quote quote={quote} author={author} />
          </Slide>
        ))}
      </Slider>
      <div className={styles.controls} ref={elementRef}>
        <ButtonBack className={styles.button}>Back</ButtonBack>
        <DotGroup className={styles.dots} />
        <ButtonNext className={styles.button}>Next</ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default Testimonials;
