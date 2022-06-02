const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
mongoose.connect(
  process.env.MONGO_URL,
  () => {
    console.log('connected')
  },
  (err) => console.error(err)
)
