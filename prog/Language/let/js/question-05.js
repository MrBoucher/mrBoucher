let random_number = Math.random();

class Guerrier{

    constructor(HP,strength,swiftness,luck,accuracy) {
        this.HP = HP;
        this.strength = strength;
        this.swiftness = swiftness;
        this.luck = random_number;
        this.accuracy = accuracy;
    }

    Attaquer(){
        random_number = Math.random();
        return(Math.round((this.accuracy*this.strength+this.swiftness)*random_number));
    }

}

let rouge = new Guerrier(100,Math.floor(Math.random()*10)+1,random_number,Math.floor(Math.random()*10)+1,Math.floor(Math.random()*10)+1);
let bleu = new Guerrier(100,Math.floor(Math.random()*10)+1,random_number,Math.floor(Math.random()*10)+1,Math.floor(Math.random()*10)+1);
let attaque = 0;



while (rouge.HP > 0 && bleu.HP > 0){
    console.log("Le guerrier rouge attaque");
    attaque = bleu.Attaquer();
    console.log("L'attaque fait " + attaque + " de dégats");
    rouge.HP -= attaque;
    console.log("Les PV du guerrier bleu descendent à " + rouge.HP + "PV");
    console.log(" ");

    console.log("Le guerrier bleu attaque");
    attaque = rouge.Attaquer();
    console.log("L'attaque fait " + attaque + " de dégats");
    bleu.HP -= attaque;
    console.log("Les PV du guerrier rouge descendent à " + bleu.HP + "PV");
    console.log(" ");
}