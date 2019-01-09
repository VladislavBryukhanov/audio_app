import {AllowNull, Column, Length, Model, Table, Unique} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column
    @AllowNull(false)
    username: string;

    @Column
    @Unique
    @AllowNull(false)
    @Length({min: 6, max: 64})
    login: string;

    @Column
    @AllowNull(false)
    @Length({min: 8, max: 64})
    password: string;
}
