
//Change Back-Ground
$('.couleur').click(function () {
    var couleur = $(this).attr("id");
    $('.background').css("background-image", 'url("img/background/' + couleur + '.jpg")');
});

    var mots;
    var col = 4;
    var i = 0;
    var doIt = 0;

//Input letters image

    $('#myInput').keyup(function () {
        mots = $("#myInput").val();
        mots = mots.replace("*", "0");
        $("h1").text(mots);
    });

    document.onkeypress = keyPress;

    function keyPress(k) {
        var x = k || window.event;
        var key = (x.keyCode || x.which);
        if (key === 13) {
            k.preventDefault();
            motsLength();
        }
    }

    $("#btn").click(motsLength);

    function motsLength() {
        mots = $("#myInput").val();
        if (doIt !== 1) {
            if (mots.length === 3) {
                col = 4;
            } else if (mots.length === 4) {
                col = 3;
            } else if (mots.length === 5) {
                col = 2;
            } else if (mots.length === 6) {
                col = 2;
            } else if (mots.length > 6 && mots.length <= 12) {
                col = 1;
            } else if (mots.length < 3) {
                col = 0;
/*
                alert("Mots trop court!");
*/
            } else if (mots.length > 12) {
                col = 0;
/*
                alert("Mots trop long!")
*/
            }
                if (col > 0) {
                    for (var i = 0; i < mots.length; i++) {
                        $('.imgs').append("<img value='" + word[i].toUpperCase() + "'  src=\"img/Letters/" + word[i].toUpperCase() + "/" + word[i].toUpperCase() + "1.jpg\" class=\"img-fluid col-" + col + "\" id=\"img" + i + "\">\n");
                    }
                doIt++;
            } else {
                    /*alert("Mot invalide");*/
                }
        }
    }





