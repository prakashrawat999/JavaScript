/*
This is a big issue caused by coding with complex nested callbacks. 
Here, each and every callback takes an argument that is a result of the previous callbacks.
In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
*/

setTimeout(() => {
    console.log(`1️⃣ works is done`);
    setTimeout(() => {
        console.log(`2️⃣ works is done`);
        setTimeout(() => {
            console.log(`3️⃣ works is done`);
            setTimeout(() => {
                console.log(`4️⃣ works is done`);
                setTimeout(() => {
                    console.log(`5️⃣ works is done`);
                    setTimeout(() => {
                        console.log(`6️⃣ works is done`);
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

//output:
//1️⃣ works is done
//2️⃣ works is done
//3️⃣ works is done
//4️⃣ works is done
//5️⃣ works is done
//6️⃣ works is done