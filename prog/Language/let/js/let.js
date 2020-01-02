//La programmation orientée objet

let personne3 = {
    prenom : "Mathieu",
    nom : "Boucher",
    age : 24
};

document.write(personne3.prenom + " " + personne3.nom + " " + personne3.age + "<br>");

// Boucler sur les elements d'un objet

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

class personne{
    constructor(prenom,nom,age){
        this.prenom=prenom;
        this.nom=nom;
        this.age=age;
    }
}

let personne1 = new personne(prompt("Entrez le prenom :"), prompt("Entrez le nom :"), prompt("Entrewz l'age :"));
let personne2 = new personne(prompt("Entrez le prenom :"), prompt("Entrez le nom :"), prompt("Entrewz l'age :"));
let personne3 = new personne(prompt("Entrez le prenom :"), prompt("Entrez le nom :"), prompt("Entrewz l'age :"));


document.write(personne1.prenom + "  " + personne1.nom + "  " + personne1.age + "<br>");
document.write(personne2.prenom + "  " + personne2.nom + "  " + personne2.age + "<br>");
document.write(personne3.prenom + "  " + personne3.nom + "  " + personne3.age + "<br>");

//Création de méthodes

class PersonneV2{
    constructor(prenom,nom,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    }

    salutation() {
        document.write("Bonjour! Je m'appelle " + this.prenom + " " + this.nom + ".");
    };
}

let mathieu = new PersonneV2("Mathieu", "Boucher", 24);
let menzo = new PersonneV2("Menzo", "Slimani", 17);
let salutation = mathieu.Salutation();



