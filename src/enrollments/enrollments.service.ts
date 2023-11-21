import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Enrollment} from './models/enrollment.model';
import {CreateEnrollmentDto} from './dto/create-enrollment.dto';
import {GroupsService} from "../groups/groups.service";
import {UsersService} from "../users/users.service";

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectModel(Enrollment) private readonly enrollmentModel: typeof Enrollment,
    private groupsService: GroupsService,
    private usersService: UsersService
  ) {}

  async create(dto: CreateEnrollmentDto) {
    const group = await this.groupsService.findOne(dto.groupId);
    if (!group)
      throw new HttpException('group not found', 404);
    const student = await this.usersService.findById(dto.studentId);
    if (!student)
      throw new HttpException('student not found', 404);
    return this.enrollmentModel.create(dto);
  }
}
