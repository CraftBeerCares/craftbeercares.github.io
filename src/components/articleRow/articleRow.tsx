import Image from "next/image";
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
        <div className={styles.articleImage}>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              objectFit: "contain",
              width: "100%",
              marginLeft: "-3rem",
            }}
          />
        </div>
      )}
      <article className={styles.article}>{children}</article>
      {imagePosition === "right" && (
        <div className={styles.articleImage}>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              objectFit: "contain",
              width: "100%",
              marginLeft: "3rem",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleRow;
