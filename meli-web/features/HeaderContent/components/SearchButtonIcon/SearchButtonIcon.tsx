import Image from "next/image";
import styles from "./seachButtonIcon.module.scss";

export default function SearchButtonIcon() {
  return (
    <button className={styles.searchButtonIcon}>
      <Image src="/ic_search.png" alt="lupa" width={18} height={18} />
    </button>
  );
}
