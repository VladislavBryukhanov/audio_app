import {AllowNull, Column, Length, Model, Table, Unique} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @AllowNull(false)
    @Column
    username: string;

    @Unique
    @AllowNull(false)
    // @Length({min: 6, max: 64})
    @Column
    login: string;

    @AllowNull(false)
    // @Length({min: 8, max: 64})
    @Column
    password: string;
}
