import {IsString, Length} from "class-validator";

export class CreateReportDto {
  @IsString()
  @Length(100, 3000)
  content: string;

}