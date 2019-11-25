
//Change Back-Ground
/*$(function() {
    $('ul.menu').find('img').fadeTo('slow', 1);
    $('ul.menu').find('img').hover(function () {
        $(this).fadeTo('fast', 0.7);
        $('#cadre').css({
            'background-image': 'url(' + $(this).attr('src') + ')',
        }, function () {
            $(this).fadeTo('slow', 1);
        });
    });*/


    var mots;
    var col = 4;
    var i = 0;
    var doIt = 0;


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

    $("#btn").click(motsLength());

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
                    $("#cadre").append("<img src=\"img/Letters/" + mots[i].toUpperCase() + "/" + mots[i].toUpperCase() + "1.jpg\" class=\"img-fluid col-" + col + "\" alt=\"\" id=\"img" + "\">\n");
                }
                doIt++;
            }
        }
    }





