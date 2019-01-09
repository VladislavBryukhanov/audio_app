import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
