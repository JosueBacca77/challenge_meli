import { GetItemDescriptionResponse } from "src/items/types";
import { GetItemDescriptionApiResponse } from "../types";
import { ItemDescription } from "src/items/entities/item.entity";
import { AUTHOR } from "src/common/consts";

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
