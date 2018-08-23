const mongoose = require('mongoose');


mongoose.connect.on('connected', err => {
  console.log('Databse error: ' + config.database);

  mongoose.connect.on('error', err => {
  console.log('Databse error: ' + config.database);
})