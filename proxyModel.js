const mongoose = require('mongoose')

const ProxyModel = mongoose.model('Proxy', new mongoose.Schema({
  port: {
    type: Number,
    required: true
  },
  subdomain: {
    type: String,
    required: true
  },
  online: Boolean,
  asleep: {
    type: Boolean,
    default: false
  }
}))

module.exports = ProxyModel