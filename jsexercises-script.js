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
// 60??C is 140 ??F
// 45??F is 7.222222222222222??

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

function different(n) {
    if (n <= 13) {
        return 13 - n;
    } else {
        return (n - 13) * 2;

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

function twonum(one, two) {
    if (one == two) {
        return 3 * (+one + +two);

    } else {
        return (+one + +two);
    }
}
console.log('----ex16----')
console.log(twonum(5, 5))
console.log(twonum(10, 10));
console.log('----ex16----')

// 17. Write a JavaScript program to compute the 
// absolute difference between 
// a specified number and 19. Returns triple their 
// absolute difference if the specified number is greater than 19.

function different2(n) {
    if (n <= 19) {
        return (19 - n);
    } else {
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

function if50(x, y) {

    return ((x == 50 || y == 50) || (x + y == 50))

}
console.log('----ex18----')
console.log(if50(20, 30));
console.log(if50(50, 2));
console.log(if50(2, 50));
console.log(if50(60, 3));
console.log('----ex18----')

// 19.Write a JavaScript program to check whether a given 
// integer is within 20 of 100 or 400
function tst400(x) {
    if ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20)) {
        return true;


    }
}
console.log('----ex19----')
console.log(tst400(80));
console.log('----ex19----')

// 20.Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative. 
function plusMinus(x, y) {
    return ((x < 0 && y > 0) || x > 0 && y < 0);
}
console.log('----ex20----')
console.log(plusMinus(-2, -3));
console.log(plusMinus(2, -3));
console.log('----ex20----')

// 21.Write a JavaScript program to create a new string adding "Py" 
// in front of a given string. If the given string begins with 
// "Py" then return the original string.

function strCheck(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
        return str1;
    } else {
        return 'Py' + str1;
    }


}
console.log('----ex21----')
console.log(strCheck('Denis'));
console.log(strCheck('Pyrite'))
console.log('----ex21----')

// 22. Write a JavaScript program to remove a character at the 
// specified position of a given string and return the new string.

console.log('---ex22---')
str1 = 'DenisS';
console.log('Original String is:', str1);

newStr = str1.replace(/D/g, '');
console.log('Replaced String is:', newStr);
console.log('---ex22---')

// 23. Write a JavaScript program to create a new string from a given 
// string changing the position of first and last characters. 
// The string length must be greater than or equal to 1.

console.log('---ex23---')

function replaced(str1) {

    if (str1.length <= 1) {
        return str1;
    }
    midChar = str1.substring(1, str1.length - 1)
    return (str1.charAt(str1.length - 1)) + midChar + str1.charAt(0);

}
console.log(replaced('car'));
console.log(replaced('JavaScript'));
console.log('a');

console.log('---ex23---')


// 24. Write a JavaScript program to create a 
// new string from a given string with the first character 
// of the given string added at the front and back.

console.log('---ex24---')
function stringing(str1) {
    first = str1.substring(0, 1);
    return first + str1 + first;
}

console.log(stringing('Denis'));
console.log(stringing('Hello'));
console.log('---ex24---')

// 25. Write a JavaScript program to check whether a 
// given positive number is a multiple of 3 or a multiple of 7.

function test37(x) {

    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    }

    return false;

}
console.log('---ex25---')
console.log(test37(14));
console.log(test37(10));
console.log('---ex25---')

// 26. Write a JavaScript program to create a new string from a given string taking 
// the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.

function ex26(str1) {

    if (str1.length >= 3) {
        strlen = 3

        back = str1.substring(str1.length - 3);
        return back + str1 + back;
    }

}
console.log('---ex26---')
console.log(ex26('Denis'));
console.log(ex26('Hellou'))
console.log(ex26('Bonjour'));
console.log(ex26('BonBon'));
console.log('---ex26---')

// 27. Write a JavaScript program to check whether a 
// string starts with 'Java' and false otherwise.

function ex27(str1) {
    if (str1.startsWith('Java', 0)) {
        return true;
    }
    return false;
}
console.log('---ex27---')
console.log(ex27('Javadenis'));

function ex27Two(str1) {
    if (str1.length < 4) {
        return false;
    }
    front = str1.substring(0, 4);
    if (front == 'Java') {
        return true;
    }
    else {
        return false;
    }

}
console.log(ex27Two('JavaScript'))
console.log(ex27Two('javaSDenis'))

console.log('---ex27---')

// 28. Write a JavaScript program to check whether two given integer values 
// are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range.

function ex28(x, y) {

    if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99)) {
        return true;
    }
    return false;

}
console.log('---ex28---')
console.log(ex28(50, 80));
console.log(ex28(48, 100))
console.log('---ex28---')


// 30. Write a JavaScript program to check whether a string "Script" 
// presents at 5th (index 4) position in a given string, if "Script" 
// presents in the string return the string without "Script" otherwise return the original one.

function ex30(str1) {

    if (str1 < 6) {
        return str1;
    }
    let resultStr = str1

    if (str1.substring(10, 4) == 'Script') {
        resultStr = str1.substring(0, 4) + str1.substring(10, str1.length);

    }
    return resultStr;
}
console.log('---ex30---')
console.log(ex30('TypeScript'))
console.log(ex30('JavaScript'))
console.log(ex30('CoffeeScript'))
console.log('---ex30---')

// 31. Write a JavaScript program to find the largest of three given integers

function largestOfThree(mainArray) {
    return mainArray.map(function (subArray) {
        return Math.max.apply(null, subArray);
    });
}
console.log('---ex31---')
console.log(largestOfThree([[4, 5, 1],
[13, 27, 18],
[32, 35, 37],
[1000, 1001, 1]]))

console.log('solution num2')

function max_of_three(x, y, z) {
    max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 510, 440));
console.log('---ex31---')


// 32. Write a JavaScript program to find a value which 
// is nearest to 100 from two different given integer values.

function near_100(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    }
    else
        return false;
}
console.log(near_100(90, 90));
console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));


// 33. Write a JavaScript program to check whether 
// two numbers are in range 40..60 or in the range 70..100 inclusive.

function range(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)

        ||
        (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true;
    }
    else {
        return false
    }



}
console.log('----ex33---')
console.log(range(44, 56))
console.log(range(70, 95))


// 34. Write a JavaScript program to find the larger number from the two given positive integers,
//  the two numbers are in the range 40..60 inclusive.

function ex34(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
        if (x === y) {
            return 'Numbers are the same'
        } else if (x > y) {
            return x;
        } else {
            return y;
        }
    }

    else {
        return "Numbers dont fit in range";

    }
}

console.log(ex34(45, 60));
console.log(ex34(25, 60));
console.log(ex34(45, 80));
console.log(ex34(60, 60));

// 35. Write a program to check whether a specified character 
// exists within the 2nd to 4th position in a given string.

function checkChar(str1, char) {
    ctr = 0;
    for (let i = 0; i < str1.length; i++) {

        if ((str1.charAt(i) == char) && (i >= 1 && i <= 3)) {
            ctr = 1;
            break;
        }
    }
    if (ctr == 1) return true;
    return false



}
console.log('----ex35----')

console.log(checkChar('denis', 'n'))
console.log(checkChar('Phyton', 'y'))


// 36. Write a JavaScript program to check whether the 
// last digit of the three given positive integers is same.

function ex36(x, y, z) {
    if ((x > 0) && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 === z % 10 && x % 10 == z % 10);
    }
    else {
        return false;
    }
}

console.log('---ex36---')
console.log(ex36(20, 30, 60))
console.log(ex36(-20, 30, -60))


// 37. Write a JavaScript program to create new string with first 3
// characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case


function upperLower(str) {

    if (str.length < 3) {
        return str.toUpperCase();
    }
    frontPart = (str.substring(0, 3)).toLowerCase();
    backPart = str.substring(3, str.length);
    return frontPart + backPart;

}

console.log('---ex37---')
console.log(upperLower('Denis'))
console.log(upperLower('Phyton'))
console.log(upperLower('do'))

// 38. Write a JavaScript program to check the total marks of a student in various examinations. 
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
// if the examination is "Final-exam." the student will get A+ grade and total marks must 
// be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

function examStatus(totMarks, isExam) {
    if (isExam) {
        return totMarks >= 90;
    }
    return (totMarks >= 89 && totMarks <= 100)
}

console.log(examStatus("78", ''))
console.log(examStatus('99', 'true'))

// 39. Write a JavaScript program to compute the sum of the two given integers, 
// If the sum is in the range 50..80 return 65 other wise return 80.

function ex39(x, y) {

    const sum = x + y;
    if (sum >= 50 && sum <= 80) {
        return 65
    }
    return 80;
}
console.log(ex39(20, 30))
console.log(ex39(80, 90))

// 40. Write a JavaScript program to check from two given integers
//  whether one of them is 8 or their sum or difference is 8. 

function ex40(x, y) {
    if (x == 8 || y == 8) {
        return true;
    }
    if (x + y == 8 || Math.abs(x - y) == 8) {
        return true
    }
    return false;

}

console.log(ex40(4, 4))
console.log(ex40(8, 8))
console.log(ex40(17, 18))

// 41. Write a JavaScript program to check three given numbers, 
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function ex41(x, y, z) {
    if (x == y && y == z) {
        return 30;
    }
    if (x == y || y == z || z == x) {
        return 40;
    }
    return 20;
}
console.log(ex41(8, 8, 8))
console.log(ex41(8, 8, 18))
console.log(ex41(8, 9, 10))

// 42. Write a JavaScript program to check whether three given numbers 
// are increasing in strict mode or in soft mode.
// Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function ex42(x, y, z) {
    if (y > x && z > y) {
        return 'strict mode';
    }
    else if (z > y)
        return "soft mode";
    else
        return "Idk what mode is this"
}
console.log(ex42(10, 15, 31))
console.log(ex42(24, 22, 31))
console.log(ex42(22, 22, 31))
console.log(ex42(8, 8, 8))

// 43. Write a JavaScript program to check from three given numbers 
// (non negative integers) that two or all of them have the same rightmost digit. 

function ex43(x, y, z) {
    p = x % 10;
    q = y % 10;
    r = z % 10;

    return (p === q) || (q === r) || (q === r)

}
console.log(ex43(22, 32, 42));
console.log(ex43(102, 302, 2));
console.log(ex43(20, 22, 45));

// 44. Write a JavaScript program to check from three given 
// integers that whether a number is greater than or equal to 20 and less than one of the others.

function ex44(x, y, z) {

    return (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < x || z < y));


}

console.log(ex44(20, 21, 22))
console.log(ex44(23, 23, 10))

// 45. Write a JavaScript program to check two given integer values and 
// return true if one of the number is 15 or if their sum or difference is 15.

function ex45(x, y) {
    // if(x === 15 || y === 15 ){
    //     return true;
    // }
    // if (x + y === 15 || Math.abs(x - y) === 15 ){
    //     return true;
    // }
    // return false;
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);

}

console.log(ex45(7, 8))
console.log(ex45(16, 17))

// 46. Write a JavaScript program to check two given non-negative 
// integers that whether one of the number (not both) is multiple of 7 or 11.

function ex46(a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0))
    }
    else
        return false;
}
console.log('----ex46---')
console.log(ex46(14, 21))
console.log(ex46(16, 20))
console.log(ex46(14, 20))

// 47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.
function ex47(x, y, n) {
    if (n < 40 || n > 1000)
        return false;
    else
        if (n >= x && n <= y)
            return true;
        else
            return false

}
console.log('---ex47---')
console.log(ex47(40, 4000, 45))
console.log(ex47(89, 4000, 30))

// 48. Write a JavaScript program to reverse a given string.

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {


        newString += str[i];
    }
    return newString;
}

console.log(reverseString('hellow'))
console.log(reverseString('Denis'))

//Or it can be done like this here:

function reverseString2(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString2('hellow'))
console.log(reverseString2('welcome'))


// 49. Write a JavaScript program to replace every character in a 
// given string with the character following it in the alphabet. 

function letterChanges(text) {
    let s = text.split('')
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0))
        }
        switch (s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }
    return s.join('')
}

console.log(letterChanges('PYTHON'));
console.log(letterChanges('Denis'))

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

// 51. Write a JavaScript program to convert a given number to hours and minutes.

function timeConvert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ':' + minutes;
}
console.log(timeConvert(90));

// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 

function ex52(str) {

    return str.split('').sort().join('')

}
console.log(ex52('acbefd'))
console.log(ex52('ghiabcilksqrstfgdeefc'))


// 53. Write a JavaScript program to check whether the characters
//  a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function ex53(str) {

    return (/a...b/).test(str) || (/b...a/).test(str)
}
console.log(ex53("Chainsbreak"))

// 54. Write a JavaScript program to count the number of vowels in a given string.

function ex54(str) {
    return str.replace(/[^aeiou]/g, '').length

}

console.log(ex54('aeiou'))
console.log(ex54('Denis'))

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's

function ex55(str) {
    let str_p = str.replace(/[^p]/g, '')
    let str_t = str.replace(/[^t]/g, '')

    let num_p = str_p.length;
    let num_t = str_t.length;

    return num_p === num_t
}
console.log(ex55('pppttt'))

// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas. 

// function division_string(n1, n2) {

//     n1 = 80;
//     n2 = 6;

//     var div = Math.round(n1 / n2).toString(),
//     result_array = div.split("");

//     if (div >= 1000)
//     {
//     for (var i = div.length - 3; i > 0; i -= 3) 
//     {
//     result_array.splice(i, 0, ",");
//     }
//     let result_array = 0;
//     }
// }
//     console.log(result_array);

//idk this one

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string

function stringCopies(str, n) {
    if (n < 0)
        return false;
    else
        return str.repeat(n)
}

console.log(stringCopies('denis', 6))
console.log(stringCopies('blah', 4))

// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 
// characters of a given original string. The length of the given string must be 3 and above.

function ex58(str) {

    if (str.length >= 3) {
        resultStr = str.substring(str.length - 3);
        return resultStr + resultStr + resultStr + resultStr;
    }
    else
        return false;

}
console.log(ex58('denis'))

// 59. Write a JavaScript program to extract the first half of a string of even length

function ex59(str) {

    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2)
    }
    return str;

}

console.log(ex59('banana'))
console.log(ex59('reactt'))


// 60. Write a JavaScript program to create a new string without the first and last character of a given string.

function ex60(str) {
    return str.substring(1, str.length - 1);
}
console.log(ex60('Denis'))
console.log(ex60('Dormeo'))


// 61. Write a JavaScript program to concatenate two strings except their first character.

function ex61(str1, str2) {

    str1 = str1.substring(1, str1.length)
    str2 = str2.substring(1, str2.length)

    return str1.concat(str2)



}
console.log(ex61('denis', 'stoimenov'))
console.log(ex61('laptop', 'chinese'))


// 62. Write a JavaScript program to move last three character to the start of a given string.
//  The string length must be greater or equal to three. 

function ex62(str) {
    if (str.length > 3) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str
}
console.log(ex62('JavaScript'))
console.log(ex62('Hi'))

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
//  The string length must be greater or equal to three.

function ex63(str) {
    if (str.length % 2 != 0) {
        mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1)

    }
    return str;
}
console.log(ex63('Denis'))
console.log(ex63('Compute'))

// 64. Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings are not same then remove the characters from the longer string. 

function ex64(str1, str2) {
    const m = Math.min(str1.length, str2.length)

    return str1.substring(str1.length - m) + str2.substring(str2.length - m);

}
console.log(ex64('abcdef', 'cde'))
console.log(ex64('ab', 'cdefgh'))

// 65. Write a JavaScript program to test whether a string end with "Script".
// The string length must be greater or equal to 6.

function ex65(str){
    if (str.substring(str.length - 6, str.length) == 'Script'){
        return true;
    }
    else{
        return false;
    } 
    
}
console.log(ex65('JavaScript'))
console.log(ex65('TypeScript'))



