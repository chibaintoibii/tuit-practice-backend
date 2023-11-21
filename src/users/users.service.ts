import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from './models/user.model';
import {CreateUserDto} from './dto/create-user.dto';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService,
    @InjectModel(User) private readonly userModel: typeof User,
  ) {
  }

  async create(dto: CreateUserDto): Promise<User> {
    const hashPassword = await this.authService.hashPassword(dto.password);
    return await this.userModel.create({
      ...dto,
      password: hashPassword
    });
  }

  async findById(id: number) {
    return this.userModel.findByPk(id, {having: {state: 1}});
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findByPk(username);
  }

  async findAllTeachers(): Promise<User[]> {
    return await this.userModel.findAll({
      where: {role: 'teacher', state: 1},
      attributes: {exclude: ['password']}
    });
  }

  async findAllStudents(): Promise<User[]> {
    return await this.userModel.findAll({
      where: {role: 'student', state: 1},
      attributes: {exclude: ['password']}
    });
  }
}
