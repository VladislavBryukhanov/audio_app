import {Controller, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UsersService} from '../database/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UsersService) {}

    @Get()
    // @UseGuards(AuthGuard())
    async getUsers() {
        return await this.userService.findAll();
    }
}
