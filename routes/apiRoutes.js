var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/transactions/", function(req, res) {
    db.Transactions.findAll({}).then(function(dbTransactions) {
      res.json(dbTransactions);
   
    });
  });

  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Transactions.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

};
