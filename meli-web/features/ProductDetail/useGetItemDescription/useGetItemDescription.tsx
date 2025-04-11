import { useEffect, useState } from "react";
import { HttpError } from "@/utils/types";
import { ItemDescription } from "@/models/Item.model";
import { ItemsService } from "@/services/ItemsService/Items.service";
import { isHttpError } from "@/utils/http";

export default function useGetItemDescription(idValue: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);
  const [itemDescription, setItemDescription] =
    useState<ItemDescription | null>(null);

  useEffect(() => {
    get(idValue);
  }, [idValue]);

  const get = async (idValue: string) => {
    setLoading(true);
    setError(null);

    try {
      const service = ItemsService.getInstance();

      const response = await service.getItemDescription({
        id: idValue,
        signal: new AbortController().signal,
      });
      console.log("response item description", response);
      setItemDescription(response.item);
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

  return { item: itemDescription, loading, error, get };
}
