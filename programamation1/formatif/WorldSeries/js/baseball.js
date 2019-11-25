var nom;
var coupSure;
var presences;
var moyen;
var nbjoueur=0;
var moyenequipe;


while(nom != 0){
    nom=prompt("Entrez votre nom : ");
    coupSure=prompt("Entrez le nombre de coups surs : ");
    presences=prompt("Entrez le nombre de présences au bâton : ");

    nbjoueur++;
    moyen=(coupSure/presences)*1000;
    moyenequipe=(moyen+moyen)/nbjoueur;
}


document.write("La moyenne de " + nom + " est de : " + moyen);

document.write("La moyenne de l'équipes est de : " + moyenequipe + " pour " + nbjoueur + " joueurs.");

