import styles from "./pageTemplate.module.css";
import Footer from "./footer";
import Header from "./header";
import { primary } from "../styles/fonts";
import { clsx } from "clsx";

export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
