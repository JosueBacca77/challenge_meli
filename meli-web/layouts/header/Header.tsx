"use client";
import HeaderContent from "@/features/HeaderContent/HeaderContent";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <HeaderContent />
      </div>
    </header>
  );
}
