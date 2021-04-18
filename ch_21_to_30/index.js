//Assignment 1



var input = prompt("write any number...");
var input1 = Math.ceil(input);
alert(input1 + " Type = " + typeof(input));


var text = "this is my dummy text";
var sliceText = text.slice(0,4);
alert(sliceText);


for (var i = 0; i < 4; i++) {
    var sliceText1 = text.slice(a,a);
}

alert(sliceText);



// Assignment 2


var text="cloUd naTive computinG"
text=text.toLowerCase();
word=text.split(" ");

for (i = 0; i <word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
   
}
word=word.join(" ");
alert(word);

