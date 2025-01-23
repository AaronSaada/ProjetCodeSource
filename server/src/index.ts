import express from 'express'
import cors from 'cors'
import { AppDataSource } from './dataSource'
import { userController } from './modules/user/userController'
import { authController } from './modules/auth/authController'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userController)
app.use('/auth', authController)

app.get('/', (req, res) => {
  res.end(`Hello World !`)
})

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000")
  })
})
