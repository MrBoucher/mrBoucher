var cours = ["informatique", "administration", "histoire", "genie", "geographie", "bureautique"];
var demande;
var reponse=0;

demande=prompt("Entrez le cours de votre choix : ");

for(var i =0; i<cours.length; i++){
    if(demande.toLocaleUpperCase() === cours[i].toUpperCase()){
        reponse++;
    }
}

if(reponse===1){
    alert("Accepter !");
} else {
    alert("Invalide !");
}