const mongoose = require('mongoose')
require('mongoose-type-url')
const topicSchema = mongoose.Schema({
  urlTopic: {
    unique: true,
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
})
module.exports = mongoose.model('Topic', topicSchema)
