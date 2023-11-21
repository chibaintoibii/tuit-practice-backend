import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {GroupsService} from "./groups.service";
import {CreateGroupDto} from "./dto/create-group.dto";

@Controller('api/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  createGroup(@Body() dto: CreateGroupDto) {
    return this.groupsService.create(dto);
  }

  @Get()
  getAllGroups() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  getGroupById(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findOne(id);
  }

  @Get('teacher/:id')
  getTeacherGroups(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.findTeacherGroups(id);
  }


}
