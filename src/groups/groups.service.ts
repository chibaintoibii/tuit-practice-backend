import { Injectable } from '@nestjs/common';
import Group from './models/group';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(Group) private readonly groupModel: typeof Group) {}

    async create(dto: CreateGroupDto): Promise<Group> {
        const group = await this.groupModel.create(dto);
        return group;
    }

    async findAll(): Promise<Group[]> {
        const groups = await this.groupModel.findAll({
            where: { state: 1 }
        });
        return groups;
    }

    async findTeacherGroups(teacherId: number): Promise<Group[]>{
        const groups = await this.groupModel.findAll({
            where: { teacherId, state: 1 }
        });
        return groups;
    }

    async findOne(id: number): Promise<Group> {
        const group = await this.groupModel.findByPk(id, {
            include: 'all',
            having: { state: 1 }
        });
        return group;
    }
}
