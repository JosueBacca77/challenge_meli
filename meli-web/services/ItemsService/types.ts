import { Author } from "@/models/Author.model";
import { Item, ItemDescription } from "@/models/Item.model";

//Items
export type GetItemsParams = {
  signal: AbortSignal;
  searchValue: string;
};

export type GetItemsResponse = {
  author: Author;
  categories: string[];
  items: Item[];
};

//Item
export type GetItemParams = {
  signal: AbortSignal;
  id: string;
};

export type GetItemResponse = {
  author: Author;
  item: Item;
};

//Item description
export type GetItemDescriptionParams = {
  signal: AbortSignal;
  id: string;
};

export type GetItemDescriptionResponse = {
  author: Author;
  item: ItemDescription;
};
