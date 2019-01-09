import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    signIn(user): string {
        // ... db working
        const userPayload = {
            _id: '12345',
            role: 'user',
            session_hash: '2dh29042390j',
        };
        return this.jwtService.sign(userPayload);
    }
}
