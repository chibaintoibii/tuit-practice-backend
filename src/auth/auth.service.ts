import { Injectable, UnauthorizedException } from '@nestjs/common';
import LoginUserDto from './dto/login-user.dto';
import User from 'src/users/models/user';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}

    async login(dto: LoginUserDto) {
        const user = await this.validateUser(dto);
        if(!user) 
            throw new UnauthorizedException('Invalid user credentials');
        return this.generateAccessToken(user);
    }

    private generateAccessToken(user: User) {
        const payload = { id: user.id, role: user.role };
        return {
            accessToken: this.jwtService.sign(payload, {
                secret: jwtConstants.secret
            })
        }
    }

    async validateUser(dto: LoginUserDto) {
        const user = await this.usersService.findByUsername(dto.username);
        if(!user) return null;
        const isEqualsPassword = await bcrypt.compare(user.password, dto.password);
        if(!isEqualsPassword) return null;
        return user;
    }

    async hash(password: string) {
        return bcrypt.hash(password, 13);
    }
}
