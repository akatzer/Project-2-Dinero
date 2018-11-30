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
    function hideAll() {
        $("#transaction").hide();
        $("#table").show();
    }

    $("#transactionHistory").on("click", function () {
        hideAll();   
        $("#table").show();

        var transactions = [];
        console.log(transactions)
        getTransactions();
    
        function getTransactions() {
            $.get("/api/transactions", function (data) {
                transactions = data;
                
               
            });
        }
        // Getting todos from database when page loads
        
       
        // This function resets the todos displayed with new todos from the database
        // function initializeRows() {
        //   var rowsToAdd = [];
        //   for (var i = 0; i < transactions.length; i++) {
        //     rowsToAdd.push(createNewRow(transactions[i]));
        //   }
        //   $todoContainer.prepend(rowsToAdd)
        // }

        // This function grabs todos from the database and updates the view
        
    })

    $("#newTransaction").on("click", function () {
        $("#table").hide();
        $("#transaction").show()
    })
});


