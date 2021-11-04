import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.ts'],
    autoLoadEntities: true,
    synchronize: true,
};