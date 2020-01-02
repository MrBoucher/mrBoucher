var nb1;
var nb2;
var calcul;

nb1=Number(prompt("Entrez un numbre : "));
nb2=Number(prompt("Entrez un numbre : "));

if(nb2!=0){
    calcul= nb1/nb2;
    alert(calcul)
} else{
    alert("Division par 0 interdite !");
}
