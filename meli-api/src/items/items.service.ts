import { Inject, Injectable } from "@nestjs/common";
import { ItemsRepositoryInterface } from "../repositories/interfaces/items-repository.interface";
import { GetItemDescriptionResponse, SearchItemsResponse } from "./types";

@Injectable()
export class ItemsService {
  constructor(
    @Inject("ItemsRepository")
    private readonly itemsRepository: ItemsRepositoryInterface
  ) {}
  async searchItems(search: string): Promise<SearchItemsResponse> {
    return await this.itemsRepository.searchItems(search);
  }

  async getItemDescription(id: string): Promise<GetItemDescriptionResponse> {
    return await this.itemsRepository.getItemDescription(id);
  }
}
