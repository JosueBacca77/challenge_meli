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

      debugger;
      const data: GetItemsResponse = await this.repository.get({
        endpoint,
        signal,
      });

      // const data = {
      //   items: [],
      //   author: { name: "", lastname: "" },
      //   categories: [],
      // };

      return Promise.resolve(data);
    } catch (error: any) {
      // Captura el error de Axios y formatea para que devuelva un HttpError consistente
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
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
      // Captura el error de Axios y formatea para que devuelva un HttpError consistente
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
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

      debugger;
      const data: GetItemDescriptionResponse = await this.repository.get({
        endpoint,
        signal,
      });

      // const data = {
      //   item: {
      //     id: "",
      //     title: "",
      //     condition: "",
      //     free_shopping: true,
      //     picture: "",
      //     price: { amount: 0, currency: "", decimals: 0 },
      //     sold_quantity: 0,
      //     description: "",
      //   },
      //   author: { name: "", lastname: "" },
      // };
      return Promise.resolve(data);
    } catch (error: any) {
      // Captura el error de Axios y formatea para que devuelva un HttpError consistente
      const httpError: HttpError = {
        statusCode: error.response?.status || 500, // Si no existe response, 500 por defecto
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };

      console.error("ERROR ITEMS SERVICE", httpError);
      return Promise.reject(httpError);
    }
  }
}
