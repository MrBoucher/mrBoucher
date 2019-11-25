var nb;
var tabNb=[];
var pNb = 9999999;

for(var i=0; i<3; i++){
    nb=Number(prompt("Entrez un numero : "));
    tabNb.push(nb);
    document.write(nb + ", ");

    if(nb<pNb){
        pNb=nb;
    }
}

alert(pNb);





