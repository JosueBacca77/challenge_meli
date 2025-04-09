"use client";
import Image from "next/image";
import styles from "./headerContent.module.scss";
import InputText from "@/src/components/InputText/InputText";
import { useState } from "react";
import { HeaderContentLabels } from "./consts/labels";

export default function HeaderContent() {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className={styles.headerContentWrapper}>
      <Image
        src="/logo_ML.png"
        alt="logo_meli"
        objectFit="contain"
        width={32}
        height={24}
      />
      <InputText
        value={searchValue}
        placeholder={HeaderContentLabels.SEARCH}
        name="search_product"
        id="search_product"
        width={400}
        onChange={handleChangeSearchValue}
      />
    </div>
  );
}
