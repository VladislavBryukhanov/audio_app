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

    async findOne(query): Promise<User> {
        return await this.usersRepository.findOne<User>({where: query});
    }

    async create(user: User): Promise<User> {
        return await this.usersRepository.create<User>(user);
    }
}
