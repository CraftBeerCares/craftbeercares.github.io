import styles from "./footer.module.css";
import Image from "next/image";
import { secondary } from "../styles/fonts";
import { clsx } from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMobile}>
        <div className={styles.footerLogo}>
          <Image
            src="/assets/logo_bw.svg"
            alt="Craft Beer Cares Logo"
            fill={true}
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>
      <div className={styles.footerDesktop}>
        <div className={styles.footerColumn}>
          <h2 className={clsx(secondary.className, styles.title)}>
            Craft Beer Cares
          </h2>
          <nav className={styles.footerLinks}>
            <nav className={clsx(secondary.className)}>
              <Link className={styles.navLink} href="/">
                Home
              </Link>
              <Link className={styles.navLink} href="/about">
                About
              </Link>
              <Link className={styles.navLink} href="/join_us">
                Join Us
              </Link>
              <Link className={styles.navLink} href="/events">
                Events
              </Link>
              <Link className={styles.navLink} href="/shop">
                Shop
              </Link>
              <Link className={styles.navLink} href="/contact">
                Contact
              </Link>
            </nav>
          </nav>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/craftbeercares"
              className={styles.socialLink}
            >
              <Image
                src="/assets/facebook.svg"
                alt="Facebook"
                width="30"
                height="30"
              />
            </a>
            <a
              href="https://www.instagram.com/craftbeercares/"
              className={styles.socialLink}
            >
              <Image
                src="/assets/instagram.svg"
                alt="Instagram"
                width="30"
                height="30"
              />
            </a>
            <a
              href="https://twitter.com/craftbeercares"
              className={styles.socialLink}
            >
              <Image
                src="/assets/twitter.svg"
                alt="Twitter"
                width="30"
                height="30"
              />
            </a>
          </div>
          <div className={clsx(secondary.className, styles.footerQuote)}>
            Craft Beer Cares - Drinking beer for good Stuff since 2017
          </div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Image
              src="/assets/logo_bw.svg"
              alt="Craft Beer Cares Logo"
              fill={true}
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>
        <div className={styles.footerColumn}>Right</div>
      </div>
    </footer>
  );
}
