import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {UsersService} from '../database/user/user.service';
import {User} from '../database/user/user.entity';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private usersService: UsersService,
        private authService: AuthService,
    ) {}

    @Get()
    @UseGuards(AuthGuard())
    async getProfile(@Req() req): Promise<User> {
        return req.user;
    }

    @Post('signUp')
    async signUp(@Body() req): Promise<string> {
        await this.usersService.create(req);
        return this.authService.signIn(req);
    }

    @Post('signIn')
    async signIn(@Body() req): Promise<string> {
        return this.authService.signIn(req);
    }

}
