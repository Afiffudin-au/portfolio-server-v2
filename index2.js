const express = require('express')
const app = express()
const port = 8001
const cors = require('cors')
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/', (req, res) => {
  res.status(200).send('Hello')
})
