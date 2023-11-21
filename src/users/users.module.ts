import {forwardRef, Module} from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from './models/user.model';
import {AuthModule} from "../auth/auth.module";
import {StudentsController} from "./students.controller";
import {AdminController} from "./admin.controller";

@Module({
  controllers: [TeachersController, StudentsController, AdminController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService]
})
export class UsersModule {}
