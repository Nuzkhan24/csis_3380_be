const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  currentBid: String,
  activeDays: String,
  bidders: []
});

module.exports = mongoose.model('Item', Schema);
