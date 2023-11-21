import {Injectable} from '@nestjs/common';
import {Group} from './models/group.model';
import {InjectModel} from '@nestjs/sequelize';
import {CreateGroupDto} from './dto/create-group.dto';

@Injectable()
export class GroupsService {
    constructor(@InjectModel(Group) private readonly groupModel: typeof Group) {}

    async create(dto: CreateGroupDto): Promise<Group> {
        return this.groupModel.create(dto);
    }

    async findAll(): Promise<Group[]> {
        return this.groupModel.findAll({
            where: {state: 1}
        });
    }

    async findTeacherGroups(teacherId: number): Promise<Group[]>{
        return this.groupModel.findAll({
            where: {teacherId, state: 1}
        });
    }

    async findOne(id: number): Promise<Group> {
        return this.groupModel.findByPk(id, {
            include: 'all',
            having: {state: 1}
        });
    }
}
