"use client";
import ProductItem from "./components/ProductItem/ProductItem";
import styles from "./productsSearch.module.scss";
import { useSearchParams } from "next/navigation";
import useGetItems from "./hooks/useGetItems/useGetItems";
import { useFirstRender } from "./hook";

export default function ProductsSearch() {
  const items: number[] = [1, 2, 3, 4];

  const searchParams = useSearchParams();

  const searchValue: string | null = searchParams.get("search");

  const getItems = useGetItems(searchValue || "");

  const first = useFirstRender();

  console.log("IS FIRST", first.isFirst);

  return (
    <div className={styles.productsSearchContent}>
      {items.map((item: number) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
}
