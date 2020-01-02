//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#flashID').css("position","relative");

$("#boutonGauche").click(function(){
    $("#flashID").animate({left: '+=50px'});
});

$("#boutonDroite").click(function(){
    $("#flashID").animate({left: '-=50px'});
});

$('#boutonChangerImage').click(function(){
    if($('#flashID').attr("src")==="img/Flash1.png"){
        $('#flashID').attr("src","img/Flash2.png");

    }else if($('#flashID').attr("src")==="img/Flash2.png"){
        $('#flashID').attr("src","img/Flash1.png");
    }
});

$('#boutonEnleverImage').click(function(){
    $('#flashID').hide("slow");
});

$('#boutonAjouterImage').click(function(){
    $('#flashID').show('slow');
});

$('#boutonAjouterAttribut').click(function(){
    console.log("bouton ajouter attribut pressé");
    $('#flashID').attr("alt","photo de flash");
});

var k=0;

$('#boutonAjouterTitre').click(function(){
    if(k===0){
        $('#flashID').before('<h1>Justicier</h1>');
        k++;
        $('h1').attr('class','text-white');
    }
});


var nbflash=1;
$('#boutonDupliquer').click(function(){
    $('#flashID').after('<img id="flashID' + nbflash+ '" class="flashClass" src="img/Flash1.png" width="200px"/>');
    nbflash++;
});

$('#boutonRalentir').click(function(){
    nbflash--;
    $('#flashID' + nbflash).remove();
});

$('#boutonTeleport').click(function(){

});

$('#boutonTeleport').click(function() {
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random()*bodyWidth));
    var randPosY = Math.floor((Math.random()*bodyHeight));

    $('#flashID').css('left', randPosX);
    $('#flashID').css('top', randPosY + "px");
});

var timer;
$('#boutonVitesseSupreme').click(function(){
   timer = setInterval(vitesseSupreme, 500);
});


var timer2;

$("#boutonPerso1").click(function(){
    $("#flashID").animate({left: '+=1450px'});
    $("#flashID").animate({top: '+=500px'});
    $("#flashID").animate({left: '-=1450px'});
    $("#flashID").animate({top: '-=500px', left: '550px', height: '+=300px', width: '+=300px'});
    function explode(){
        $('#flashID').attr("src","img/Flash2.png");
    }
    setTimeout(explode, 1500);

});








