class PersonneV2{
    constructor(prenom,nom,age){
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }

    Salutation() {
        document.write("Bonjour! Je m'appelle " + this.prenom + " " + this.nom + ".");
    };
}

let mathieu = new PersonneV2("Mathieu", "Boucher", 24);
let menzo = new PersonneV2("Menzo", "Slimani", 17);

let personne;

mathieu.Salutation();