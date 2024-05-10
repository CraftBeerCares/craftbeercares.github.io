/* eslint-disable @next/next/no-img-element */
import styles from "./articleRow.module.css";
import clsx from "clsx";

interface ArticleRowProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode[] | React.ReactNode;
  imagePosition?: "left" | "right";
}

export const ArticleRow = ({
  imageSrc,
  imageAlt,
  children,
  imagePosition = "left",
}: ArticleRowProps) => {
  return (
    <div className={styles.articleRow}>
      {imagePosition === "left" && (
        <div className={clsx(styles.articleImage, styles.imageLeft)}>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              objectFit: "contain",
              width: "100%",
            }}
          />
        </div>
      )}
      <article className={styles.article}>{children}</article>
      {imagePosition === "right" && (
        <div className={clsx(styles.articleImage, styles.imageRight)}>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              objectFit: "contain",
              width: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleRow;
