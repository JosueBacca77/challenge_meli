"use client";
import ProductItem from "./components/ProductItem/ProductItem";
import styles from "./productsSearch.module.scss";

export default function ProductsSearch() {
  const items: number[] = [1, 2, 3, 4];
  return (
    <div className={styles.productsSearchContent}>
      {items.map((item: number) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
}
