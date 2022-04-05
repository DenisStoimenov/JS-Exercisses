//My try on the 150 JS exercisses

//ex1.Write a JavaScript program 
// to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
const month = (date.getMonth() + 1);
const day = (date.getDay() - 1)
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds()
let daylist = ['Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('----ex1----')
console.log(month);
console.log(daylist[day])
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(date)
console.log('Today is :' + daylist[day] + '.')
console.log('Current time is :' + hour + ':' + minutes + ':' + seconds);
console.log('----ex1----')

// 2. Write a JavaScript program to print 
// the contents of the current window. 
function getPrint() {
    window.print()
}

//     3. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


let today = new Date()
let dd = today.getDay()
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
console.log('----ex3----')
console.log(dd + '/' + mm + '/' + yyyy)
console.log('----ex3----')

// 4. Write a JavaScript program to find the area of a triangle where 
// lengths of the three of its sides are 5, 6, 7

//area = 1/2*b*h

function area(b, h) {
    return 1 / 2 * b * h;
}

console.log('----ex4----')
console.log(area(4, 5))
console.log('----ex4----')

let a = 5; b = 6; c = 7;
let s = (a + b + c) / 2;

// console.log(s);
// console.log(sideA);

const area3 = Math.sqrt(s * ((s - a) * (s - b) * (s - c)))
console.log('----ex4----')
console.log('Area of the triangle is ' + area3.toFixed(2));
console.log('----ex4----')
// 5. Write a JavaScript program to rotate the string 'w3resource' 
// in right direction by periodically removing one letter from the 
// end of the string and attaching it to the front.

function animateString(id) {
    let element = document.getElementById(id)
    let textNode = element.childNodes[0];
    let text = textNode.data

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100)
}

// 6. Write a JavaScript program to determine whether a 
// given year is a leap year in the Gregorian calendar.

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log('----ex6----')
console.log(leapyear(2024))
console.log('----ex6----')

//7. Write a JavaScript program to 
//find 1st January is being a Sunday between 2014 and 2050.


let year = 2022;
for (year; year <= 2060; year++) {
    const sunday = new Date(year, 0, 1);
    if (sunday.getDay() === 0)
    console.log('----ex7----')
        console.log('1st January is being a Sunday in ' + year);
        console.log('----ex7----')

}

// 8. Write a JavaScript program where the program takes 
// a random integer between 1 to 10, the 
// user is then prompted to input a guess number.
//  If the user input matches with guess number, 
//  the program will display a 
// message "Good Work" otherwise display a message "Not matched".

// function randomize(){


// let num = Math.ceil(Math.random() * 10);
// console.log(num);

// let guess = prompt('Guess a number between 0-10');
// if(guess == num){
//     alert('Good guess')
// }else{
//     alert('Aaaaagh Wrong, TRY AGAIN');


// }
// }

//9. Write a JavaScript program to 
//calculate days left until next Christmas.

// const today1 = new Date();
// // console.log(today1)
// var cmas = new Date(today1.getFullYear(), 6, 6);
// if(today.getMonth()== 11 && today.getDate()>25){
//     cmas.setFullYear(cmas.getFullYear()+1)
// }
// let one_day=1000*60*60*24;
// alert(Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + 
//  'days until Christmas');

//  10. Write a JavaScript program to calculate multiplication 
//  and division of two numbers (input from user).
//input1 // input2

function multiply() {

    let num1 = document.getElementById('input1').value
    let num2 = document.getElementById('input2').value
    document.getElementById('result').innerHTML = num1 * num2;

}

function divide() {

    let num3 = document.getElementById('input1').value
    let num4 = document.getElementById('input2').value
    document.getElementById('result').innerHTML = num3 / num4;


}

function add() {
    let x = document.getElementById('input1').value
    let y = document.getElementById('input2').value
    z = +x + +y;
    document.getElementById('result').innerHTML = z

}

function subtract() {
    let num23 = document.getElementById('input1').value
    let num24 = document.getElementById('input2').value
    document.getElementById('result').innerHTML = num23 - num24;

}


// 11. Write a JavaScript program 
// to convert temperatures to and from Celsius,
//  Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 
// [ where c = temperature in Celsius 
//     and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°

function cTOf(celsius) {
    let tempInC = celsius;
    let CtoFahr = tempInC * 9 / 5 + 32;
    let message = tempInC + '\xB0C is ' + CtoFahr + ' \xB0F. ';
    console.log('----ex11----')
    console.log(message)
    console.log('----ex11----')
}

function fTOc(fahrenheit) {
    let tempInF = fahrenheit;
    let ftoCel = (tempInF - 32) * 5 / 9;
    let message = tempInF + '\xB0F is ' + ftoCel + '\xB0C.';
    console.log('----ex11----')
    console.log(message);
    console.log('----ex11----')




}
cTOf(16);
fTOc(46.4);

// 12. Write a JavaScript program 
// to get the website URL (loading page).

// document.getElementById('demo').innerHTML ='The full URL of this page is:<br>' + document.URL;

function getURL() {
    alert('The URL of this page is:' + window.location.href)
    document.getElementById('demo').innerHTML = window.location.href
}


// 13.Write a JavaScript program to create 
// a variable using a user-defined name.

const var_name = 'denis';
const n = 120;
this[var_name] = n;
console.log('----ex13----')
console.log(this[var_name]);
console.log('----ex13----')

let my_var = "userVariable";
let my_value = "userValue";

let x = {
    // Assign value of a user-defined variable
    [my_var]: my_value,
};
console.log('----ex13----')
console.log(x);
console.log(x[my_var]);
console.log('----ex13----')

//i dont relly get this exercisse and what i should do with it


//   14. Write a JavaScript exercise
//    to get the extension of a filename.

//filename.split('.').pop()-to get the file name out

function getExtension() {
    let filename = document.querySelector('#exe').value
    let filetype = filename.split('.').pop();
    document.getElementById('file').innerHTML = filetype;


}

// 15.Write a JavaScript program to get 
// the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference

function different(n){
    if(n<=13){
        return 13-n;
    }else{
        return (n-13) * 2;

    }
}
console.log('----ex15----')
console.log(different(11));
console.log(different(26));
console.log(different(13));
console.log('----ex15----')

// 16.Write a JavaScript program to 
// compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum. 

function twonum(one,two){
    if (one == two){
        return 3 * (+one + +two);

    }else{
        return (+one + +two);
    }
}
console.log('----ex16----')
console.log(twonum(5,5))
console.log(twonum(10,10));
console.log('----ex16----')

// 17. Write a JavaScript program to compute the 
// absolute difference between 
// a specified number and 19. Returns triple their 
// absolute difference if the specified number is greater than 19.

function different2(n){
    if(n <= 19){
        return (19 - n);
    }else{
        return (n - 19) * 3;
    }
}
console.log('----ex17----')
console.log(different2(12));
console.log(different2(19));
console.log(different2(38));
console.log('----ex17----')


// 18.Write a JavaScript program to check two given 
// numbers and return true if one of the number is 50 or if their sum is 50.

function if50(x,y){

    return((x == 50 || y == 50) || (x + y == 50))

}
console.log('----ex18----')
console.log(if50(20,30));
console.log(if50(50,2));
console.log(if50(2,50));
console.log(if50(60,3));
console.log('----ex18----')

// 19.Write a JavaScript program to check whether a given 
// integer is within 20 of 100 or 400
function tst400(x){
    if((Math.abs(100-x)<=20) || (Math.abs(400-x)<=20)){
        return true;


    }
}
console.log('----ex19----')
console.log(tst400(80));
console.log('----ex19----')

// 20.Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative. 
function plusMinus(x,y){
    return ((x<0 && y>0) || x>0 && y<0);
}
console.log('----ex20----')
console.log(plusMinus(-2,-3));
console.log(plusMinus(2,-3));
console.log('----ex20----')

// 21.Write a JavaScript program to create a new string adding "Py" 
// in front of a given string. If the given string begins with 
// "Py" then return the original string.

function strCheck(str1){
    if(str1 === null || str1 === undefined || str1.substring(0,2) === 'Py'){
        return str1;
    } else {
        return 'Py'+ str1;
    }

    
}
console.log('----ex21----')
console.log(strCheck('Denis'));
console.log(strCheck('Pyrite'))
console.log('----ex21----')





























