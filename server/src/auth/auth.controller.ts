import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from '../database/user/user.service';
import {User} from '../database/user/user.entity';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private usersService: UsersService) {}

    @Get('test')
    test(): string {
        return 'TEST';
    }

    @Get()
    @UseGuards(AuthGuard())
    async getProfile(): Promise<User> {
        return await this.usersService.findOne({username: 'Username'});
    }

    @Post('signUp')
    async signUp(@Body() req): Promise<string> {
        await this.usersService.create(req);
        return 'TOKEN';
    }

    @Post('signIn')
    async signIn(@Body() req): Promise<string> {
        console.log(req, 'REQ');
        const user = await this.usersService.findOne(req);
        console.log(user, 'USER');
        return 'TOKEN';
    }

}
