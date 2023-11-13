import { Role } from "src/users/user-role.enum";

export default class CreateUserDto {
    fullname: string;
    phoneNumber: string;
    username: string;
    password: string;
    role: Role;
    image: string;
}