import {Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {Enrollment} from "src/enrollments/models/enrollment.model";
import {Group} from "src/groups/models/group.model";
import { Role } from "src/shared/enums/user-role.enum";

@Table({
    tableName: "users",
    timestamps: true,
})
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'user_id',
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        field: 'full_name'
    })
    fullName: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        field: 'phone_number',
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    username: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,

    })
    password: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 1
    })
    state: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    image?: string;

    @Column({
        type: DataType.ENUM(...Object.values(Role)),
        allowNull: false,
    })
    role: Role;

    @HasMany(() => Group)
    groups: Group[];

    @HasOne(() => Enrollment)
    enrollments: Enrollment[];
}