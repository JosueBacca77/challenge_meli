import { Item } from "@/models/Item.model";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type ItemsContextType = {
  items: Item[];
  categories: string[];
  setCategories: (categories: string[]) => void;
  setItems: (items: Item[]) => void;
};
