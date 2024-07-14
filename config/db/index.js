const mongoose = require('mongoose');

const setupDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(function () {
      console.log('Db connected');
    })
    .catch(function () {
      console.log('DB not connected');
    });
};

module.exports = { setupDatabase }