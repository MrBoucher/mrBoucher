//La programmation orientée objet

let personne3 = {
    prenom : "Mathieu",
    nom : "Boucher",
    age : 24
};

document.write(personne3.prenom + " " + personne3.nom + " " + personne3.age + "<br>");

// Boucler sur les elements d<un objet

let personne = {
    prenom : "Mathieu",
    nom : "Boucher",
    age : 24
};

for( let cle in personne){
    alert(cle) //Affichera la cle (prenom, nom, age)
    alert(personne[cle]) //Affichera la valeur associee a la cle ("Mathieu", "Boucher", 24)
}

//Creation d'une classe

function Personne01(prenom,nom,age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
}

let mathieu = new Personne01("Mathieu", "Boucher", 24);
document.write(mathieu);

//Création de méthodes

function PersonneV2(prenom,nom,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;

    this.salutation = function() {
        return("Bonjour! Je m'appelle " + this.prenom + " " + this.nom + ".");
    };
}

let mathieu = new PersonneV2("Mathieu", "Boucher", 24);
let menzo = new PersonneV2("Menzo", "Slimani", 17);

document.write(mathieu.salutation());

