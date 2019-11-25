var imageId1;
var imageId2;
var imageSrc1;
var imageSrc2;
var click=1;
var image;
var victoire;


$(".img-fluid").click(function(){
    if(click===1){
        imageId1=$(this).attr("id");
        imageSrc1=$(this).attr("src");
        click=2;
    }

    else if(click===2){
        imageId2=$(this).attr("id");
        imageSrc2=$(this).attr("src");

        $("#"+imageId1).attr("src",imageSrc2);
        $("#"+imageId2).attr("src",imageSrc1);
        click=1;

        verifierVictoire();
        victoire = 0;
    }
});

function verifierVictoire(){
    for(var i=1; i<10; i++){
        image=[$("#image"+i).attr("id"),$("#image"+i).attr("src")];
        if(image[0] ==="image" + i && image[1] === "images/" +i+".jpg"){
            victoire++;
        }

        if(victoire===9){
            for(var k = 1; k<10; k++){
                $("#image"+k).attr("src","images/victoire.jpg");
            }
        }
    }
}


//#boutonRecommencer
var temp;
var tabRandom=["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg"];
var random = Math.floor((Math.random() * 8));

$("#boutonRecommencer").click(function(){
    recommancer();
    for(var k = 0; k<=8; k++) {
        $("#image"+(k+1)).attr("src",tabRandom[k]);
    }
});

function recommancer(){
    for(var i = 0; i<=8; i++) {
        random = Math.floor((Math.random() * 8));
        temp = tabRandom[i];
        tabRandom[i] = tabRandom[random];
        tabRandom[random] = temp;
    }
}

////#boutonTricher

$("#boutonTricher").click(function(){
    for(var l=1; l<9; l++){
        $("#image"+l).attr("#images/"+l+".jpeg");
        l++;
    }
});


