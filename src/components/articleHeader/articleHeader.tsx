import Image from "next/image";
import styles from "./articleHeader.module.css";
import clsx from "clsx";

interface ArticleHeaderProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode[] | React.ReactNode;
  blurbPosition?: "left" | "right";
}

export const ArticleHeader = ({
  imageSrc,
  imageAlt,
  children,
  blurbPosition = "left",
}: ArticleHeaderProps) => {
  const positionClass =
    blurbPosition === "left" ? styles.articleLeft : styles.articleRight;

  return (
    <div className={styles.articleHeader}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <article className={clsx(styles.article, positionClass)}>
        {children}
      </article>
    </div>
  );
};

export default ArticleHeader;
