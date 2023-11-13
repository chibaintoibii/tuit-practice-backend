import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Enrollment from './models/enrollment';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentsService {
    constructor(@InjectModel(Enrollment) private readonly enrollmentModel: typeof Enrollment) {}

    async create(dto: CreateEnrollmentDto) {
        return this.enrollmentModel.create(dto);
    }
}
