import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database.module';
import {UsersService} from './user.service';
import {UsersProviders} from './user.providers';

@Module({
    imports: [DatabaseModule],
    providers: [UsersService, ...UsersProviders],
    exports: [UsersService],
})
export class UsersModule {}
