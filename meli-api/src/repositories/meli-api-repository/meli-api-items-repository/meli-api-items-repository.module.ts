import { Module } from "@nestjs/common";
import { MeliApiItemsRepository } from "./meli-api-items.repository";
import { HttpModule } from "src/common/http/http.module";

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: "ItemsRepository",
      useClass: MeliApiItemsRepository,
    },
  ],
  exports: ["ItemsRepository"],
})
export class MeliApiItemsRepositoryModule {}
