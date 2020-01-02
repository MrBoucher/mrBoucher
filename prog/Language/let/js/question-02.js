class Examen{
    constructor(question){
        this.questions = questions;
    }
    GetNotes(){
        let somme=0;
        for( let i = 0; i<5; i++){
            somme+=this.question[i];

        }
        return somme;
    }
}

class Etudiant{
    constructor(nom,prenom,examen){
        this.nom;
        this.prenom;
        this.examen;
    }
}

//Mettre Random

let tabEtudiants=[];
for(let j = 0;j<10;j++){
    let tabQuestion;

    for(let k=0; k<5; k++){
        tabQuestion[k] = Math.floor(Math.random()*20)+1;
    }
    let examen = new Examen(tabQuestion);
    let nom = prompt("Entrez le nom");
    let prenom = prompt("Entrez le prenom");
    tabEtudiants[j] = new Etudiant("nom", "prenom", examen);
}

for(let f=0; f<10; f++){
    let note = tabEtudiants[f].exam.GetNotes();
    if(note>=60){
        document.write(tabEtudiants[f].prenom + " Notes : " + note);
    }
}

