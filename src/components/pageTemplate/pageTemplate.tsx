import styles from "./pageTemplate.module.css";
import { Footer, Header } from "@/components";
import { primary } from "@/styles/fonts";
import { clsx } from "clsx";

interface PageTemplateProps {
  children: React.ReactNode;
}

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.content}>
          <Header />
        </div>
      </div>
      <div className={styles.scrollContainer}>
        <main className={clsx(primary.className, styles.content)}>
          {children}
        </main>
        <div className={styles.footer}>
          <div className={styles.content}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
