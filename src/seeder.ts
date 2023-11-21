import {Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users/models/user.model";
import {AuthService} from "./auth/auth.service";
import {Role} from "./shared/enums/user-role.enum";
import {CreateUserDto} from "./users/dto/create-user.dto";

@Injectable()
export class Seeder {
  constructor(
    @Inject(AuthService) readonly authService: AuthService,
    @InjectModel(User) private userModel: typeof User
  ) {
  }

  async seed() {
    const hashPassword = await this.authService.hashPassword('islom08118173')

    const data: CreateUserDto = {
      fullName: 'Xamidjonov Islom',
      username: 'chibaintoibii',
      password: hashPassword,
      role: Role.ADMIN,
      phoneNumber: '+998914431921'
    }

    const [result, created] = await this.userModel.findOrCreate({
      where: {username: 'chibaintoibii'},
      defaults: data
    })

    if (!created) {
      await result.update(data);
      console.log('admin already exists')
    } else
      console.log("admin was created", result);

    return result;
  }
}