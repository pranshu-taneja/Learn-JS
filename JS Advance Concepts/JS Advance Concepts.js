//This is a JSON STRING formatted data which can be used by "ANY LANGUAGE"
const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`

//To use this data we need to parse it as according to using language
const parsed_data = JSON.parse(data);//every language parse as according to their syntax
//we just need the string format tbh

//we can also convert the parsed or converted the data into string format
const JSON_data = {breed:'lab', isharmful:true, food:'biscuit', owner:'piyush'}
const JSON_data_string_format = JSON.stringify(JSON_data);



document.addEventListener("DOMContentLoaded", () => {
  //Using function by assigning them to variables really helps a lot so keep using it (just a good practice)//

  /* #1 `This can be used as a ${string_var} template` */
  function stringtemplate1() {
    //Handy string templates
    let str1 = "Monkey";
    let str2 = "Dog";

    //Watch out the syntax btw
    console.log(`This is a Code ${str1} and a ${str2}`);
  }

  //#2 Foreach with map use get() must and understand callback
  function foreach_usage2() {
    //using foreach with maps
    let obj = new Map([
      ["one", 1],
      ["two", 2],
      ["three", 3],
    ]);

    obj.forEach((data, index) => {
      //Possible Parameters are  (cur_val, Index, _Noidea_) [It resembles to other meaning also i.e- index]
      console.log(data);
      console.log(index);
    });

    //using foreach with array
    let arr = ["Pranshu", "Pyush", "Prince"];
    //Here callback concept is being used
    arr.forEach((element) => {
      console.log(element);
    });
  }

  //#3 Usage of iterating using (of) in for loop
  function forof3() {
    //it needs something function which provides iterator
    let mapobj = [
      ["one", 1],
      ["two", 2],
      ["three", 3],
    ];

    /* Other ways of iterating in map */
    for (const x of mapobj.values()) {
      //values() returns and iterator for values    // Very important
      console.log(x);
    }
    
    for (const x of mapobj.keys()) {
      //keys() returns and iterator for keys of map
      console.log(x);
    }
    
    for (const [key,value] of mapobj){
      console.log(key, value)
    }

    console.log(mapobj[1]);

    /*Just like keys() values()---Other function like set(), clear(), delete(), has() also exists */
  }

  /* 4 Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function. */
  function varwithout_type4() {
    a = 4;
  }

  /* 5 concept of closure */
  function Closure_Closure5() {
    // [diff bw "fun" and "fun()" (try in return)] one thing to understand btw is when you write "fun" as a function name then it will return the function defination itself.... BUt BUT BUT if you do "fun()" then this time you are basically calling the function.. 
    /* code for concept of closure */
    // https://www.programiz.com/javascript/closure   (refer this tutorial if need)
    // https://stackoverflow.com/a/111111/13914357  (one more awesome resource)
    function sum() {
      let a = 0;
      function increaseSum() {
        //nested function (not present in mostly other lang)
        // the value of a is increased by 1
        return (a = a + 1);
      }
      return increaseSum;
    }

    let x = sum(); //for closure this assigning inside variable is important
    //When you save a function(sum) then a closure(saving of function with its lexical enviournment) is created so that you can use the same function and its powers even after its closed or its life span ended

    let a = 5; //This is in separate memory space so won't be affected

    console.log(x);
    //Just telling that practically the whole function is actually stored in variable
    //other than that the lexical enviourment is also there but not shown just to tell you

    //Here for below lines see the closure of x in the devtool using debugger 
    // You will see that in closure scope (there will be three scopes there closure, script, Global)
    console.log(x()); // 1
    console.log(x()); // 2
    //It remembers the value inside the closure function also which can be used for making shit private
    console.log(a); // 5
    /* code for concept of closure */
  }

  /* 6 concept of unknown */
  function using_unknown6() {
    //use it for something else
  }

  /*  7 concept of function statement and function expression */
  // https://www.programiz.com/javascript/hoisting    (READ ME)
  function understand_statement_expression7() {
    // Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 
    // Note: In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.

    //calling before they are written both
    //Just to remind you (function_name without () is the whole function code passing)

    statement();
    //already visible that its hosited

    expression();
    //isn't hoisted cuz variable isn't assigned value yet i.e:- only the memory allocation process is done till now remember (memory allocation--> execution(values assign))

    function statement() {
      console.log("Hoisting possible");
    }

    let expression = function expression() {
      console.log("Hoisting not possible");
    };
    // expression()   try me i will work cuz intialized
  }

  /* 8 faad example of closure */
  function faad_example_closure8() {
    let sum = (a) => {
      console.log("live viewrs " + a);

      let c = 5;

      return function (b) {
        return a + b + c;
      };
    };

    let store = sum(200);     //this step is important where you use "store" var to pass value from function(b) otherwise it might not be possible
    //The whole returned function(b) itself is (store) actually

    console.log(store(5));
    //Here the function retains the value of a and c
  }

  /* Showing how asynchronous works in js */
  function working_asynchronously9() {
    /* 

    --Now as you know js is synchronous single threaded language but you can make it asynchronous using some async function() like settimeout() and setInterval()-- 

    --Functions running in parallel with other functions are called asynchronous-- 

    --ASYNCHRONOUS Behavious in JS-- 
    Functions running in parallel with other functions are called asynchronous--Example-settimeout() 

    JUST TELLING
    --It breaks the sturcter of syncronous structer of js But remember It wont be executed until the execution context isn't yet cleared-- 

    */
    const data_s = [
      { name: "Tomato", Roll_No: 1927662 },
      { name: "Apple", Roll_No: 1914928 },
    ];

    function getdatas() {
      setTimeout(() => {
        let output = "";
        data_s.forEach((data, index) => {
          output += `<li>${data.name}</li>`;    //remember this SYntax `` is used to write pure HTML in string. And ofc its way of getting added as string HTML not element but work normal...wanna learn more?? redirect to "create_element_ways()" 
          //don't forget the / with <li> in end
        });
        document.body.innerHTML = output;
      }, 1000);
      /* NOW IT WON'T PRINT THE ADDED (Hello) CUZ GETDATA() IS EXECUTED ALREADY (FOR THIS WE NEED TO USE ---AWAIT OR CALLBACKS OR PROMISES---) LIKE ADDING A MUST OR EXCEPTION
      
      BUT BUT BUT.... If you keep time== 5000 then It will work
      */
    }

    function createdata(newdata) {
      setTimeout(() => {
        data_s.push(newdata);
      }, 2000);
    }

    createdata({ name: "Hello", Roll_No: 1917223 });
    //adding new values in present object is kinda difficult there only this worked  (complicated)
    getdatas();
    /*   
    Here both getdatas and createdata are working asynchronously but due to their async we are getting some problem of must adding some values first then execution kind of like an exception right. 
    
    Basically you will get only "tomato and apple" the reason being is getdata got executed first that means it already printed to stored value(tomato & apple).. But due to settimeout the createdata works lately that is logically after getdata(2s-1s = 1s) and then it added new value to the object. So obv you won't see the third value. 

    But you can see it changing (3 values) then change createdata settimeout value to 1000ms/1s. or getdata settimeout value to more than 2s
    
    */
  }

  /* 10 HANDLING THE PROBLEM THROUGH CALLBACKS */
  function callback_understanding10() {
    /* 
    --CALLBACKS--    
     A callback is a function passed as an argument to another function Even settimeout(callback(),time) uses callback
    */
    const data_s = [
      { name: "Tomato", Roll_No: 1927662 },
      { name: "Apple", Roll_No: 1914928 },
    ];

    function getdatas() {
      setTimeout(() => {
        let output = "";
        data_s.forEach((data, index) => {
          output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
      }, 1000);
    }

    function createdata(newdata, callback) {
      /* Here we will be usign callback */
      setTimeout(() => {
        data_s.push(newdata);
        callback(); //calling getdata()
        /* Ik You might say Its just same..calling function again but its just called callback when function passed as augrument */
        /* THe main point is that callback function works asynchronously which is very benefical */
      }, 2000);
    }

    createdata({ name: "Welcome_0", Roll_No: 1916255 }, getdatas);
    getdatas();
  }

  /* 11 HANDLING THE PROBLEM THROUGH PROMISES */
  function promises_understanding11() {
    const data_s = [
      { name: "Welcome_1", Roll_No: 1826300 },
      { name: "Welcome_2", Roll_No: 1917522 },
    ];

    function getdatas() {
      setTimeout(() => {
        let output = "";
        data_s.forEach((data, index) => {
          output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
      }, 1000);
    }

    function createdata(newdata) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          data_s.push(newdata);

          let signal_for_forward = true;

          //Here if resolve comes into play then the second arg. will start working in create data(while calling) 
          if (!signal_for_forward) {
            reject("KUCH TO SAHI NAHI HAI (ERROR)");
          } 
          else {
            resolve();
          }
        }, 2000);
      });
    }
    createdata({ name: "Nitish", Roll_No: 1914344 }).then(getdatas);
  }

  
  // --AWAIT--
  /* 12 HANDLING THE PROBLEM THROUGH async/await */ 
  /*   
      ASYNC AND AWAIT JUST MAKES PROMISES EASIER TO WRITE"
      async makes a function return a Promise
      await makes a function wait for a Promise then it will work
      
      Promise returns a response but in case error it rejects the value and the response is handled by .then and .catch in case it came or not!!
      also async and await handles the promise in shorter code 
      --i.e-> await which is inside a async function wait for the resoponse first which is basically making js asyncronous tbh.

  */
  function async_await12() {
    const data_s = [
      { name: "Pranshu", Roll_No: 1914355 },
      { name: "Rahul", Roll_No: 1914359 },
    ];

    function getdatas() {
      setTimeout(() => {
        let output = "";
        data_s.forEach((data, index) => {
          output += `<li>${data.name}</li>`;
          output += `<li>${data.Roll_No}</li>`;
        });
        document.body.innerHTML = output;
      }, 1000);
    }

    function createdata(newdata) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          data_s.push(newdata);

          let signal_for_forward = true;

          if (!signal_for_forward) {
            reject("KUCH TO SAHI NAHI HAI (ERROR)");
          } 
          else {
            resolve();
          }
        }, 2000);
      });
    }

    async function work(){
      await createdata({ name: "jojo", Roll_No: 1914344 });
      getdatas(); //will wait for the return of promise then execute
      //i.e-> if returned false then error will be shown
    }
    work()
  }

  /*#13 Learning fetch api in javascript */

  //simple way handling of promise sent through fetch 
  function my_fetch_simple13(){
    fetch("https://i.imgur.com/LaEYM5b.gif")
    .then(response => {
      // console.log(response);  //This will only fail in network error
      console.log("Response received!!");
      return response.blob();
      // The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
    })
    .then(blob => {
      console.log(blob);
    })
  }


  /*#14 Learning fetch api in javascript using await and async i.e-> handling response returned by fetch's promise*/

  /* mentos way of handling promise using async and await (easy representation) */
  async function my_fetch_mentos14(){
    const response = await fetch('https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg')
    const blob = response.blob();
    document.getElementById('image').src = URL.createObjectURL(blob); //Here the url is somewhat not supported so will take a look at it later--!

    /* although this one 👇 is working perfectly */
    // document.getElementById('image').src = "https://i.insider.com/601c27acee136f00183aa4f5?width=600&format=jpeg&auto=webp";
  }
  /* ----I am adding this 👇 to show you that catch also exist and use it---- */
  // my_fetch_mentos14().catch(()=>{console.log("ERROR BRO!!")})  //calling




  /* 16 Lets see the working of call stack in chrome open devtool call stack */
  function callstack16_working/*  */(){
    const multiply = (x,y)  =>  {return x*y}
    const square =   (x)  =>  {multiply(x,x)}

    const isRightTriangle = (a,b,c)=> {
      square(a) + square(b) === square(c)
    }

    isRightTriangle(3,4,5)
    console.log("look at the working inside call stack ")
    //just put the stopper at each call
    console.log("i.e-> anonymus => my_callstack16 => isRightTriangle => square => Multiply")
  }


  /* 17  knowing what is callback hell and how to escape it */
  const makeBurger = () => {
    getBeef(function(beef) {
      cookBeef(beef, function(cookedBeef) {
        getBuns(function(buns) {
          // Put patty in bun
        });
      });
    });
  };
  
  //Concept callback hell --> So basically when you use many nested callbacks then even a single one's failure will cause whole desturction and it is hard to understand the code like when >50 function with callbacks. This is called callback hell.
  //WHat to do then--> To escape from this es6 provide async and await which handles promises i.e working asyncronously. Also it provides .catch for error handling. 


  /* 18 understanding the working of json  */
  function json(){
    //the content for understanding json have to put above from dom loaded so see there!! 
    //print each var to get a clear understanding
  }

  /* 19  HTTPS status codes */
  function http_status19(){
    /* when you make a request then a code is received which tells you is the request is successful or failed or how much failed or why failed just by status codes */

            /* MDN DOCS */
    // Informational responses (100–199)  // NOT imp
    // Successful responses (200–299)     // done successfully
    // Redirection messages (300–399)     // Try (google.co) 
    // Client error responses (400–499)   // 
    // Server error responses (500–599)
  }


  /* 20 The api's structer processing */
  function API_structer_working20(){
    
    /* 
    # when you enter a api url then the base url or the fetching resource has to exact similar but if 
    there is some change in querie section than it works pretty 
    
    # well it doesn't stop the working as at least it is communicating

    # The queries are given after (?) in the url and each querie is seperated by (&) sign 

    # These queries works a ( key = value ) manner. They specific data is fetched by key value pairs.

    # EXAMPLES:- https://api.tvmaze.com/search/shows?q=dragons

    # Here https://api.tvmaze.com/search/shows  (not querie included)
      A single unexpected change above will dead the resoponse
      
      
    # https://api.tvmaze.com/search/shows? q=dragons & color=blue (with querie)
      won't give any effect if you change the key or value above UNEXPECTED will be ignored tbh
    
    */
  }
  
  //------------------- Write your task here -------------------
  callback_understanding10()
  //------------------- Write your task here -------------------
});
