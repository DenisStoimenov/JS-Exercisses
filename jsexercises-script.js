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

function examStatus(totMarks, isExam){
    if(isExam) {
        return totMarks >= 90;
    }
    return (totMarks >= 89 && totMarks <= 100)
}

console.log(examStatus("78", ''))
console.log(examStatus('99', 'true'))
























