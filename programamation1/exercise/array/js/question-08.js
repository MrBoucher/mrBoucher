var nom=[];
var note=[];
var sommeNotes=0;
var moyen;



for(var i=0; i<5; i++){
    nom[i]=prompt("Entrez le nom de l'eleve : ");
    note[i]=Number(prompt("Entrez la note de l'examen : ")) ;
    sommeNotes=sommeNotes+note[i];
}

moyen = sommeNotes/5;
alert(moyen);

for(var k=0; k<5; k++){
    if(note[k]>moyen){
        alert(nom[k]);
    }
}

