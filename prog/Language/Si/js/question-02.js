var total;
var reduction;
var calred;

total=prompt("Entrez le total de votre facture : ");

if(total>200){
    reduction=(total*0.15);
    calred=total-reduction;
    alert("Vous benificier d'un rabais de " + reduction + "$ et votre facture s'eleve a : " + calred + "$");
} else{
    alert("Vous ne benificier pas du rabais puisque votre facture ne depasse pas 200$");
}