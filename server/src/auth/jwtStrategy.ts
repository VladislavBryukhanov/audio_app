import {Injectable, UnauthorizedException} from '@nestjs/common';
import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '276dtW(T*W(hyw#&*xchyw98desupfef',
        });
    }

    validate(payload) {
        console.log(payload, 'TEST_2');
        const user = this.authService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
