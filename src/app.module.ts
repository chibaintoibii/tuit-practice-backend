import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { ReportsModule } from './reports/reports.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { FileModule } from './file/file.module';
import Enrollment from './enrollments/models/enrollment';
import Group from './groups/models/group';
import Report from './reports/models/report';
import User from './users/models/user';
import db from './db/config';

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
    ScheduleModule.forRoot(),
    AuthModule, 
    UsersModule, 
    GroupsModule, 
    EnrollmentsModule, 
    ReportsModule, 
    FileModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
