import { Module } from "@nestjs/common";
import { ItemsModule } from "./items/items.module";
import { MeliApiItemsRepositoryModule } from "./repositories/meli-api-repository/meli-api-items-repository/meli-api-items-repository.module";

@Module({
  imports: [ItemsModule, MeliApiItemsRepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
