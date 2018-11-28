$(document).ready(function () {

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
    $.post("/api/transactions", Transaction, function() {
        window.location.href = "/";
    })
}

});


