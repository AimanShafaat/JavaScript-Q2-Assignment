
var fullName = prompt("Enter the Full Name");
var dobDay=prompt("Please enter Date of Birth Date");
var dobMonth=prompt("Please enter Date of Birth month");
var dobYear=prompt("Please enter Date of Birth Year");
var dateOfBirth = dobMonth+"/"+dobDay+"/"+dobYear;
dateOfBirth = new Date(dateOfBirth);
var curDate = new Date();

//print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

if (new Date().getHours() <= 11){
    console.log("Hello " + fullName + "Good MOrning");
}
else if (new Date().getHours() >= 12 && new Date().getHours() <= 16){
    console.log("Hello " + fullName + "Good Afternoon");
}
else if (new Date().getHours() >= 17 && new Date().getHours() <= 19){
    console.log("Hello " + fullName + "Good Evening");
}
else if (new Date().getHours() >=20 && new Date().getHours() <= 23) {
    console.log("Hello " + fullName + "Good Night");
}

//print meassage in console.log() "Your DOB is {in pakistan standard time format}"
console.log("Your Date of Birth = " + dateOfBirth);


//print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"


var ageYear = (curDate.getFullYear() - dateOfBirth.getFullYear()) -1;
var ageMonth = (curDate.getMonth() - dateOfBirth.getMonth()) + 12;
var ageDay = curDate.getDate() - dateOfBirth.getDate();
var ageHour = curDate.getHours() - dateOfBirth.getHours();
var ageMint = curDate.getMinutes() - dateOfBirth.getMinutes();
var ageSec = curDate.getSeconds() - dateOfBirth.getSeconds();

console.log("You are " + ageYear + " years " + ageMonth + " Month " + ageDay + " Days " + ageHrs + " Hours " + ageMint + " Minutes " + ageSec + " Seconds old");



//"Your Age in Days 7510"

var curTime = curDate.getTime();
var dobTime = dateOfBirth.getTime();
var timeDiff = curTime-dobTime;
var dayDiff= Math.floor (timeDiff/(1000*60*60*24))
console.log ("Your age in days " + dayDiff);

//print meassage in console.log() "How much time left in your next birthday? 

/*161 days 4 hours 39 minutes 34 seconds" 
or "happy Birth Day Ameen Alam. Today is Your 20th Birthday"*/

var nextDOB = new Date (dobMonth+ "/"+dobDay+"/"+curDate.getFullYear()); 

var nDOBTime = nextDOB.getTime();
var ctime= curDate.getTime();
var ntimeDiff = ctime-nDOBTime;
var ndayDiff= Math.floor (ntimeDiff / (1000*60*60*24));

console.log ("How much time left in your next birthday? " + ndayDiff + " days ");
