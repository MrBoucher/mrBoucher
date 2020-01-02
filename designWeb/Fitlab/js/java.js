$("#toggle").click(function(e) {

    $("table").toggleClass("disabled");
    $("tbody tr").toggleClass("danger");
    var isDisabled = $("table").hasClass("disabled");

    if (isDisabled) {
        $("table input, table button").prop("disabled", true);
    } else {
        $("table input, table button").prop("disabled", false);
    }

});