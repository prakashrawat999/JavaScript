/*
***************************************************************************************************************
                         👍👍👍👍👍👍 Modern JavaScript 😍😍 👍👍👍👍👍
                         👍👍👍👍👍 2015, ES6 👍👍👍

 👍👍👍 LET VS CONST  vs  VAR 👍👍👍
                  var => Function scope 
                  let and const => Block Scope
let and const were introduced with ES6 and previously, var was the only option.
The scope of a var variable is functional scope. The scope of a let variable is block scope.
The scope of a const variable is block scope. It can be updated and re-declared into the scope
*/
//------------------------------VAR👍👍------------------------------------------------------------------------

var Name = "prakash";
console.log(Name); //prakash

Name = "prakash_rawat";
console.log(Name); //prakash_rawat


function biodata() 
 {
   var myFirstName = "prakash";
   console.log(myFirstName); //prakash
   if(true)
   {
     var myLastName = "rawat";
     console.log('inner'+ myFirstName); //inner prakash
     console.log('inner'+ myLastName); //inner rawat
   }
   console.log('innerOuter ' + myLastName); //innerOuter rawat
   console.log(myFirstName); //prakash
 }
 biodata();


//--------------------------------------------let👍👍---------------------------------------------------------

/*
let myName = "prakash rawat";
console.log(myName); // prakash rawat
myName = "golu rawat";
console.log(myName); //golu rawat

function biodata() 
{
  let myFirstName = "prakash";
  console.log(myFirstName); //prakash
  if(true)
  {
    let myLastName = "rawat";
    console.log('inner'+ myFirstName); //inner prakash
    console.log('inner'+ myLastName); //inner rawat
  }
  console.log(myFirstName); //prakash
  console.log('innerOuter ' + myLastName); //ReferenceError: myLastName is not defined
}
biodata();

*/
//----------------------------------------------------------const👍👍👍👍-----------------------------------
/*
const Name = "prakash";
console.log(Name); //prakash
Name = "rawat"; //TypeError: Assignment to constant variable.
console.log(Name);


function biodata() 
{
  let myFirstName = "prakash";
  console.log(myFirstName); //prakash
  if(true)
  {
    let myLastName = "rawat";
    console.log('inner'+ myFirstName); //inner prakash
    console.log('inner'+ myLastName); //inner rawat
  }
  console.log(myFirstName); //prakash
  console.log('innerOuter ' + myLastName); //ReferenceError: myLastName is not defined
}
biodata();

*/

//*************************************************👍👍👍TEMPLATE STRING***************************************

/*
  Template literals (Template strings) 
  JavaScript program to print table for given number (8)?
*/
for(let num = 1; num<= 10; num++)
{
 let tableOf = 12;  
 //console.log(tableOf + " * " + num + " = " + tableOf * num);
 console.log( ` ${tableOf} * ${num} = ${tableOf * num}` ); //template string
}
//Output:-
//12 * 1 = 12
//12 * 2 = 24  
//12 * 3 = 36  
//12 * 4 = 48  
//12 * 5 = 60  
//12 * 6 = 72  
//12 * 7 = 84  
//12 * 8 = 96  
//12 * 9 = 108 
//12 * 10 = 120


//*********************************************👍👍👍DEFAULT PARAMETER********************************************

/*
   Default Parameters
   Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
*/

function mult(a,b=5)
  {
    return a*b;
  }
console.log(mult(3)); //15


//****************************************************👍👍👍👍DESTRUCTURING*****************************************
/*
   Destructuring in ES6
   The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects, into distinct variables.
*/
  // ➡ Array Destructuring  🏁
  
  const myBioData = ['prakash', 'rawat', 20];
  //let myFName = myBioData[0];
  //let myLName = myBioData[1];
  //let myAge = myBioData[2];
  
  //let [myFName, myName, myAge] = myBioData; //array destructuring
  //console.log(myAge);
  //console.log(myName);

  // we can add values too 
  
  let [myFName,myLName,myAge, Degree="BCA"] = myBioData;
  console.log(Degree);

  // ➡ Object destructuring 🏁
   const Data = {
     fname : 'prakash',
     name : 'rawat',
     age : 20
   }

   //let age = Data.age;
   //let yourname = Data.name;
   //let firstname = Data.fname;

let {fname, name, age, degree="BCA"} = Data;
//console.log(yourname + firstname);
console.log(fname);
console.log(name);
console.log(age);
console.log(degree);

//**************************************************👍👍👍OBJECT PROPERTIES**********************************************
/*
   Object Properties 
   we can now use Dynamic Properties 
*/
       let myName = "PRAKASH";
       const myBio = {
         [myName] : "hello how are you?",
         [19 + 1] : "is my age"
       }

      console.log(myBio);

  // ➡ no need to write key and value, if both are same 

   let myName1 = "PRAKASH RAWAT";
   let myAge1 = 20;

   const my = {
     myName : myName1,
     myAge : myAge1
    }
   console.log(my);

//************************************FAT ARROW FUNCTION👍👍👍*************************************************** 
/*
   Fat Arror Function 
// 👻 Normal Way of writing Function  
*/
  console.log(sum()); 

 function sum()
  {
   let a = 15; b = 16;
   let sum = a+b;
  return `the sum of the two number is ${sum}`; //31
 }

// 👻 How to convert in into Fat Arrow Function 

const addi = () => `the sum of the two number is ${(a=5)+(b=6)}`;

 console.log(addi()); //11

//*****************************************👍👍👍SPREAD OPERATOR****************************************

//  Spread Operator

 const colors = ['red', 'green', 'blue', 'white', 'pink'];

 const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
 
// 2nd time add one more color on top and tell we need to write it again on myColor array too 

const MyFavColors = ['yellow', 'black', ...colors];
const FavColors = ['orange', 'grey', ...myColors];
console.log(MyFavColors);
console.log(FavColors);
