import { Controller, Get, UseGuards, Query, Param } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { SearchItemsDto } from "./dto/search-items.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { GetItemDescriptionDto } from "./dto/get-item-description.dto";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async find(@Query() searchItemsDto: SearchItemsDto) {
    return await this.itemsService.searchItems(searchItemsDto.search ?? "");
  }

  @UseGuards(AuthGuard)
  @Get("/:id/description")
  async findItemDescription(@Param() params: GetItemDescriptionDto) {
    return await this.itemsService.getItemDescription(params.id);
  }
}
