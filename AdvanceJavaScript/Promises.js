/*
"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code


👍 A Promise has four states 👍
💯 fulfilled: Action related to the promise succeeded.
💯 rejected: Action related to the promise failed.
💯 pending: Promise is still pending i.e. not fulfilled or rejected yet.
💯 settled: Promise has fulfilled or rejected.

Consumers: then, catch, finally

*/
let scam = new Promise(function(resolve, reject)
 {
    setTimeout
    (() =>
        {
            resolve("working done!"), 3000
        }
    );
 });
  
  // resolve runs the first function in .then
  scam.then(
    result => 
    {
        console.log(result); // shows "done!" after 3 second
    },
    error => 
    {
        console.log(error); // doesn't run
    }
  );



  //using also ProjectAPIusingfetch
/*
  const jokes = document.querySelector('#joke');
  const ids = document.querySelector('#ids');
  const jokebtn = document.querySelector('#button');

  const jokeg = () => {
      const setHeader = {
          headers: {
              Accept: "application/json"
          }
      }
      fetch('https://icanhazdadjoke.com', setHeader)
          .then((res) => res.json())
          .then((data) => {
              //jokes.innerHTML = data.status;
              jokes.innerHTML = `${data.joke}`;
              ids.innerHTML = `${data.id}`;
          }).catch((error) => {
              window.alert(error);
          })
  }
  jokebtn.addEventListener('click',jokeg);
  jokeg();
*/