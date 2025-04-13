import { Author } from "../entities/Author.entity";
import { Item } from "../entities/item.entity";

export class SearchItemsDto {
  search?: string;
}

export type SearchItemsResponse = {
  categories: string[];
  items: Item[];
  author: Author;
};
