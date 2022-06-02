const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const { urlDb } = require('./config')
mongoose.connect(
  urlDb,
  () => {
    console.log('connected')
  },
  (err) => console.error(err)
)
