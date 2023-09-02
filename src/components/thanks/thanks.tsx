import Quote from "../quote/quote";
import thanks from "./thanks.json";

export const Thanks = () => {
  return thanks.map(({ quote, author }) => (
    <Quote quote={quote} author={author} key={quote} />
  ));
};
