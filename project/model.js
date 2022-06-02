const mongoose = require('mongoose')
require('mongoose-type-url')
const projectSchema = mongoose.Schema({
  projectName: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  githubLink: {
    required: true,
    type: mongoose.SchemaTypes.Url,
  },
  imgUrl: {
    required: true,
    type: mongoose.SchemaTypes.Url,
  },
  tech: {
    required: true,
    type: [],
  },
  previewLink: {
    required: true,
    type: mongoose.SchemaTypes.Url,
  },
})
module.exports = mongoose.model('projects', projectSchema)
