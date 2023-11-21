import {ReportStatus} from "src/shared/enums/report-status.enum";
import {IsEnum, IsNumber, IsOptional} from "class-validator";

export class UpdateReportDto {
  @IsEnum(ReportStatus)
  status: ReportStatus;

  @IsNumber()
  @IsOptional()
  rating?: number;
}