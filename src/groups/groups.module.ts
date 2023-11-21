import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {Group} from './models/group.model';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [
    SequelizeModule.forFeature([Group])
  ],
  exports: [GroupsService]
})
export class GroupsModule {}
