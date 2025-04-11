import { useEffect, useState } from "react";
import { HttpError } from "@/utils/types";
import { Item } from "@/models/Item.model";
import { ItemsService } from "@/services/ItemsService/Items.service";
import { isHttpError } from "@/utils/http";

export default function useGetItems(searchValue: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    get(searchValue);
  }, [searchValue]);

  const get = async (searchValue: string) => {
    setLoading(true);
    setError(null);

    try {
      const service = ItemsService.getInstance();

      const response = await service.getItems({
        searchValue,
        signal: new AbortController().signal,
      });
      console.log("response items", response);
      setItems(response.items);
    } catch (err) {
      if (isHttpError(err)) {
        setError(err);
      } else {
        setError({
          statusCode: 500,
          message: "An unexpected error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, get };
}
