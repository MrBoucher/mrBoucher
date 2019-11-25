var farenheit=(-40);
var celsius;
var i=0;

while (farenheit<=40){
    celsius = 5/9*(farenheit-32);
    document.write(farenheit + "° fahrenheit equals to " + celsius +"° celsius");
    farenheit+=5;
}