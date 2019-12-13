let tap;

tap=prompt("Tapper une lettre : ");

if(tap === w){
    document.write("Avancer");
} else if(tap === a){
    document.write("Gauche");
} else if(tap === s){
    document.write("Reculer");
} else if(tap === d){
    document.write("Droite");
} else{
    document.write("Erreur");
}