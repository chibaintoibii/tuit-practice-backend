import {IsNumber, IsString, Length} from "class-validator";

export class CreateGroupDto {
    @IsString()
    @Length(5, 100)
    name: string;

    @IsNumber()
    teacherId: number;
}