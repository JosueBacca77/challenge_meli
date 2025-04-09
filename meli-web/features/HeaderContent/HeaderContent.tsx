import Image from "next/image";
import styles from "./headerContent.module.scss";
import SearchBar from "./components/SearchBar/SearchBar";

export default function HeaderContent() {
  return (
    <div className={styles.headerContentWrapper}>
      <Image
        src="/logo_ML.png"
        alt="logo_meli"
        objectFit="contain"
        width={48}
        height={38}
      />
      <SearchBar />
    </div>
  );
}
