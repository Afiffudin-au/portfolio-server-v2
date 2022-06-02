const mongoose = require('mongoose')
require('mongoose-type-url')
const languageSchema = mongoose.Schema({
  urlProgLang: {
    unique: true,
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
})
module.exports = mongoose.model('Language', languageSchema)
