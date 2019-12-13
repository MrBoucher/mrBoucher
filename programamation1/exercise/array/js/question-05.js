var tab2exp = [];

for(var i = 0; i < 16; i++){
    tab2exp[i]=Math.pow(2,i);
    document.write(tab2exp[i] + "<br>");
}

alert(tab2exp[tab2exp.length-1]);
