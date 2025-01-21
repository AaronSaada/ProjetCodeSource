import { ChildEntity, Column } from "typeorm";
import { User } from "../user/userEntity";

@ChildEntity()
export class Company extends User {
    @Column()
    companyName: string
    
}