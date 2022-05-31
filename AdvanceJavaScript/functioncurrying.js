// ---- Function Currying ----

/*when a function, instead of taking all arguments at one time, takes the first one and return 
a new function that takes the second one and returns a new function which takes the third one, 
and so forth, until all arguments have been fulfilled.*/

function sum(num1)
{
    console.log(num1); //5
    return function(num2)
    {
        console.log(num1+num2); //12
        return function(num3)
        {
            console.log(num1+num2+num3); //21
        }        
    }
}
sum(5)(7)(9);
//sum(5,4,3);

//Another method using fat arrow function
const addition = (n1) => (n2) => (n3) => console.log(`fat arrow function : ${n1+n2+n3}`); 
addition(5)(9)(8); //output : fat arrow function : 22
