let taxe = 1.09;

for(let i=5; i<=100; i+=5){
    let calcul = i*taxe;
    document.write(i + "$ avec taxe = " + calcul + "<br>");
}