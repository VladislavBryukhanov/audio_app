import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
    const options: cors.CorsOptions = {
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: 'http://localhost:8080',
    };

    const app = await NestFactory.create(AppModule);
    app.use(cors(options));
    await app.listen(3000);
}
bootstrap();
