var nb;
var bi=[];
var deci=0;
var random;
var expo=11;


for(var i=11; i>=0; i--){
    for(var k=0; k<11; k++) {
        random = Math.round(Math.random());
        bi[k]=random;
        deci +=random*expo;
        expo--;
    }
    expo=11;
    for(var j=0; j<11; j++){
        document.write(bi[j]);
    }

    document.write(" En binaire = " + deci + " En décimal <br>");

}




