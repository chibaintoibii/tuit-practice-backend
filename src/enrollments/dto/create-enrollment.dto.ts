import {IsDate, IsNumber, IsString, Length} from "class-validator";

export class CreateEnrollmentDto {
    @IsNumber()
    studentId: number;

    @IsNumber()
    groupId: number;

    @IsString()
    @Length(3, 100)
    companyName: string;

    @IsNumber()
    regionId: number;

    @IsNumber()
    districtId: number;

    @IsString()
    @Length(3, 100)
    companyPhoneNumber: string;

    @IsString()
    @Length(10, 100)
    attachedEmployee: string;

    @IsDate()
    startDate: Date;

    @IsDate()
    finishDate: Date;
}