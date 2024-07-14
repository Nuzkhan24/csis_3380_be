const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('User', Schema);
