//   https://restcountries.com/#api-endpoints-v2-capital-city

// AJAX Call using XMLHttprequest 

// how to handled with the events and callback 

// XMLHttpRequest (XHR) objects are used to interact with servers. 
// You can retrieve data from a URL without having to do a full 
// page refresh. This enables a Web page to update just part 
// of a page without disrupting what the user is doing. 
// XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// we need to call the api or request the api using GET method ki, me jo url pass kar kr rha hu uska data chaiye 

// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to  add the event to load the data adn get it

/* To get the response 
    request.addEventListener("load", () => 
    {
    console.log(this.responseText); 
    });
*/

/*
<div id="container"></div>
<script>
  const container = document.querySelector('#container');
        const request = new XMLHttpRequest();
        request.open('GET',"https://restcountries.com/v2/callingcode/91");
        //request.open('GET',"https://restcountries.com/v2/name/india");
        request.send();
        console.log(this.responseText);

    //To get response..

        request.addEventListener('load', function()
        {
            //console.log( this.responseText);
            const [data] = JSON.parse(this.responseText);
            console.log(data);
            console.log(data.capital);
            const htmlData = `
                    ${data.name};
                    ${data.nativeName};
                    ${data.timezones};
                    ${data.demonym};
                    ${data.capital};
                    ${data.alpha3Code}; 
                    ${data.population};
                    ${data.region};
                    ${data.numericCode};
                    ${data.subregion};
            `;
            container.insertAdjacentHTML("afterbegin",htmlData)
        })
</script>
*/

/* insertAdjacentHTML()  method of the element interface parses the specified text as HTML or XML and inserts the
   resulting nodes into the DOM tree at a specified position.
   it much faster than innerHTML manipulation bcoz it does not reparse the element it is being used on and thus it
   does not corrupt the existing elements inside that element.

   element.insertAjacentHTML(position, text);

   beforebegin : Before the element itself.
   afterbegin : Just inside the element, before its first child.
   beforeend : Just inside the element, after its first child.
   afterend : After the element itself.

   <!-- beforebegin -->
   <p>
   <!-- afterbegin -->
     any sentence
   <!-- beforeend -->
   <p>
   <!-- afterend-->

   the beforebegin and afterend position work only if the node is in the DOM tree and has a parent element.
*/
