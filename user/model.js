const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const HASH_ROUND = 10

let userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, 'nama harus diisi'],
    maxlength: [225, 'panjang username harus antara 3 - 225 karakter'],
    minlength: [3, 'panjang username harus antara 3 - 225 karakter'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'kata sandi harus diisi'],
    maxlength: [225, 'panjang password maksimal 225 karakter'],
  },
})

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND)
  next()
})

module.exports = mongoose.model('User', userSchema)
