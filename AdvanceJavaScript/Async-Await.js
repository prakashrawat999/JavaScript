/*
"async and await make promises easier to write"

👍 async makes a function return a Promise
The keyword async before a function makes the function return a promise:

👍 await makes a function wait for a Promise
The keyword await before a function makes the function wait for a promise:

*/

async function myFunction() {
    return "Hello I am prakash";
  }
console.log(myFunction()); //Promise { 'Hello I am prakash' }

//function myFunction() {
//    return Promise.resolve("Hello I am prakash");
//  }
//console.log(myFunction()); //Promise { 'Hello I am prakash' }

async function myDisplay()
{
  let myPromise = new Promise(function(resolve) 
  {
    resolve("Hii i am golu rawat");
  });
  console.log( await myPromise);
}
myDisplay();


