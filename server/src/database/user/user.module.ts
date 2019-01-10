import {Module} from '@nestjs/common';
import {AuthController} from '../../controllers/auth/auth.controller';
import {DatabaseModule} from '../database.module';
import {UsersService} from './user.service';
import {UsersProviders} from './user.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [UsersService, ...UsersProviders],
})
export class UsersModule {}
