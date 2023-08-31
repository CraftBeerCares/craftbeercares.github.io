import styles from "./header.module.css";
import { secondary } from "../styles/fonts";
import { clsx } from "clsx";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <button className={styles.burgerMenuButton}>Menu</button>
        <h1 className={clsx(secondary.className, styles.title)}>
          Craft Beer Cares
        </h1>
        <nav className={clsx(styles.topNav, secondary.className)}>
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
      </div>
    </header>
  );
}
