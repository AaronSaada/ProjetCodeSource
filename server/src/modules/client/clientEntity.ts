import { ChildEntity, Column } from "typeorm";
import { User } from "../user/userEntity";

@ChildEntity()
export class Client extends User {
    @Column()
    adress: string
}