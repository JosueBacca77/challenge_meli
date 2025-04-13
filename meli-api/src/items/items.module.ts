import { Module } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { ItemsController } from "./items.controller";
import { MeliApiItemsRepositoryModule } from "src/repositories/meli-api-repository/meli-api-items-repository/meli-api-items-repository.module";

@Module({
  imports: [MeliApiItemsRepositoryModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
