import {Module, OnModuleInit} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { ReportsModule } from './reports/reports.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { FileModule } from './file/file.module';
import {Enrollment} from './enrollments/models/enrollment.model';
import {Group} from './groups/models/group.model';
import {Report} from './reports/models/report.model';
import {User} from './users/models/user.model';
import db from './shared/constants/db.constants'
import {Seeder} from "./seeder";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: db.host,
      port: db.port,
      username: db.user,
      password: db.password,
      database: db.name,
      models: [User, Enrollment, Group, Report],
      autoLoadModels: true,
      retryAttempts: 10,
      retryDelay: 5000
    }),
    SequelizeModule.forFeature([User]),
    ScheduleModule.forRoot(),
    AuthModule, 
    UsersModule, 
    GroupsModule, 
    EnrollmentsModule, 
    ReportsModule, 
    FileModule
  ],
  controllers: [],
  providers: [Seeder],
})
export class AppModule implements OnModuleInit{
  constructor(private readonly seeder: Seeder) {}

  async onModuleInit() {
    // Seed the data when the application starts
    await this.seeder.seed();
  }
}
