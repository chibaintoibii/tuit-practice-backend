import {Controller} from "@nestjs/common";
import {UsersService} from "./users.service";

@Controller('api/admin')
export class AdminController {
  constructor(private readonly usersService: UsersService) {}

}