import { Item } from "src/items/entities/item.entity";

export interface SearchItemsApiResponse {
  categories: string[];
  items: Item[];
}
