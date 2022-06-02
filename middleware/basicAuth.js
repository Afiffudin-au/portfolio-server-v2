const auth = require('basic-auth')
const User = require('../user/model')
const bcrypt = require('bcryptjs')
const mwBasicAuth = async (req, res, next) => {
  try {
    const basicAuthUser = await auth(req)
    if (basicAuthUser) {
      const users = await User.findOne({ username: basicAuthUser.name })
      if (users) {
        if (
          basicAuthUser &&
          basicAuthUser.name.toLowerCase() === users.username.toLowerCase()
        ) {
          const checkPassword = bcrypt.compareSync(
            basicAuthUser.pass,
            users.password
          )
          if (checkPassword) {
            next()
          } else {
            res.status(401).json({
              message: 'Access Denied: Wrong Password!',
            })
          }
        } else {
          res.status(401).json({
            message: 'Access Denied: Username not match',
          })
        }
      } else {
        res.status(401).json({
          message: 'Access Denied : Username not found!',
        })
      }
    } else {
      res.status(401).json({
        message: 'Access Denied',
      })
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || `Internal server error`,
    })
  }
}

module.exports = mwBasicAuth
