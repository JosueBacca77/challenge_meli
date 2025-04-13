"use client";
import BreadCrumb from "@/layouts/breadCrumb/BreadCrumb";
import styles from "./layout.module.scss";
import { ItemsProvider } from "@/src/context/items/ItemsProvider";

export default function ItemsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutItemsWrapper}>
      <ItemsProvider>
        <BreadCrumb />
        {children}
      </ItemsProvider>
    </div>
  );
}
