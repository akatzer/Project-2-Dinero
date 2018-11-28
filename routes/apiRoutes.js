var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/transactions/", function(req, res) {
    db.Transactions.findAll({}).then(function(dbPost) {
      res.json(dbPost);
   
    });
  });

  app.post("/api/transactions", function(req, res) {
    console.log(req.body);
    db.Transactions.create({
      category: req.body.category,
      credit: req.body.credit,
      transAmount: req.body.transAmount,
      notes: req.body.notes,
      
      
    })
      .then(function(dbTransactions) {
        res.json(dbTransactions);
      });
  });

};
