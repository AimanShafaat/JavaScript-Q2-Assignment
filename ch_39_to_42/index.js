// Assignment:

var firstNumber = prompt("type course numbers");
var secondNumber = prompt("type course numbers");
var thirdNumber = prompt("type course numbers");
var fourthNumber = prompt("type course numbers");
var fiveNumber = prompt("type course numbers");

var totalMarks = 500;

var obtainMarks = firstNumber+secondNumber+thirdNumber+fourthNumber+fiveNumber;
var percentage = obtainMarks/totalMarks*100;


switch(true) {
    case percentage>= 90:
        alert('Grade A+')
        break
    case percentage>=75:
        alert('Grade A')
        break
    case percentage>=60:
        alert('Grade B')
        break
    case percentage>=45:
        alert('Grade C')
        break
    case percentage>=30:
        alert('Grade D')
        break
    default:
        alert('Fail')
        break
}















