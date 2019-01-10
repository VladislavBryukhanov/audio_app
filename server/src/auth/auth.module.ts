import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {JwtStrategy} from './jwtStrategy';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {UsersModule} from '../database/user/user.module';
import {AuthController} from './auth.controller';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secretOrPrivateKey: '12j2903yue98h98hd9wehdwed89',
            signOptions: { expiresIn: 3600 },
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
