var lignes=5; var colonnes=5; var a=0; var b=1; var c=0; var points=1;

for (var i=0; i<lignes; i++){
    for (var k=0; k<points; k++){
        document.write(".");
    }
    points+=points;
    for (var j=0; j<colonnes; j++){
        document.write(a + " ");
        c=a+b;
        a=b;
        b=c;
    }

    document.write("<br>");
}