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
        // ... db working
        const userPayload = {
            _id: '12345',
            role: 'user',
            session_hash: '2dh29042390j',
        };
        return this.jwtService.sign(userPayload);
    }

    async validateUser(payload: User) {
        console.log(payload, 'TEST');
        return await this.usersService.findOne(payload);
    }
}
