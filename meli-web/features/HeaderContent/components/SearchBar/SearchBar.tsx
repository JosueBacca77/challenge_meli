import InputText from "@/src/components/InputText/InputText";
import { useState } from "react";
import { HeaderContentLabels } from "../../consts/labels";
import SearchButtonIcon from "../SearchButtonIcon/SearchButtonIcon";
import styles from "./searchBar.module.scss";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className={styles.searchBar}>
      <InputText
        value={searchValue}
        placeholder={HeaderContentLabels.SEARCH}
        name="search_product"
        id="search_product"
        onChange={handleChangeSearchValue}
      />
      <SearchButtonIcon />
    </div>
  );
}
