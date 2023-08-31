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
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <main className={clsx(primary.className, styles.mainContent)}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
