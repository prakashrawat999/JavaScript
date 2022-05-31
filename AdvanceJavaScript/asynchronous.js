// Synchronous JavaScript and ASynchronous JavaScript
//Synchronous : code runs in sequence this mean that each operation must wait for the previous one to complete before executing
const fun1 = () => {
    console.log("call function-1");
}
const fun2 = () => {
    console.log("call function-2");
    fun1();
    console.log("recall function-2 \n");
}
fun2();

//Output: 
//call function-2
//call function-1  
//recall function-2

//Asynchronous : code runs in parallel this mean that an operation can occur while another one is still being proccessed. 
const funct1 = () => {
    setTimeout
    ( 
        () => {
            console.log("call asynchronous function-1");
        }, 8000
    );
}
const funct2 = () => {
    console.log("call asynchronous function-2");
    funct1();
    console.log("recall asynchronous function-2");
}
funct2();

//Output:
//call asynchronous function-2  
//recall asynchronous function-2
//call asynchronous function-1