import { DataSource } from 'typeorm'
import { User } from './modules/user/userEntity'

export const AppDataSource =
  new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'gosman',
    password: 'yoo',
    database: 'app_db',
    entities: [User],
    synchronize: true,
    logging: false,
  })