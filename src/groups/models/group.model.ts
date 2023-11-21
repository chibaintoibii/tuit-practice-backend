import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import {Enrollment} from "src/enrollments/models/enrollment.model";
import {User} from "src/users/models/user.model";

@Table({
    tableName: 'groups',
    timestamps: true,
})
export class Group extends Model<Group> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'group_id',
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    teacherId: number;

    @BelongsTo(() => User)
    teacher: User;

    @HasMany(() => Enrollment)
    students: Enrollment[];

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 1,
    })
    state: number;
}