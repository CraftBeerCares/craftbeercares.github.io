"use client";

import styles from "./header.module.css";
import { secondary } from "@/styles/fonts";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../navigation/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className={styles.header}>
        <button className={styles.burgerMenuButton} onClick={toggleIsOpen}>
          <Image
            src="/assets/menu.svg"
            alt="Burger Menu"
            fill={true}
            style={{ filter: "invert(1)", objectFit: "contain" }}
          />
        </button>
        <h1 className={clsx(secondary.className, styles.title)}>
          Craft Beer Cares
        </h1>
        <Navigation
          navClassName={clsx(styles.topNav, secondary.className)}
          linkClassName={styles.navLink}
        />
      </div>
    </header>
  );
};
