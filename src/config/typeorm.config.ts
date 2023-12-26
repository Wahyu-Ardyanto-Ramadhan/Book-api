/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Wahyu',
  password: 'wahyu123',
  database: 'book_api',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
