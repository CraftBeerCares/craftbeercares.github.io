import Image from "next/image";
import styles from "./articleRow.module.css";

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
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <article className={styles.article}>{children}</article>
      {imagePosition === "right" && (
        <div className={styles.articleImage}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleRow;
