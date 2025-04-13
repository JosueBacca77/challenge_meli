import { Controller, Get, UseGuards, Query } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { SearchItemsDto } from "./dto/search-items.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async find(@Query() searchItemsDto: SearchItemsDto) {
    return await this.itemsService.searchItems(searchItemsDto);
  }
}
