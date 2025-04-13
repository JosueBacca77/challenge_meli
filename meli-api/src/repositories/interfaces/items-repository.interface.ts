import {
  GetItemDescriptionResponse,
  SearchItemsResponse,
} from "src/items/types";

export interface ItemsRepositoryInterface {
  searchItems(query: string): Promise<SearchItemsResponse>;
  getItemDescription(id: string): Promise<GetItemDescriptionResponse>;
}
