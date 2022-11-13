
<!-- //------------------- very important Points of asynchronous behaviour ------------------- -->
# -- DIfference Between Callback, async/await and Promises --
## [Read The Blog Here](https://blog.loginradius.com/engineering/callback-vs-promises-vs-async-await/)
<hr>

# Callback
`Callbacks` are basically the function passed into another function (it looks like this only) but there is more going on... for example if you use settimeout() as a callback function (i.e: settimeout into another function) You will get to know it is acutally following the async behaviour (actually all callback function does follow the async behaviour LIke `function(arg, (callback)=>{---}))`
```js
function printString(){
   console.log("Tom"); 
   setTimeout(function()  { console.log("Jacob"); }, 300); 
  console.log("Mark")
}

printString();
``` 

    > If that was synchronous lets just suppose then result would be: `Tom Jacob Mark`

    > But now as it is Async So the result would be : `Tom Mark Jacob`

<p style="color:Lightblue;">So, that means that all the function inside function that you create work in the async behaviour which means that they are going to be 'EXECUTED' for sure (due to execution stack) but.. in an async behaviour (VERY IMPORTANT)</p>
<hr>

# Promise 
### <p style="color:Lightgreen;">Simply Promised are the object which gives you the assurity of resolving the particular code given to it... now that does not mean that it will surely execute it ofc js will execute everything whatever you will ask... but here resolving means kinda atomic wheather the result would be produced or error would be given</p>

## `Using Promises`
```js
Promise_Name
.then((successMsg) => {             --if resolved do this
    console.log(successMsg);
})
.catch((errorMsg) => {              --if not show this error msg
    console.log(errorMsg);
});
```

## `Creating a Promise`     
```js
const myFirstPromise = new Promise((resolve, reject) => {   
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});
```
<p style="color:hotpink;">-- So, Promise Simply gives you the security of resolving a code part for sure!! --</p>

<hr>

## `Async & Await`
### <p style="color:Gold;">In short they are simply the `syntactic sugar` for Promises. They also bring the concept of `promises` on the table but in a easier syntax format easy for humans to read.</p>

> Most commonly they are used to fetch data from api where the resolve is must!! 

>You can use a try catch block for overall result ki error handling in function processing..

```js
async function demoPromise() {
  try {
    let message = await myFirstPromise;     --Inside Promises are working
    let message  = await helloPromise();    --Inside Promises are working
    console.log(message);

  }catch((error) => { 
      console.log("Error:" + error.message);
  })
}
```
<hr>

<!-- //------------------- very important Points of asynchronous behaviour ------------------- -->
