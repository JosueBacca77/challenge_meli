import { Injectable } from "@nestjs/common";
import HttpService from "src/common/http/http.service";
import { Item } from "src/items/entities/item.entity";
import { HttpError } from "src/common/http/types";
import { GetItemDescriptionApiResponse, SearchItemsApiResponse } from "./types";
import { AUTHOR } from "src/common/consts";
import { ItemsRepositoryInterface } from "src/repositories/interfaces/items-repository.interface";
import {
  GetItemDescriptionResponse,
  SearchItemsResponse,
} from "src/items/types";

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

      const response: SearchItemsResponse = {
        categories: data.categories,
        items: data.items,
        author: {
          name: AUTHOR.name,
          lastname: AUTHOR.lastname,
        },
      };

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

  async getItemById(id: string): Promise<Item> {
    try {
      const data = await this.http.get({
        endpoint: `${this.endpoint}/items/${id}`,
      });

      return Promise.resolve(data);
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

      const response: GetItemDescriptionResponse = {
        item: data.item,
        author: {
          name: AUTHOR.name,
          lastname: AUTHOR.lastname,
        },
      };

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
