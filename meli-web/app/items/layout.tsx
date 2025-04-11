import BreadCrumb from "@/layouts/breadCrumb/BreadCrumb";
import styles from "./layout.module.scss";

export default function ItemsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutItemsWrapper}>
      <BreadCrumb
        items={[
          "Electrónica, Audio y Video",
          "iPod",
          "Reproductores",
          "iPod Touch",
          "32GB",
        ]}
      />{" "}
      {children}
    </div>
  );
}
