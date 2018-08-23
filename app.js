// const mongoose = require('mongoose');

// DB Connection
const db = require('./api/config/db').database;
// mongoose.connect(db);
// mongoose.connect.on('connected', () => {
//   console.log('Databse connected: ' + db);
// });
// mongoose.connect.on('error', err => {
//   console.log('Databse error: ' + db);
// });

console.log(db);
