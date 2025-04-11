import { axiosInstance } from "@/lib/axios/axios";

import { DeleteParams, GetParams, PostParams, PutParams } from "./types";
import { ENVS } from "@/utils/Envs";

type HttpHeaders = {
  "content-type": string;
  authorization: string;
};

export default class Repository {
  private headers: HttpHeaders;
  constructor() {
    this.headers = {
      "content-type": "application/json",
      authorization: `Bearer ${ENVS.MELI_API_KEY}`,
    };
  }
  async post<T>(postParams: PostParams<T>): Promise<any> {
    const { endpoint, information, signal, contentType } = postParams;

    const configuration = {
      signal,
      headers: this.headers,
    };

    if (contentType) {
      configuration.headers["content-type"] = contentType;
    }

    try {
      const response = await axiosInstance.post(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch<T>(putParams: PutParams<T>): Promise<any> {
    const { endpoint, information, signal } = putParams;

    const configuration = {
      signal,
      headers: this.headers,
    };

    try {
      const response = await axiosInstance.patch(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async put<T>(putParams: PutParams<T>): Promise<any> {
    const { endpoint, information, signal } = putParams;

    const configuration = {
      signal,
      headers: this.headers,
    };

    try {
      const response = await axiosInstance.put(
        endpoint,
        information,
        configuration
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get(getParams: GetParams) {
    const { endpoint, signal, params } = getParams;

    const configuration = {
      params,
      signal,
      headers: this.headers,
    };

    try {
      const response = await axiosInstance.get(endpoint, configuration);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(deleteParams: DeleteParams) {
    const { endpoint, signal } = deleteParams;

    const configuration = {
      signal,
      headers: this.headers,
    };
    try {
      const response = await axiosInstance.delete(endpoint, configuration);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
