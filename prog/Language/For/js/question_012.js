var i=0; var k; var word;

word = prompt("Write a word");
k = word.length;
document.write(word + " = ");

for (i=k-1; i>=0; i--){
    document.write(word[i]);
}

