import {IsString, Length} from "class-validator";

export default class LoginUserDto {
    @IsString()
    @Length(6, 100)
    username: string;

    @IsString()
    @Length(6, 50)
    password: string;
}