const mongoose = require('mongoose')
require('mongoose-type-url')
const testimonialSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  imgUrl: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
})
module.exports = mongoose.model('testimonials', testimonialSchema)
