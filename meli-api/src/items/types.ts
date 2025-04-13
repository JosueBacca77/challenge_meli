import { Author } from "./entities/Author.entity";
import { Item, ItemDescription } from "./entities/item.entity";

export type SearchItemsResponse = {
  categories: string[];
  items: Item[];
  author: Author;
};

export type GetItemDescriptionResponse = {
  item: ItemDescription;
  author: Author;
};
