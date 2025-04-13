import { Injectable } from "@nestjs/common";
import HttpService from "src/common/http/http.service";
import { HttpError } from "src/common/http/types";
import {
  GetItemApiResponse,
  GetItemDescriptionApiResponse,
  SearchItemsApiResponse,
} from "./types";
import { ItemsRepositoryInterface } from "src/repositories/interfaces/items-repository.interface";
import {
  GetItemDescriptionResponse,
  GetItemResponse,
  SearchItemsResponse,
} from "src/items/types";
import {
  getItemAdapter,
  getItemDescriptionAdapter,
  searchItemsAdapter,
} from "./adapters/search-items.adapter";

@Injectable()
export class MeliApiItemsRepository implements ItemsRepositoryInterface {
  private readonly endpoint = process.env.MELI_API_URL;

  constructor(private readonly http: HttpService) {}

  async searchItems(query: string): Promise<SearchItemsResponse> {
    try {
      const params = {
        q: query,
      };
      const data: SearchItemsApiResponse = await this.http.get({
        endpoint: `${this.endpoint}/search`,
        params,
      });

      const response: SearchItemsResponse = searchItemsAdapter(data);

      return Promise.resolve(response);
    } catch (error) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error("Error searching items meli api", httpError);
      return Promise.reject(httpError);
    }
  }

  async getItemById(id: string): Promise<GetItemResponse> {
    try {
      const data: GetItemApiResponse = await this.http.get({
        endpoint: `${this.endpoint}/items/${id}`,
      });

      const response: GetItemResponse = getItemAdapter(data);

      return Promise.resolve(response);
    } catch (error) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error(`Error searching item by id: ${id} meli api`, httpError);
      return Promise.reject(httpError);
    }
  }

  async getItemDescription(id: string): Promise<GetItemDescriptionResponse> {
    try {
      const data: GetItemDescriptionApiResponse = await this.http.get({
        endpoint: `${this.endpoint}/items/${id}/description`,
      });

      const response: GetItemDescriptionResponse =
        getItemDescriptionAdapter(data);

      return Promise.resolve(response);
    } catch (error) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error(`Error searching item by id: ${id} meli api`, httpError);
      return Promise.reject(httpError);
    }
  }
}
