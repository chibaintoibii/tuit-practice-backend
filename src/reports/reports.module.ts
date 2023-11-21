import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Report } from './models/report.model';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [
    SequelizeModule.forFeature([Report])
  ]
})
export class ReportsModule {}
