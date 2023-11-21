import {Role} from "src/shared/enums/user-role.enum";
import {IsEnum, IsOptional, IsString, Length} from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(5, 100)
  fullName: string;

  @IsString()
  @Length(9, 100)
  phoneNumber: string;

  @IsString()
  @Length(6, 100)
  username: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  image?: string;
}