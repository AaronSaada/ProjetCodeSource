import express from 'express'
import { expressjwt as jwt } from "express-jwt"
import { AppDataSource } from './dataSource'
import { userController } from './modules/user/userController'
import { authController } from './modules/auth/authController'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.end(`Hello World !`)
})

app.use('/users', jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }), userController)

app.use('/auth', authController)

AppDataSource.initialize().then(() => {
  app.listen(3001, () => {
    console.log("Listening on port 3001")
  })
})
