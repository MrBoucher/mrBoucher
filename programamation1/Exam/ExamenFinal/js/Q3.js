let tabChance=[];
let nb;
let usager;

usager=prompt("Entrez un nombre de 1 à 200 : ");


for(let i=0; i<100; i++){
    nb=Math.floor(Math.random(1) * 200);
    tabChance.push(nb);
    document.write(tabChance[i]+"<br>");
}

for(var i = 0;i < tabChance.length;i++){
    if(usager===tabChance[i]){

    } else{
        alert("meilleure chance la prochaine fois");
    }
}

