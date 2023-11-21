import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('api/teachers')
export class TeachersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllTeachers() {
        return this.usersService.findAllTeachers();
    }
}
