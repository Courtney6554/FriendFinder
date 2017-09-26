// ===============================================================================
// LOAD DATA
// ===============================================================================

var friends = require("../data/friends.js");
var matchArr = [];

// ===============================================================================
// ROUTING...
// ===============================================================================

module.exports = function(app) {
// ===============================================================================
// GET friends API
// ===============================================================================

  app.get("/api/friends", function(req, res) {
    res.json(friends);
    friendsArr.push(friends);
  });

// ===============================================================================
// POST new user data
// ===============================================================================

  app.post("/api/friends", function(req, res) {
      friendsArray.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function() {
    matches = [];
    res.json("Cleared matches");
  });
};
