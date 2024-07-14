const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  customerId: String,
  jobDateTime: String,
  trade: String,
  jobDescription: String,
  jobDuration: Number,
  image: String,
  jobStatus: String,
});
const Job = mongoose.model('Job', Schema);
module.exports = Job;
