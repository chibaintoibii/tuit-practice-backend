import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './models/user';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userModel: typeof User) {}

    async create(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        const { password, ...result } = user;
        return result;
    }

    async findByUsername(username: string) {
        return this.userModel.findOne({ where: { username, state: 1 } });
    }

    async findAllTeachers() {
        const teachers = await this.userModel.findAll({ 
            where: { role: 'teacher', state: 1 }, 
            attributes: { exclude: ['password'] }
        });
        return teachers;
    }

    async findAllStudents() {
        const teachers = await this.userModel.findAll({ 
            where: { role: 'student', state: 1 }, 
            attributes: { exclude: ['password'] }
        });
        return teachers;
    }
}
