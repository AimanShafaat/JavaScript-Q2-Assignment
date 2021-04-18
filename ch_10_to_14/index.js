//First Assignment.
//Make a Calculator:

var a =parseInt(prompt("Type first number..."));
var b =parseInt(prompt("Type second number..."));

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;

alert(c);
alert(d);
alert(e);
alert(f);
alert(g); 


//Second Assignment.
//Make a percentage calculator:

var score = parseInt(prompt("Type your percentage..."));

if (score > 80) {
    alert("Grade A");
    if (score > 90) {
         alert("Reward $100");
    }
    else if (score > 85) {

        alert("Reward $50");
    }
    else {
        alert("Reward 20$");
    }

}
else {
    alert("failed");
}
