const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('Welcome to portfolio API.V2. For personal purpose only')
})
module.exports = router
