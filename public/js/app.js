$(document).ready(function () {

    var amount = $("#amount");

    var creditDebit = $("#credit-debit");

    var category = $("#category");
    var submit = $("#submit");
    if (creditDebit.val() == "Credit") {
        var boolean = "TRUE"
    }
    else {
        var boolean = "FALSE"
    }

    $(submit).on("click", function () {
        event.preventDefault();
       

        if (!amount.val().trim() || !creditDebit.val() || !category.val()) {
            return;
        }

        var newTransaction = {
            transAmount: amount.val().trim(),
            credit: boolean,
            category: category.val(),
        };

        console.log(newTransaction)

    });



});


