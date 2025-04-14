import { GetItemResponse } from "src/items/types";
import { GetItemApiResponse } from "../types";
import { Item } from "src/items/entities/item.entity";
import { AUTHOR } from "src/common/consts";

export function getItemAdapter(data: GetItemApiResponse): GetItemResponse {
  return {
    item: data.item as Item,
    author: {
      name: AUTHOR.name,
      lastname: AUTHOR.lastname,
    },
  };
}
