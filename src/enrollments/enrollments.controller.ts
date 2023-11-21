import {Body, Controller, Post} from '@nestjs/common';
import {EnrollmentsService} from "./enrollments.service";
import {CreateEnrollmentDto} from "./dto/create-enrollment.dto";

@Controller('api/enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  create(@Body() dto: CreateEnrollmentDto) {
    return this.enrollmentsService.create(dto);
  }
}
