import Image from "next/image";
import styles from "./articleRow.module.css";

interface ArticleRowProps {
    imageSrc: string;
    imageAlt: string;
    children: React.ReactNode[] | React.ReactNode;
    imageFirst: boolean;
}

export const ArticleRow = ({ imageSrc, imageAlt, children, imageFirst} : ArticleRowProps) => {
    return (
        <div className={styles.articleRow}>
            {imageFirst && <div className={styles.articleImage}>
                <Image src={imageSrc} alt={imageAlt} fill={true} style={{ objectFit: "contain" }} />
            </div>}
            <article className={styles.article}>
                {children}
            </article>
            {!imageFirst && <div className={styles.articleImage}>
                <Image src={imageSrc} alt={imageAlt} fill={true} style={{ objectFit: "contain" }} />
            </div>}
        </div>
    );
}

export default ArticleRow;