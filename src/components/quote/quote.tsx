import Image from "next/image";
import styles from "./quote.module.css";

interface QuoteProps {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <div className={styles.quoteBox}>
      <Image
        src="/assets/quote_start.svg"
        alt="Quote Start"
        width={24}
        height={24}
        className={styles.quoteImage}
      />
      <p className={styles.quote}>{quote}</p>
      <Image
        src="/assets/quote_end.svg"
        alt="Quote End"
        width={24}
        height={24}
        className={styles.quoteImage}
      />
      <p className={styles.author}>{author}</p>
    </div>
  );
};

export default Quote;
