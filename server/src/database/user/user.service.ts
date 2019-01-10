import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: typeof User) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }

    async create(user: User): Promise<User> {
        console.log('RUN');
        return await this.usersRepository.create<User>(user);
    }
}
