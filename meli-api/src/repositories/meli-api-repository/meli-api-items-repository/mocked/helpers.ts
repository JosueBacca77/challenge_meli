import {
  GetItemApiResponse,
  GetItemDescriptionApiResponse,
  SearchItemsApiResponse,
} from "../types";
import { mockCategoryTree, MOCKED_ITEMS } from "./data";

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export const mockSearchItems = (query: string): SearchItemsApiResponse => {
  const normalizedQuery = normalizeText(query);

  const filteredItems = MOCKED_ITEMS.filter((item) => {
    const normalizedTitle = normalizeText(item.title);

    const categoryPath = mockCategoryTree[item.category] || [];
    const normalizedCategoryPath = categoryPath.map(normalizeText);

    const matchesTitle = normalizedTitle.includes(normalizedQuery);
    const matchesCategory = normalizedCategoryPath.some((category) =>
      category.includes(normalizedQuery)
    );

    return matchesTitle || matchesCategory;
  });

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
