import { Module } from '@nestjs/common';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {Enrollment} from './models/enrollment.model';
import {GroupsModule} from "../groups/groups.module";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
  imports: [
    SequelizeModule.forFeature([Enrollment]),
    GroupsModule,
    UsersModule
  ]
})
export class EnrollmentsModule {}
