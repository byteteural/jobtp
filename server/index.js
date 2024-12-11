const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const { PrismaClient } = require('@prisma/client')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = new PrismaClient()
db.test.create({
  data: {
    name: 'Test'
  }
})

db.test.findMany().then(res => {
  console.log(res)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})