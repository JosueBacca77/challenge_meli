import { AUTHOR } from "src/common/consts";
import {
  GetItemApiResponse,
  GetItemDescriptionApiResponse,
  SearchItemsApiResponse,
} from "../types";
import {
  GetItemDescriptionResponse,
  GetItemResponse,
  SearchItemsResponse,
} from "src/items/types";
import { Item, ItemDescription } from "src/items/entities/item.entity";

export function searchItemsAdapter(
  data: SearchItemsApiResponse
): SearchItemsResponse {
  return {
    categories: data.categories,
    items: data.items,
    author: {
      name: AUTHOR.name,
      lastname: AUTHOR.lastname,
    },
  };
}
