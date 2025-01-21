import { DataSource } from 'typeorm'
import { User } from './modules/user/userEntity'
import { Animal } from './modules/animal/animalEntity'
import { Client } from './modules/client/clientEntity'
import { Company } from './modules/company/companyEntity'

export const AppDataSource =
  new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'gosman',
    password: 'yoo',
    database: 'app_db',
    entities: [User, Animal, Client, Company],
    synchronize: true,
    logging: false,
  })