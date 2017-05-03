// var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// module.exports = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

module.exports = new Sequelize('chat', 'root', '');

console.log("=====> IN DB <======");