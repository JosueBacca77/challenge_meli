import Repository from "@/http/http";
import {
  GetItemDescriptionParams,
  GetItemDescriptionResponse,
  GetItemParams,
  GetItemResponse,
  GetItemsParams,
  GetItemsResponse,
} from "./types";
import { ENVS } from "@/utils/Envs";
import { HttpError } from "@/utils/types";

export class ItemsService {
  private static instance: ItemsService | null = null;
  private endpoint: string;
  private repository: Repository;

  constructor() {
    this.endpoint = `${ENVS.MELI_CORE_URL}/items`;
    this.repository = new Repository();
  }

  public static getInstance() {
    if (!ItemsService.instance) {
      ItemsService.instance = new ItemsService();
    }
    return ItemsService.instance;
  }

  async getItems(getDoctorParams: GetItemsParams): Promise<GetItemsResponse> {
    try {
      const { searchValue, signal } = getDoctorParams;

      const endpoint = `${this.endpoint}${
        searchValue ? `?search=${searchValue}` : ""
      }`;

      const data: GetItemsResponse = await this.repository.get({
        endpoint,
        signal,
      });

      return Promise.resolve(data);
    } catch (error: any) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500,
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error("ERROR ITEMS SERVICE", httpError);
      return Promise.reject(httpError);
    }
  }

  async getItem(getDoctorParams: GetItemParams): Promise<GetItemResponse> {
    try {
      const { id, signal } = getDoctorParams;

      const endpoint = `${this.endpoint}/${id}`;

      const data: GetItemResponse = await this.repository.get({
        endpoint,
        signal,
      });

      return Promise.resolve(data);
    } catch (error: any) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500,
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error("ERROR ITEMS SERVICE", httpError);
      return Promise.reject(httpError);
    }
  }
  async getItemDescription(
    getDoctorParams: GetItemDescriptionParams
  ): Promise<GetItemDescriptionResponse> {
    try {
      const { id, signal } = getDoctorParams;

      const endpoint = `${this.endpoint}/${id}/description`;

      const data: GetItemDescriptionResponse = await this.repository.get({
        endpoint,
        signal,
      });

      return Promise.resolve(data);
    } catch (error: any) {
      const httpError: HttpError = {
        statusCode: error.response?.status || 500,
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error("ERROR ITEMS SERVICE", httpError);
      return Promise.reject(httpError);
    }
  }
}
