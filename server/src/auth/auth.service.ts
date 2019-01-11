import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UsersService} from '../database/user/user.service';
import {User} from '../database/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
    ) {}

    signIn(user): string {
        const token = this.jwtService.sign({payload: user});
        return `bearer ${token}`;
    }

    async validateUser(payload: User) {
        return await this.usersService.findOne(payload);
    }
}
