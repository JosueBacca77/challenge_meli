import { IsString } from "class-validator";

export class SearchItemsDto {
  @IsString()
  search: string;
}
