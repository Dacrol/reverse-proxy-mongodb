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
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}))

module.exports = ProxyModel