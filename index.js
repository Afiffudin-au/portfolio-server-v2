const express = require('express')
const app = express()
const homeRouter = require('./home/router')
const topicRouter = require('./topic/router')
const testimonialRouter = require('./testimonial/router')
const languageRouter = require('./language/router')
const projectRouter = require('./project/router')
const userRouter = require('./user/router')
const checkBasicAuthRouter = require('./checkBasicAuth/router')
const port = process.env.PORT || 3000
const cors = require('cors')
const mwBasicAuth = require('./middleware/basicAuth')
require('./db/mongoose')
const URL = '/api/v2'
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// BASE_URL
app.use(homeRouter)
// BASE_URL/api/v2
app.use(URL, homeRouter)
//For Production
app.use(URL, mwBasicAuth, userRouter)

//For dev or Generate New Basic auth username and password
// app.use(URL, userRouter)

//routers
app.use(URL, checkBasicAuthRouter)
app.use(URL, mwBasicAuth, topicRouter)
app.use(URL, mwBasicAuth, testimonialRouter)
app.use(URL, mwBasicAuth, languageRouter)
app.use(URL, mwBasicAuth, projectRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
