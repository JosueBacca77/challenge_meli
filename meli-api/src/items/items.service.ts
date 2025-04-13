import { Injectable } from "@nestjs/common";
import { SearchItemsDto, SearchItemsResponse } from "./dto/search-items.dto";
import { MeliApiItemsRepository } from "src/repositories/meli-api-repository/meli-api-items-repository/meli-api-items.repository";

@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: MeliApiItemsRepository) {}
  async searchItems(data: SearchItemsDto): Promise<SearchItemsResponse> {
    return await this.itemsRepository.searchItems(data.search ?? "");
  }
}
