// 1st Assignment:

var inputvalue = prompt("cloud native computing");

function value(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring (1);
    }
    return splitStr.join('');
}

var capitilize = value(inputvalue)
console.log(capitilize);


// 2nd Assignment:

var num = +prompt("type any number", "5");

function factorial(n){
    let answer = 1;
    if(n == 0 || n == 1){
        return answer;
    }else{
        for(var i = n; i >= 1; i--){

        }
        return answer;
    }
}


// 3rd Assignment:


var number = num(inputNumber);
console.log(number);

var value = multiply(4,3,6);
console.log("value", value);

function add(a, b){
    var z= a+b;
    return z;
};

function multiply(a, b, c){
    var z = a* add(b, c);
    return z;
};

console.log("course", course);

var course = "cloud native computing";
