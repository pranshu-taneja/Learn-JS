/* various methods for selecting*/
// for more clear understanding just print everything (like when you append just after print(body) it) you create or store the long or big stored things uk i am talking about//

/* _____________________________________________________________________________________________________________________ */


//------------------- TOPIC COVERED IN THIS FILE IS -------------------
// 1. JS SELECTORS AND THEIR USAGE WITH FUNCTIONS
// 2. CONCEPT OF EVENT LISTENERS WITH PRACTICAL EXAMPLE
// 3. DIFFERENCE BETWEEN setTimeout() AND setInterval() AND THEIR CONCEPT OF WORKING
// 4. CONCEPT OF CLASSES AND OBJECT
//------------------- TOPIC COVERED IN THIS FILE IS -------------------

/* _____________________________________________________________________________________________________________________ */

//------------------- SELECTORS AND THEIR MOST USAGE FUNCTIONS WITH DEEP CONCEPT -------------------

// --------You might see mainly 4 types of returning from these selecting functions  (might be more also)--------
//(-- NodeList (Nodes which includes every piece of HTML document which means comment and text etc is also included of an html document nodes)
// (--HTMLcollection (Returns HTML element node but they are specifically html elements but yes they are also nodes))
// (-- DOMtokenlist which returns space seperated tokens uk what i am talking aobut class:"a b c")
// (-- ELement somtimes the direct element is returned like in case of getelementbyid())

// ------- Some of the most importatnt one's JS selector given below -->carefully undrestand the deep meanign of their returns types------
// document.getElementById()        //returns an element not htmlcollection
// document.getElementsByTagName()      //returns HTMLcollection
// document.getElementsByClassName()      //returns HTMLcollection
// document.querySelector()           //returns element     
// document.querySelectorAll()           //returns an node list

///----- Now some functions can be added to them with those selector some of important one's are given below--------
// setAttribute() is a very important function to add any attribute to your html element
// classList //returns domtoken list that it space seperated classname (class:"a b c") (you can also use toogle to change its class to make different css properties working or anything basically refer to another class but the same element)
// Children (HTMLcollection) and childNode(NodeList) is something that you should remember too  // children


//------------Difference between **queryselector** and **queryselectorALL** --------------
// The querySelector() method returns the first element that matches a CSS selector
//that means that by using querySelector() you can select class id or anything else just by selecting them with css selecting style i.e --> .class and #id and so on

// To return all matches (not just only the first), use the querySelectorAll() instead.
// if you don't use use querySelectorAll() then only the first one will be selected so to select all with (.circle) class use all() vala method
//when you select all then all the shit get stored to node list and to access or apply something on them use foreach() [--Very important--]
/*various methods for s electing */

//------------------- SELECTORS AND THEIR MOST USAGE FUNCTIONS WITH DEEP CONCEPT -------------------

/* _____________________________________________________________________________________________________________________ */
 

document.addEventListener("DOMContentLoaded", () => {
  //use this to use script in head
  //this will let the dom load first then script will run
  //you don't need to use DOMcontentloaded if you are using script indside body content in last

  //-------------------------------------- CONCEPT OF EVENT LISTENERTS PRACTICAL --------------------------------------
  {  
    //circle 1--> doing some toggle i.e toggling through event (also includes remove EL also)
    let circle1 = document.querySelector(".circle");
    // console.log(circle1)        //try printing the added values with querySelectorAll() the result will be amazing

    let count = 0;
    function brown() {
      // first circle click
      circle1.classList.toggle("brown-circle"); //class list is used to toggle the class using brown-circle is a great trick btw

      //to remove event after 10 clicks           (see the dev tools)
      count++;
      console.log(count);
      if (count > 10) {
        circle1.removeEventListener("click", brown);
      }
      //to remove event after 10 clicks
    }

    circle1.addEventListener("click", brown);
  } 

  {
    //for circle 2
    let circle2 = document.getElementById("object"); //just like this keep all the values in var so that you can use properties on a single word rather than on complete line

    function yellow() {
      circle2.style.backgroundColor = "yellow";
    }
    circle2.addEventListener("mouseover", yellow); //rem here function name don't contain fun() brackets only fun}
  } 

  //-------------------------------------- CONCEPT OF EVENT LISTENERTS PRACTICAL --------------------------------------

/* _____________________________________________________________________________________________________________________ */
 

  //-------------------------------------- CONCEPT SETTIMEOUT() AND SETINTERVAL() --------------------------------------

  /* {  settimeout()    // settimeout calls only once after a given time interval but setinterval calls or do the action infinitely until clearinterval() is made to happen
        --IMPORTANT :- comment the settimeout section to see the working of set interval() 
        let bubble = document.querySelector('.speechbubble');
        function settext(){
            bubble.innerHTML = "BULLSHIT!!"
            //text will be gone after 10 seconds
            setTimeout(()=>bubble.innerHTML = "",10000);        
        }
        setTimeout(settext, 3000);          //the text will appear after 3 seconds

    } */

  {
    //set interval      --very important--
    //setinterval() calls infinte time by repeating break tenure given    //imp--
    //Use clearinterval() to shut the fuck up
    let bubble = document.querySelector(".speechbubble");
    let count = 0;
    function settext() {
      //creating an element just through javascript         //important
      //THis will create an independent not visible intially element which like you have in the back and you can use it as a weapon to append it with anyone anytime you want. Just need to append to make it visible
      let textinside = document.createElement("div");
      //now adding it into a variable so that i can add it to some section or div
      textinside.innerHTML = "Hello😁";
      count++;
      //adding or appending as a child to out div (speechbubble)
      bubble.appendChild(textinside);
      console.log("working");
      if (count > 5) {
        //asking the interval to shut the fuck up when...
        clearInterval(timeid);
      }
    }
    let timeid = setInterval(settext, 1000); //Timeid
  }

  /*
    DIFFERENCE BETWEEN SETTIMEOUT() AND SETINTERVAL()
    1.) setTimeout(expression, timeout); runs the code/function once after the timeout.
    2.) setInterval(expression, timeout); runs the code/function repeatedly, with the length of the timeout between each repeat.
  */

  //-------------------------------------- CONCEPT SETTIMEOUT() AND SETINTERVAL() --------------------------------------
  

/* _____________________________________________________________________________________________________________________ */


//------------------- CONCEPT OF CLASS AND OBJECT -------------------
  class myclass {
    //this is how you make calsses
    constructor(head, tail) {
      this.head = head;
      this.tail = tail;
    }
  }

  let obj = new myclass(12, 14);
  console.log(obj);
  console.log(obj.head);
//------------------- CONCEPT OF CLASS AND OBJECT -------------------

  {
    //Events for input with key press
    let grab = document.querySelector("body");

    function pressed(thekey) {
      if (thekey.key === "ArrowLeft") {
        //here we are using .key property in past it used to a .keycode= some number which told the key pressed now its .key = 'in camelCase key'
        console.log("you just pressed left boy");
      }
      if (thekey.keyCode === 39) {
        console.log("you just pressed right boy");
      }
    }

    // remember this 'keydown/keypress' category events only work with window and body that has the full control you know 
    grab.addEventListener("keydown", pressed);
  }

  //getter and setter function
  class Person {
    constructor(name) {
      this.setName(name);
    }
    getName() {
      //you can build this for anyone
      return this.name;
    }
    setName(newName) {
      newName = newName.trim();
      if (newName === "") {
        throw "The name cannot be empty";
      }
      this.name = newName;
    }
  }

  let person = new Person("Jane Doe");
  console.log(person); // Jane Doe

  person.setName("Jane Smith");
  console.log(person.getName()); // Jane Smith
});
