import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: User) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }
}
