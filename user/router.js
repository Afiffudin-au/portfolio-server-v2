const express = require('express')
const router = express.Router()
const User = require('./model')
router.get('/basic-auth', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      data: users,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.post('/basic-auth', async (req, res, next) => {
  try {
    const payload = req.body
    let user = new User(payload)
    await user.save()
    delete user._doc.password
    res.status(201).json({ data: user })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
