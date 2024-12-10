import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.post('/login', (req, res) => {
  if (req.body.password === 'test' && req.body.login === 'test') {
    res.send('Connected!')
  }else{
    res.sendStatus(401)
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})