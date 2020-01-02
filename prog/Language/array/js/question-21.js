var random = Math.random() <= 0.5; var mise = 1; var profit = 0; var win = 0; var parties = 0; var banque = 1000;
var nbr0 = [0];
var nbr1 = [0];
var max0 = [0];
var max1 = [0];
var tableau = [random];
var i = 0;

while (profit<10000){
    while (win !== 1) {
        banque-=mise;
        random = Math.random() <= 0.5;  parties++;
        tableau.push(random);  i++;  document.write("Partie " + i + " : "+tableau[i]+"<br>");
        if (random) {
            profit+=mise*2;
            win++;
            nbr0.push(0);
            nbr1 = [i];
            if(nbr0.length > max0.length){
                max0 = nbr0;
            }
        } else {
            mise *= 2;
            nbr1.push(0);
            nbr0 = [i];
            if(nbr1.length > max1.length){
                max1 = nbr1;
            }
        }
    }
    document.write("profit : " + profit + "<br>banque : " + banque + "<br> mise :" + mise + "<br> parties : " + parties + "<br><br><br>    ");
    document.write("<br/>");
    mise = 1;
    win = 0;
}

document.write("plus longue série de victoires est longue de "+ (max0.length-1)+" et commence à l'index "+ max0[0] );
document.write("<br/>");
document.write("plus longue série de défaites est longue de "+ (max1.length-1)+" et commence à l'index "+ max1[0] );
document.write("<br/>");

