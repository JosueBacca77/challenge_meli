import InputText from "@/src/components/InputText/InputText";
import { useCallback, useMemo, useState } from "react";
import { HeaderContentLabels } from "../../consts/labels";
import styles from "./searchBar.module.scss";
import { redirect, useSearchParams } from "next/navigation";
import SearchButtonIcon from "../SearchButtonIcon/SearchButtonIcon";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const searchParams = useSearchParams();

  const searchCurrentValue = searchParams.get("search");

  const ableToSearch: boolean = useMemo(() => {
    return !!searchValue && searchValue !== searchCurrentValue;
  }, [searchCurrentValue, searchValue]);

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = useCallback(() => {
    if (!ableToSearch) return;
    const trimmed = searchValue.trim();

    if (!trimmed) {
      return redirect("/items");
    }

    redirect(`/items?search=${trimmed}`);
  }, [searchValue, searchCurrentValue]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      },
      [handleSearch]
    );

  return (
    <div className={styles.searchBar}>
      <InputText
        value={searchValue}
        placeholder={HeaderContentLabels.SEARCH}
        name="search_product"
        id="search_product"
        onChange={handleChangeSearchValue}
        onKeyDown={handleKeyDown}
      />
      <SearchButtonIcon disabled={!ableToSearch} onClick={handleSearch} />
    </div>
  );
}
