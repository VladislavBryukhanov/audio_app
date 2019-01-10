import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from '../../models/user';
import {UsersService} from '../../database/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private usersService: UsersService) {}

    @Get()
    getProfile(): User {
        const user: User = new User();
        user.username = 'Username';
        return user;
    }

    @Post('signUp')
    signUp(@Body() res): string {
        console.log('SIGN UP');
        this.usersService.create(res)
            .then(result => console.log(result, 'TEST!!!'));
        return 'TOKEN';
    }

    @Post('signIn')
    signIn(): string {
        console.log('SIGN IN');
        return 'TOKEN';
    }

}
