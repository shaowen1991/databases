var db = require('../db');

module.exports = {
  messages: {
    get: function(cb) {    
      db.query('SELECT * FROM messages', function(err, results, fields) {
        if (err) {throw err;}
        console.log("MODEL GET MESSAGES \n", results);
        cb(results);
      });
    }, // a function which produces all the messages
    post: function(message) {
      var queryString = "INSERT INTO messages (id,text,createAt,username,roomname) VALUES  (NULL, ? ,NOW(), ?, ?)";
      var queryArgs = [message.text, message.username, message.roomname];
      db.query(queryString, queryArgs, function(err, reuslts, fields){
        if (err) {throw err;}
        console.log("MODEL POST MESSAGE.", message);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(cb) {
      db.query('SELECT username FROM messages', function(err, results, fields) {
        if (err) {throw err;}
        console.log("MODEL GET USER \n", results);
        cb(results);
      });
    },
    post: function(message) {
      var queryString = "INSERT INTO messages (id,text,createAt,username,roomname) VALUES  (NULL, NULL ,NOW(), ?, NULL)";
      var queryArgs = [message.username];
      db.query(queryString, queryArgs, function(err, reuslts, fields){
        if (err) {throw err;}
        console.log("MODEL POST USER.", message.username);
      });
    }
  }
};

console.log("=====> IN MODEL <======");
