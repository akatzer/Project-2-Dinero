//Requiring models
var db = require("../models");

//Routes
module.exports = function(app) {
  
  // Get all examples

  //Get route for retrieving transactions
  app.get("/api/transactions", function(req, res) {
    db.Transactions.findAll({}).then(function(dbTransactions) {
      res.json(dbTransactions);
   
    });
  });

  //POST for saving a new transaction
  app.post("/api/transactions", function(req, res) {
    console.log(req.body);
    db.Transactions.create({
      category: req.body.category,
      credit: req.body.credit,
      transAmount: req.body.transAmount,
      notes: req.body.notes,
      
      
    })
    //updating transactions
      .then(function(dbTransactions) {
        res.json(dbTransactions);
      });
  });

};
