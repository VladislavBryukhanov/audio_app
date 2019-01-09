import {Controller, Get, Post} from '@nestjs/common';
import {User} from '../../models/user';

@Controller('auth')
export class AuthController {

    @Get()
    getProfile(): User {
        const user: User = new User();
        user.username = 'SignUP';
        return user;
    }

    @Post('signUp')
    signUp(): string {
        return 'TOKEN';
    }

    @Post('signIn')
    signIn(): string {
        return 'TOKEN';
    }

}
