import { Sequelize } from 'sequelize-typescript';
import {User} from './user/user.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'rootpass',
                database: 'audio',
            });
            sequelize.addModels([User]);
            await User.sync();
            return sequelize;
        },
    },
];
