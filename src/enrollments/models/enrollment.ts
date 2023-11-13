import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Group from "src/groups/models/group";
import { EnrollmentStatus } from "src/enrollments/enrollment-status.enum";
import User from "src/users/models/user";

@Table({
    tableName: 'enrollments',
    timestamps: true,
})
export default class Enrollment extends Model<Enrollment> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'enrollemt_id',
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'student_id',
    })
    studentId: number;

    @BelongsTo(() => User)
    student: User;

    @ForeignKey(() => Group)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'group_id',
    })
    groupId: number;

    @BelongsTo(() => Group)
    group: Group;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    companyName: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'region_id',
    })
    regionId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'district_id'
    })
    districtId: number;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'company_phone_num',
    })
    companyPhoneNumber: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'attached_employee',
    })
    attachedEmployee: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'start_date',
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'finish_date',
    })
    finishDate: Date;

    @Column({
        type: DataType.ENUM(...Object.values(EnrollmentStatus)),
        allowNull: false,
        defaultValue: EnrollmentStatus.ENROLLED
    })
    status: EnrollmentStatus;
}