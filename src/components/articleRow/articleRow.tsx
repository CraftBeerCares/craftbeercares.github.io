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

  const articlePositionClassName = imagePosition === "left" ? styles.articleRight : styles.articleLeft
  const imagePositionClassName = imagePosition === "right" ? styles.imageRight : styles.imageLeft

  return (
    <div className={styles.articleRow}>
        <div className={clsx(styles.articleImage, imagePositionClassName)}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      <article className={clsx(styles.article, articlePositionClassName)}>{children}</article>
    </div>
  );
};

export default ArticleRow;
