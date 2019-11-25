var base=0;
var exposant=0;
var result;

base = prompt("Veilleur rentrer la base base : ");
exposant = prompt("Veuiller rentrer un exposant jusqu'à 4 maximum : ");

for(i=0; i<=exposant; i++){
    result=Math.pow(base, i);
    document.write(base+"exp"+i+"="+result+"<br>");
}

