const { Schema, model, SchemaTypes } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // can be identical to other users, so we don't need to pass unique

  links: [{ type: SchemaTypes.ObjectId, ref: 'Link' }]
})

module.exports = model('User', schema)
