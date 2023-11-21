import { Controller, Get } from "@nestjs/common";
import {UsersService} from "./users.service";


@Controller('api/students')
export class StudentsController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllStudents() {
    return this.usersService.findAllStudents();
  }

}