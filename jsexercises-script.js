//150 JS scripts

    //ex1.Write a JavaScript program 
    // to display the current day and time in the following format.
    // Sample Output : Today is : Tuesday.
    // Current time is : 10 PM : 30 : 38

    let date = new Date();
    const month = (date.getMonth()+1);
    const day = (date.getDay()-1)
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()
    let daylist = ['Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
    console.log(month);
    console.log(daylist[day])
    console.log(hour)
    console.log(minutes)
    console.log(seconds)
    console.log(date)
    console.log('Today is :'+ daylist[day]+'.')
    console.log('Current time is :' +hour+ ':' +minutes+ ':' +seconds);

    // 2. Write a JavaScript program to print 
    // the contents of the current window. 
     function getPrint(){
        window.print()
    }

//     3. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


    let today = new Date()
    let dd = today.getDay()
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if (dd<10){
        dd ='0'+dd;
    }
    if (mm<10){
        mm='0'+mm;
    }
    console.log( dd+'/'+mm+'/'+yyyy)

    // 4. Write a JavaScript program to find the area of a triangle where 
    // lengths of the three of its sides are 5, 6, 7

    //area = 1/2*b*h

    function area(b,h){
        return 1/2*b*h;
    }
    console.log(area(4, 5))

    let a = 5; b = 6; c = 7;
    let s = (a+b+c)/2;
    
    // console.log(s);
    // console.log(sideA);
    
    const area3 =  Math.sqrt(s*((s-a)*(s-b)* (s-c)))
    
    console.log('Area of the triangle is '+ area3.toFixed(2));

    // 5. Write a JavaScript program to rotate the string 'w3resource' 
    // in right direction by periodically removing one letter from the 
    // end of the string and attaching it to the front.

    function animateString(id){
        let element = document.getElementById(id)
        let textNode = element.childNodes[0];
        let text = textNode.data

        setInterval(function(){
            text = text[text.length - 1 ] + text.substring(0, text.length -1);
            textNode.data = text;
        }, 100)
    }

    // 6. Write a JavaScript program to determine whether a 
    // given year is a leap year in the Gregorian calendar.

    function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016))

    
        




