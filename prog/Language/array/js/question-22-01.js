var tab=[];
var random_boolean = Math.random() >= 0.5;
var nbV=0;
var nbF=0;
var maxV=0;
var maxF=0;
var indiceV;
var indiceF;
var maxIndiceV;
var maxIndiceF;
var miseInitiale;
var banque;
var conditionSortie;
var nbDefaites=0;
var mise;
var parties=0;
var profit;

miseInitiale=prompt("Entrez votre mise Initiale : ");
banque=miseInitiale;
conditionSortie=prompt("Entrez votre montant de sortie : ");
mise=prompt("Entrez votre mise : ");

for(var i=0; i<1000; i++){
    tab.push(random_boolean);
    document.write(i+" "+tab[i]+"<br>");
    random_boolean = Math.random() >= 0.5;
}
for(var k=0; k<1000; k++) {
    if (tab[k] === true) {
        if (nbF === 0) {
            indiceV = k;
        }
        nbF = 0;
        nbV++;
        indiceF=0;
        if (nbV > maxV) {
            maxV = nbV;
            maxIndiceV = indiceV;
        }
    }
    else if(tab[k]===false){
        if(nbV === 0){
            indiceF=k;
        }
        nbV=0;
        nbF++;
        indiceV=0;
        if(nbF > maxF){
            maxF=nbF;
            maxIndiceF=indiceF;
        }
    }
}

while(banque<conditionSortie){
    while(true !== 1){
        banque-=mise;
        random=Math.random()<= 0.5;
        parties++;
        if(random){
            profit+=mimse*2;
            win++;
        } else
            mise*=2;
    }
}document.write("profit : " + profit + "<br>banque : " + banque + "<br>mise : " + mise + "<br> parties : " + parties + "<br><br><br>    ");

alert("Max V : " + maxV+" Max F : " + maxF);

