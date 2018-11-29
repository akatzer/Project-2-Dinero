$(document).ready(function () {
    $("#table").hide()
    var amount = $("#amount");
    var creditDebit = $("#creditDebit");
    var category = $("#category");
    var submit = $("#submit");
    var notes = $("#notes")

    $(submit).on("click", function () {
        event.preventDefault();
        if (creditDebit.val() === "Credit") {
            var boolean = 1
        }
        else {
            var boolean = 0
        }

        if (!amount.val().trim() || !creditDebit.val() || !category.val() || !notes.val().trim()) {
            return;
        }
        if (boolean === 1) {
            var newTransaction = {
                transAmount: Math.abs(amount.val().trim()),
                credit: boolean,
                category: category.val(),
                notes: notes.val().trim(),
            };

        }
        else {
            var newTransaction = {
                transAmount: -Math.abs(amount.val().trim()),
                credit: boolean,
                category: category.val(),
                notes: notes.val().trim(),
            };
        }

        console.log(newTransaction)
        submitTransaction(newTransaction);
    });

    function submitTransaction(Transaction) {
        $.post("/api/transactions", Transaction, function () {
            window.location.href = "/";
        })
    }


    $("#transactionHistory").on("click", function() {
        var transactions = [];
        $("#transaction").hide();
        $("#table").show();
        // Getting todos from database when page loads
        getTransactions();
        console.log(transactions)
        // This function resets the todos displayed with new todos from the database
        // function initializeRows() {
        //   var rowsToAdd = [];
        //   for (var i = 0; i < transactions.length; i++) {
        //     rowsToAdd.push(createNewRow(transactions[i]));
        //   }
        //   $todoContainer.prepend(rowsToAdd)
        // }
      
        // This function grabs todos from the database and updates the view
        function getTransactions() {
          $.get("/api/transactions", function(data) {
            transactions = data;
            
            // initializeRows();
          });
        }
    })

    $("#newTransaction").on("click", function() {
        $("#transaction").show(),
        $("#table").hide(),
    })
});


