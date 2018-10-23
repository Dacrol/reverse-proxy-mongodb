const mongoose = require('mongoose')

const ProxyModel = mongoose.model('Proxy', new mongoose.Schema({
  port: Number,
  subdomain: String
}));

module.exports = ProxyModel