var montant=5;
var taxes=0.15;
var aktaxes;
var i=0;

while(montant<=100){
    aktaxes=montant*taxes+montant;
    alert(montant + "$ sans taxes : " + aktaxes + "$ avec taxes")
    montant+=5;
}
