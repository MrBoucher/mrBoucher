var montant=5; var taxes=0.09; var montantAvecTaxes; var i=0;

while (montant<=100){
    montantAvecTaxes=montant*taxes+montant;
    alert(montant+ "$ without taxes is " + montantAvecTaxes +"$ with taxes");
    montant+=5;
}