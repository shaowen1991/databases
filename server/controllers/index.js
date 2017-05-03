var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var data = models.messages.get();
      res.send(data);
      // models.messages.get((data) => {
      //   res.send(data);
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("controller message post req body: ", req.body);
      models.messages.post(req.body);
      res.send('message posted');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((data) => {
        res.send(data);
      });
    },
    post: function (req, res) {
      console.log("controller user post req body: ", req.body);
      models.users.post(req.body);
      res.send('user posted');
    }
  }
};

console.log("=====> IN CONTROLLER <======");
