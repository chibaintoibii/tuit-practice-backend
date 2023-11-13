import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import Enrollment from "src/enrollments/models/enrollment";
import Group from "src/groups/models/group";
import { Role } from "src/users/user-role.enum";

@Table({
    tableName: "users",
    timestamps: true,
})
export default class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'user_id',
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fullname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'phone_number',
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    username: string;

    @Column({
        type: DataType.STRING,
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

    @HasMany(() => Enrollment)
    enrollments: Enrollment[];
}