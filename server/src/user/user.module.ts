import {Module} from '@nestjs/common';
import {UsersModule} from '../database/user/user.module';
import {UserController} from './user.controller';

@Module({
    imports: [UsersModule],
    controllers: [UserController],
})
export class UsersModule {}
