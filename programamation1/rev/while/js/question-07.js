let compteur=0;
let compt1=0;
let compt2=0;

while(compteur<100){
    let random=Math.round(Math.random());
    document.write(random+"<br>");
    if(random===1){
        compt1++;
    } else{
        compt2++;
    }

    compteur++;
}

document.write("Nombre de 1 : " + compt1 + "<br>");
document.write("Nombre de 2 : " + compt2);
