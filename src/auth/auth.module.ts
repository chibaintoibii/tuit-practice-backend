import {forwardRef, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from 'src/shared/constants/auth.constants';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn }
    }),
    forwardRef(() => UsersModule),
  ],
  exports: [AuthService]
})
export class AuthModule {}
