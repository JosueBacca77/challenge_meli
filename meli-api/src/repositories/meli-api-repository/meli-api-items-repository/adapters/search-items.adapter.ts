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

export function getItemAdapter(data: GetItemApiResponse): GetItemResponse {
  return {
    item: data.item as Item,
    author: {
      name: AUTHOR.name,
      lastname: AUTHOR.lastname,
    },
  };
}

export function getItemDescriptionAdapter(
  data: GetItemDescriptionApiResponse
): GetItemDescriptionResponse {
  return {
    item: data.item as ItemDescription,
    author: {
      name: AUTHOR.name,
      lastname: AUTHOR.lastname,
    },
  };
}
