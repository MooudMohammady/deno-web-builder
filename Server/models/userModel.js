const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: Date.now()
  },
  role: {
    type: Number,
    default: 0
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);