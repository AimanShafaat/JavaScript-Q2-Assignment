//Assignment.
//Make a TODO:


var foods = [];

var foods1 = prompt("Type Dish one...");
var foods2 = prompt("Type Dish two...");
var foods3 = prompt("Type Dish three...");
var foods4 = prompt("Type Dish four...");
var foods5 = prompt("Type Dish five...");

foods.push(foods1);
foods.push(foods2);
foods.push(foods3);
foods.push(foods4);
foods.push(foods5);


alert(foods);

foods[1] = prompt(foods1, foods.splice(1, 1, foods1));
foods[2] = prompt(foods2, foods.splice(2, 1, foods2));
foods[3] = prompt(foods3, foods.splice(3, 1, foods3));
foods[4] = prompt(foods4, foods.splice(4, 1, foods4));
foods[5] = prompt(foods5, foods.splice(5, 1, foods5));

        
alert(foods);
