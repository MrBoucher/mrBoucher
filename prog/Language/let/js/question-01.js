class Cylindre{
    constructor(Rayon,Hauteur){
        this.Rayon = Rayon;
        this.Hauteur = Hauteur;

    }
}

for(let i = 0; i<2; i++){
    let ray = prompt("Entrez le rayon : ");
    let haut = prompt("Entrez la hauteur : ");
    let volume = haut*3.1416*(ray*ray);
    document.write("cylindre" + i + " : " + volume + "<br>");
}


cylindre1 = new Cylindre(haut,ray);
cylindre2 = new Cylindre(haut,ray);
cylindre3 = new Cylindre(haut,ray);
cylindre4 = new Cylindre(haut,ray);
cylindre5 = new Cylindre(haut,ray);










