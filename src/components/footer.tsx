import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Craft Beer Cares</div>
      <nav></nav>
      <div>
        <Image
          src="/assets/facebook.svg"
          alt="Facebook"
          width="30"
          height="30"
        />
        <Image
          src="/assets/instagram.svg"
          alt="Instagram"
          width="30"
          height="30"
        />
        <Image src="/assets/twitter.svg" alt="Twitter" width="30" height="30" />
      </div>
      <div>Craft Beer Cares - Drinking beer for good Stuff since 2017</div>
    </footer>
  );
}
