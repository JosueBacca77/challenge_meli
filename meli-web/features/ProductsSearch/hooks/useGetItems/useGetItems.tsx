import { useEffect, useState } from "react";
import { HttpError } from "@/utils/types";
import { ItemsService } from "@/services/ItemsService/Items.service";
import { isHttpError } from "@/utils/http";
import { GetItemsResponse } from "@/services/ItemsService/types";

export default function useGetItems(searchValue: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);
  const [response, setResponse] = useState<GetItemsResponse | null>(null);

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
      setResponse(response);
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

  return { response, loading, error, get };
}
