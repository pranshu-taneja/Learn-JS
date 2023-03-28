// Basics: JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. also a key can be anything from number to char etc. Also js is a single threaded synchronous language and blah blah blah

// --don't give focus to function (just dividers)

//better use js by passing every value to var or function rather than writing the whole line again and again//

// #1      (strings)
function myfun1() {
  let str = "this is a \\ string";
  console.log(str.length); // length is a property not function lol.
  console.log(str + "\n yo bro"); // some escape sequence used here
}

// #2          (slicing substring and substr)
function slicing2() {
  let str = "This is a new string";
  let ans = str.slice(7, 20); //just to slice up the string by their index values
  console.log(ans);

  ans = str.slice(-12, -6); //string is counted from backside
  console.log(ans);

  //substring and substr are almost similar
}

// #3          (raplace )
function replace_3() {
  let str = "I need to get into microsoft and microsoft ";
  //use /g for global to get them replaced by all match in string (also don't use "" when using /g)
  let newstr = str.replace(/microsoft/g, "nutanix"); // replace returns a new string  and only replaces the first match
  console.log(newstr);
}

// #4          (case change and concat)
function casse4() {
  let str = "this is a string";
  let str1 = "this is also a string";
  str = str.concat(str1.toLowerCase());
  console.log(str);
}

// #5              (split i.e - to divide the string into array)
function splitting5() {
  //All the split will be added  to an array for usage
  let str = "this string will be splitted"; //simple concept
  let text = str.split(" "); // Need to give something speacial that can seperate words in string here its (space(" "))
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

// #6                  (searching methods in string)
function searchinstring6() {
  let str = "Can you see my one one two three one string";
  console.log(str.indexOf("my")); //needed '' not ""
  console.log(str.lastIndexOf("one")); //returns the index of last occurance of specific word
  console.log(str.startsWith("you")); //returns true if starts with specific word
  console.log(str.endsWith("string"));
  console.log(str.search("string"));

  //match returns as an object and also use /g for global search
  console.log(str.match(/one/g)); // now this one gives large output a lot details
  console.log(str.match("one")); //will return only first match

  console.log(str.includes("my")); // includes a particular word or not
}

// #7                      (Numbers)
// JavaScript Numbers are Always 64-bit Floating Point
function empty7() {
  // console.log(Number("10 "));     //Basically Number method converts the parsed value into number
}
/*          You can use certain properties with Number to use them somewhere
    Number              Properties
    Property	        Description
    MAX_VALUE	        Returns the largest number possible in JavaScript
    MIN_VALUE	        Returns the smallest number possible in JavaScript
    POSITIVE_INFINITY	Represents infinity (returned on overflow)
    NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
    NaN	Represents a    "Not-a-Number" value
*/

// #8                       (Array)
//importatn point :- In js arrays can't never be associative array objects are different things other than array
function arrays8() {
  let arr = [1, 2, 3, 4];
  console.log(arr);


  

  let str = [
    //arrays as containing multiple objects
    //so that means that associative array are not possible but we can acheive associativity behaviour thorugh objects in array
    {
      name: "pranshu",
      roll: 1914355,
    },
    {
      name: "rahul",
      roll: 1914366,
    },
    {
      name: "pooja",
      roll: 191766,
    },
  ];

  console.log(str[0].name);
}

// #9                         (continued arrays some methods and application)
function continuing9() {
  let arr = [1, 2, 3, 4, 5, 6];
  arr.push(7); //just to know it also exists here
  arr.pop();

  arr = arr.toString(); //to convert arrays to string directly
  console.log(typeof arr);

  arr = arr.split(","); //to convert strings to array directly
  console.log(arr); //But these will still be string i.e - they are not converted into int by split (i.e - just like as they were provided)

  //best thing about shift and unshift is they do the change on the same array
  arr.shift();
  console.log(arr);

  arr.unshift(19); //perfect example of the effect of split can be seen here
  console.log(arr);

  let arr1 = [1, 6, 5, 1, 2, 10, 100, 20];
  arr = arr.concat(arr1);
  console.log(arr);

  arr1 = arr1.sort(); //but this sorting isn't perfect will fail at values with 0's
  console.log(arr1); //wrong result
  arr1 = arr1.sort(function (a, b) {
    return a - b;
  }); //the main concept is just remember use a-b for ascending and b-a for decending don't go deep
  console.log(arr1); //correct sorting

  //you can even use sort function to sort objects of array for example
  let myarr = [
    {
      name: "pranshu", //sorting array objects on the basis of their age object
      age: 12,
    },
    {
      name: "rahul",
      age: 11,
    },
    {
      name: "what",
      age: 16,
    },
    {
      name: "tomato",
      age: 20,
    },
  ];

  myarr = myarr.sort(function (a, b) {
    return a.age - b.age;
  }); //just remember the concept uk when a-b ascending when b-a its decending
  console.log(myarr);

  myarr = myarr.reverse(); //its powerful omg didn't expected bror
  console.log(myarr);
}

// #10                         (splice and slice)
function splslic10() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 5, 7, 8, 13, 5, 7];

  arr = arr.splice(2, 4); // start    how many to pick
  console.log(arr); //just second parameter fark

  arr = arr.slice(0, 7); //start index(excludive)        end index
  console.log(arr); //ITS  just slicing down the cake just write how much big slice
}

// #11                         (dates)
function dates11() {
  let today = new Date(2016, 2, 18); // Beware of the diff bw date and Date we need to use Date()
  console.log(typeof today); //don't forget to use new with Date() which will form it into object
  console.log(today);

  // There is a whole format of using Date() inbuilt function in which we can reduce down the parameters
  let yesterday = new Date(
    2016,
    11 /*12 is cons as 1 and so on (0-11 method tbh))*/,
    16,
    2,
    30,
    33
  );
  // the internal format(Date(year:number, month:number, day:number))...and So on
  console.log(yesterday);

  //JavaScript Stores Dates as Milliseconds
  //total milliseconds in 24 hours = 24*60*60*10^3
  let milli = new Date(24000000);
  console.log(milli);
  //One and two digit years will be interpreted as 19xx: (ex - 99 -> 1999)

  let str = new Date("2014-5-12"); //strings inputs is also possible
  console.log(str);

  //You can use diff methods to output the returned data in various formats like
  // toString()
  // toUTCString()
  // toDateString()
  // toISOString()
  console.log(today.toDateString());
  console.log(yesterday.toISOString());
  console.log(milli.toString());
  console.log(str.toUTCString());

  //use .parse() to convert date into milliseconds
  // console.log(str.parse());
}


// #12                     (get set methods to use them with Date() objects)
function get_set_date12() {
  // These methods can be used for getting information from a date object:
  // Method	Description
  // getFullYear()	Get the year as a four digit number (yyyy)
  // getMonth()	Get the month as a number (0-11)
  // getDate()	Get the day as a number (1-31)
  // getHours()	Get the hour (0-23)
  // getMinutes()	Get the minute (0-59)
  // getSeconds()	Get the second (0-59)
  // getMilliseconds()	Get the millisecond (0-999)
  // getTime()	Get the time (milliseconds since January 1, 1970)
  // getDay()	Get the weekday as a number (0-6)
  // Date.now()	Get the time. ECMAScript 5.
  //  UTC dates (Universal Time Zone dates):
  // Method	Description
  // getUTCDate()	Same as getDate(), but returns the UTC date
  // getUTCDay()	Same as getDay(), but returns the UTC day
  // getUTCFullYear()	Same as getFullYear(), but returns the UTC year
  // getUTCHours()	Same as getHours(), but returns the UTC hour
  // getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
  // getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
  // getUTCMonth()	Same as getMonth(), but returns the UTC month
  // getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds
  // Set Date Methods
  // Set Date methods are used for setting a part of a date:
  // Method	Description
  // setDate()	Set the day as a number (1-31)
  // setFullYear()	Set the year (optionally month and day)
  // setHours()	Set the hour (0-23)
  // setMilliseconds()	Set the milliseconds (0-999)
  // setMinutes()	Set the minutes (0-59)
  // setMonth()	Set the month (0-11)
  // setSeconds()	Set the seconds (0-59)
  // setTime()	Set the time (milliseconds since January 1, 1970)
}

// #13             (Math property)
function stillfun13() {
  //some constants through math property
  console.log(Math.E); // returns Euler's number
  console.log(Math.PI); // returns PI
  console.log(Math.SQRT2); // returns the square root of 2
  console.log(Math.SQRT1_2); // returns the square root of 1/2
  console.log(Math.LN2); // returns the natural logarithm of 2
  console.log(Math.LN10); // returns the natural logarithm of 10
  console.log(Math.LOG2E); // returns base 2 logarithm of E
  console.log(Math.LOG10E); // returns base 10 logarithm of E

  //math methods
  let x = 12.36;
  console.log(Math.round(x)); //Returns x rounded to its nearest integer
  console.log(Math.ceil(x)); //Returns x rounded up to its nearest integer
  console.log(Math.floor(x)); //Returns x rounded down to its nearest integer
  console.log(Math.trunc(x)); //Returns the integer part of x (new in ES6)
  console.log(Math.sign(x)); //Returns if the x is -ve or +ve
  console.log(Math.pow(2, 5));
  console.log(Math.sqrt(16));
  console.log(Math.min(1, 2, 3, 4, 123, 65, 298)); //returns min
  console.log(Math.max(1, 2, 3, 4, 123, 65, 298)); //returns max
  console.log(Math.random()); //returns random number b/w 0-1
  console.log(Math.log(10)); //returns natural log -- use .log2()  or log10() for to base 2 or 10

  //using .random to print a random value more than 0-1(just a hack)
  console.log(Math.floor(Math.random() * 10 /*increase for more here 0-9*/));

  //this function will return a random number b/w the passed values
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// #14             (switch  ===)
// ===	equal value and equal type      (goes deep with the concept of pass by value and pass by reference)
// == equal value only
function switch_14() {
  switch (Math.floor(Math.random() * 10)) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default: //if nothing matches go for it
      text = "Looking forward to the Weekend";
      break;
  }
  console.log(text);
}

//#15               (iterables)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
function iterables15() {
  let my = [1, 2, 3, 4]; //still can't create iterable for maps my bug learn it
  //syntax:- type_ ran_var of given_obj       (iterables are used to iterate over the objects or objects array)
  for (const x of my) {
    //here this is creating a iterating and iterating over the array
    console.log(x);
  }
}

// #16 arrow function           (just used to write function in a small way) (syntax:- ()=> on the place of function name() while using functions inside somewhere)

// With a regular function "this" represents the object that calls the function:          ---Impo point---
// With an arrow function this represents the owner of the function:
let printme16 = () => {
  //can even pass var in ()
  let store = "Pranshu";
  for (let i = 0; i < 5; i++) {
    store += "Pranshu";
  }
  return store;
};
// let ans = printme16();
// console.log(ans);


function nulltype17(){
    //you can use typeof to see the type of var etc
    let a =3
    console.log(typeof(null))   //object 
    console.log(typeof(a))    //number

    // js has basicaclly two dividing category of types one is primittive(pre defined as well as immutable too) and other is non primmitive or object (key:value) type which is mutable   (which leads us to the concept of pass by ref or pass by val)
    //https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/

    // BUt here there is a very creepy bug in js that null is also object but it is in reality a primmitive value

    // https://2ality.com/2013/10/typeof-null.html
    // Read this for more info
}

// #17 remaining topics --> foreach, iterables perfectly, maps, sets, this keyword, arrow function, classes

//for query selector
// Both have a length property that returns the number of elements in the list (collection).

//------HTML COLLECTION------
// An HTMLCollection is a collection of document elements.
// HTMLCollection items can be accessed by their name, id, or index number.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// for example the getelementbyid "Don't" return a HTML collection (but getelementbyclassname() does) but the queryselectorALL() returns node list which you very well know are accessed by indexing methods that certainly seems like foreach

//------NODE LIST------
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes basically any borken piece of HTML content).
// NodeList items can only be accessed by their index number.
// The querySelectorAll() method returns a static NodeList.
// The childNodes property returns a live NodeList.
// Here live means that they automatically update the value with the sudden anytime updation of that element



