import Image from "next/image";
import styles from "./articleHeader.module.css";

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
      <article className={styles.article}>{children}</article>
    </div>
  );
};

export default ArticleHeader;
