import { Module } from "@nestjs/common";
import { ItemsModule } from "./items/items.module";
import { MeliApiItemsRepositoryModule } from "./repositories/meli-api-repository/meli-api-items-repository/meli-api-items-repository.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ItemsModule,
    MeliApiItemsRepositoryModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
