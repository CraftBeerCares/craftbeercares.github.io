import styles from "./pageTemplate.module.css";
import Footer from "./footer";
import Header from "./header";

export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
