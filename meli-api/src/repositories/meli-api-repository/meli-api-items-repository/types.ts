import { Item, ItemDescription } from "src/items/entities/item.entity";

// Guess these are the responses given by meli api
export interface SearchItemsApiResponse {
  categories: string[];
  items: Item[];
}

export interface GetItemDescriptionApiResponse {
  item: ItemDescription;
}
