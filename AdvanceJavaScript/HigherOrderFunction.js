// 👍 A function that accepts and/or returns another function is called a higher-order function.
// 👍 Function which take another function as argument is called HOF.

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


//👍Object : 
getName = (obj) => 
{
    return obj.Name;
}

result = getName({
  Name: 'prakash_rawat'
});

console.log(result); // prakash_rawat

//Boolean 👍
Clearance = (allow) => (allow ? 'Access granted' : 'Access denied');

result1 = Clearance(true);
result2 = Clearance(false);

console.log(result1); // 'Access granted'SS