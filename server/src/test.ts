import { AppDataSource } from "./dataSource"
import { Animal } from "./modules/animal/animalEntity"
import { animalRepository } from "./modules/animal/animalRepository"
// import { Client } from "./modules/client/clientEntity"
// import { Company } from "./modules/company/companyEntity"
import { User } from "./modules/user/userEntity"
import { userRepository } from "./modules/user/userRepository"
// import { clientRepository } from "./modules/client/clientRepository"
// import { companyRepository } from "./modules/company/companyRepository"

const test = async () => {

    await AppDataSource.initialize()

    const animal = new Animal()
    animal.name = "Choupy"
    animal.species = "Dog"

    await animalRepository.save(animal)

    const user = new User()
    user.login = "Admin"
    user.password = "admin"
    user.animal = animal
    user.role = "admin"

    await userRepository.save(user)

}

test()