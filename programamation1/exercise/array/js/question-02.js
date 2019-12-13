var montant;
var annees;
var interet;
var tot;

montant=prompt("Montant investi : ");
annees=prompt("Sur combien d'annee avez vous mits votre prets : ");
interet=prompt("Quel est le taux d'interet : ");
tot= montant*interet;


document.write("Prets de " + montant + " à " + interet + "<br>avec un terme de " + annees + " ans");

for(var i = 0; i<annees; i++){
    document.write(i+"e années : " + montant +"$ à " + interet + "% = " + tot +"$<br>");
    montant=tot;
    tot= montant*interet;
}