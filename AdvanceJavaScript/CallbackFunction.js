/*
A callback is a function passed as an argument to another function, This technique allows a function to call another function, it can run after another function has finished.
*/


const add = (num1, num2) => {
    return num1 + num2;
}

const calculator = (num1, num2, operator) =>
{
    return operator(num1,num2);
}
//const prakash = calculator(4,2,add);
//console.log(prakash); //6
console.log(calculator(4,9,add)); //13

// In above code, calculator is the HOF which accepts three arguments the third one beign the call back bcoz they are passed as an argument to another function.