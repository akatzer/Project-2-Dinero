var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/transactions/", function(req, res) {
    db.Transactions.findAll({}).then(function(dbTransactions) {
      res.json(dbTransactions);
    });
  });


};
