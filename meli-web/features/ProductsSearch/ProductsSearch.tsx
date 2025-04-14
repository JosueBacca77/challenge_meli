"use client";
import ProductItem from "./components/ProductItem/ProductItem";
import styles from "./productsSearch.module.scss";
import { useSearchParams } from "next/navigation";
import useGetItems from "./hooks/useGetItems/useGetItems";
import { useEffect } from "react";
import { useItems } from "@/src/context/items/ItemsProvider";
import { Item } from "@/models/Item.model";
import Spinner from "@/src/components/Spinner/Spinner";
import Text from "@/src/components/Text/Text";
import { TextColors } from "@/src/components/Text/types";

export default function ProductsSearch() {
  const searchParams = useSearchParams();

  const { items, setItems, setCategories } = useItems();

  const searchValue: string | null = searchParams.get("search");

  const getItems = useGetItems(searchValue || "");

  useEffect(() => {
    const response = getItems.response;
    if (!response) return;

    setItems(response.items);
    setCategories(response.categories);
  }, [getItems.response]);

  return (
    <div className={styles.productsSearchContent}>
      {!getItems.loading &&
        !getItems.error &&
        items &&
        items.map((item: Item) => <ProductItem item={item} key={item.id} />)}
      {getItems.loading && <Spinner />}
      {!getItems.loading && items && !items.length && (
        <div className={styles.noContentWrapper}>
          <Text
            value="No se han encontrado resultados.."
            color={TextColors.Tertiary}
          />
        </div>
      )}
    </div>
  );
}
