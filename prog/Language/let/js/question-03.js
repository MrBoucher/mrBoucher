let random = Math.random();

class Guerrier{

    constructor(HP,Str,Agi,Luck,Accurate) {
        this.HP = HP;
        this.Str = Str;
        this.Agi = Agi;
        this.Luck = random;
        this.Accurate = Accurate;
    }

    Attaque(){
        random_number = Math.random();
        return(Math.round((this.Accurate*this.Str+this.Agi)*random));
    }
}

let Figther1 = new Guerrier(100,Math.floor(Math.round()*10)+1,Math.floor(Math.round()*10)+1,random,Math.floor(Math.random()*10)+1);
let Figther2 = new Guerrier(100,Math.floor(Math.round()*10)+1,Math.floor(Math.round()*10)+1,random,Math.floor(Math.random()*10)+1);

let attaque=0;

while(Figther1.HP > 0 && Figther2.HP > 0){
    document.write("Le Guerrier 1 attaque : ");
    attaque = Figther1.Attaque();
    document.write("L'attaque fais " + attaque + " de dégats");
    Figther2.HP-= attaque;
    document.write("Les PV du figther2 descende à : " + Figther2.HP + "PV");

    document.write("Le Guerrier 1 attaque : ");
    attaque = Figther2.Attaque();
    document.write("L'attaque fais " + attaque + " de dégats");
    Figther1.HP-= attaque;
    document.write("Les PV du figther2 descende à : " + Figther1.HP + "PV");

}