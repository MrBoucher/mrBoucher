var lignes=7;
var colones=6;
var nb;
var espace=30;

for(var i=0;i<lignes; i++){
    for(var j=0; j<colones; j++){

        if(j===0){
            for(var k=0; k<espace; k++){
                document.write(".");
            }
            espace -=5;
        }
        document.write(nb=" ");
        nb+=10;
    }
    document.write("<br>");
    nb-=10;
    nb*=2;

}