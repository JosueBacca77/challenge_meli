import Image from "next/image";
import styles from "./seachButtonIcon.module.scss";
import { SearchButtonIconProps } from "./types";
import { memo } from "react";

const SearchButtonIcon = memo(function SearchButtonIcon(
  props: SearchButtonIconProps
) {
  const { onClick } = props;

  return (
    <button className={styles.searchButtonIcon} onClick={onClick}>
      <Image src="/ic_search.png" alt="lupa" width={18} height={18} />
    </button>
  );
});

export default SearchButtonIcon;
