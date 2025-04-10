import ProductItem from "../ProductItem/ProductItem";
import styles from "./productsSearchContent.module.scss";

export default function ProductsSearchContent() {
  const items: number[] = [1, 2, 3, 4];
  return (
    <div className={styles.productsSearchContent}>
      {items.map((item: number) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
}
