let typePokemon;
let darkessLariat = 100;
let random1;
let random2;
let attack1;
let attack2;
let domage;


typePokemon=prompt("Entrez le type de votre pokemon : ");

if(typePokemon === eau){
    darkessLariat=200;
} else{
    darkessLariat=100;
}

random1=Math.round(Math.random());
random2=Math.round(Math.random());


attack1=random1
attack2=random2

if(typePokemon === eau){
    if(attack1===1){
        darkessLariat=200;}
    else if(attack1===0){
        darkessLariat=0;
    }
}   else{
    if(attack1===1){
        darkessLariat=100;}
    else if(attack1===0){
        darkessLariat=0;
    }
}

if(typePokemon === eau){
    if(attack2===1){
        darkessLariat=200;}
    else if(attack2===0){
        darkessLariat=0;
    }
}   else{
    if(attack2===1){
        darkessLariat=100;}
    else if(attack2===0){
        darkessLariat=0;
    }
}

domage=attack1+attack2;


if(random1===0){
    random1="Face";
}else{
    random="Pile";
}

if(random2===0){
    random2="Face";
}else{
    random="Pile";
}

document.write("type = "+typePokemon +" "+random1+" "+random2+" "+ "--> "+domage+" de dégats");



















