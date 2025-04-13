import { IsString } from "class-validator";

export class GetItemDescriptionDto {
  @IsString()
  id: string;
}
