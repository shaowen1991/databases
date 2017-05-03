var db = require('../db');
var Sequelize = require('sequelize');

// module.exports = {
//   messages: {
//     get: function(cb) {    
//       db.query('SELECT * FROM messages', function(err, results, fields) {
//         if (err) {throw err;}
//         console.log("MODEL GET MESSAGES \n", results);
//         cb(results);
//       });
//     }, // a function which produces all the messages
//     post: function(message) {
//       var queryString = "INSERT INTO messages (id,text,createAt,username,roomname) VALUES  (NULL, ? ,NOW(), ?, ?)";
//       var queryArgs = [message.text, message.username, message.roomname];
//       db.query(queryString, queryArgs, function(err, reuslts, fields){
//         if (err) {throw err;}
//         console.log("MODEL POST MESSAGE.", message);
//       });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function(cb) {
//       db.query('SELECT username FROM messages', function(err, results, fields) {
//         if (err) {throw err;}
//         console.log("MODEL GET USER \n", results);
//         cb(results);
//       });
//     },
//     post: function(message) {
//       var queryString = "INSERT INTO messages (id,text,createAt,username,roomname) VALUES  (NULL, NULL ,NOW(), ?, NULL)";
//       var queryArgs = [message.username];
//       db.query(queryString, queryArgs, function(err, reuslts, fields){
//         if (err) {throw err;}
//         console.log("MODEL POST USER.", message.username);
//       });
//     }
//   }
// };
var Messages = db.define('Messages', {
  // id: Sequelize.INTEGER,
  text: Sequelize.STRING,
  username: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  messages: {
    get: function() {
      Messages.sync()
        // .then(function() {
        //   return Messages.create();
        // })
        .then(function() {
          console.log("MODEL GET MESSAGES \n", Messages.findAll());
          console.log("####################");
          return Messages.findAll();   
        })
        .then(function(ms) {
          console.log("####################");
          var results = [];
          ms.forEach(function(m) {
            // console.log(m.username + ' exists');
            results.push(m.dataValues);
          });
          console.log(results);
          return results;
          // db.close();
        })
        .catch(function(err) {
          console.error(err);
          // db.close();
        });
    },
    post: function(message) {
      Messages.sync() 
        .then(function () {
          console.log("MODEL POST MESSAGE.", message);
          return Messages.create({
            // id: Sequelize.INTEGER,
            text: message.text,
            username: message.username,
            roomname: message.roomname
          });
        })
        .then(function(m) {
          console.log("message post sencond then", m);
          // db.close();
        })
        .catch(function(err) {
          console.log("message post ERROR");
          console.error(err)
          // db.close();
        });
      }
    },
  users: {
    get: function() {
      
    },
    post: function() {

    }
  }
}

console.log("=====> IN MODEL <======");
