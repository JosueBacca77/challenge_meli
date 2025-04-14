import { Item } from "@/models/Item.model";
import { useContext, useState } from "react";
import { ItemsContext } from "./items";

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <ItemsContext.Provider
      value={{ items, categories, setItems, setCategories }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within a ItemsProvider");
  }
  return context;
};
