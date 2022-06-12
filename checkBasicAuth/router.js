const express = require('express')
const router = express.Router()
const User = require('../user/model')
const bcrypt = require('bcryptjs')
router.post('/check-basic-auth', async (req, res) => {
  try {
    const { username, password } = req.body
    const users = await User.findOne({ username: username })
    if (users) {
      const checkPassword = bcrypt.compareSync(password, users.password)
      if (checkPassword) {
        res.status(200).json({
          data: {
            found: true,
          },
        })
      } else {
        res.status(403).json({
          message: 'wrong password',
        })
      }
    } else {
      res.status(403).json({
        message: 'username not found',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
