import { Item, ItemDescription } from "src/items/entities/item.entity";
import {
  GetItemApiResponse,
  GetItemDescriptionApiResponse,
  SearchItemsApiResponse,
} from "../types";
import { mockCategoryTree, MOCKED_ITEMS } from "./data";

export const mockSearchItems = (query: string): SearchItemsApiResponse => {
  const filteredItems = MOCKED_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return {
    items: filteredItems,
    categories: mockCategoryTree[filteredItems[0]?.category] ?? [],
  };
};

export const mockGetItemById = (id: string): GetItemApiResponse => {
  return { item: MOCKED_ITEMS.find((item) => item.id === id) ?? null };
};

export const mockGetItemDescription = (
  id: string
): GetItemDescriptionApiResponse => {
  return { item: MOCKED_ITEMS.find((item) => item.id === id) ?? null };
};
