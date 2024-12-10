// Expliciter le type de la variable
const myVar:string = "Hello World!"
const myNumber:number = 2
const myBoolean:boolean = true
const myArray:string[] = ["Hello", "World", "!"]

type User = {
    name: string,
    age: number
}

const user: User = {
    name: "Aaron",
    age: 25
}

const user2: User = {
    name: "John",
    age: 42
}

const users = [user, user2]

const printUser = (user: User): void => {
    console.log("Name : " + user.name)
    console.log("Age : " + user.age + "\n")
}

const printUsers = (users: User[]) => {
    users.forEach(printUser)
}

// const printUsers = (users: User[]) => {
//     users.forEach((user: User) => {
//         printUser(user);
//     })
// }

printUsers(users)