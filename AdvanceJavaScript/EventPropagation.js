/*
Event Propagation mode determines in which order the element receive the event.

Two ways:
👍 Event Bubbling (default) Bottom to top :

💯 with event bubbling the event is first captured and handled by innermost element and the propagation to outermost.

Code:
<div class="parent">
    <div class="child"></div>
</div>

<script>
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');

    const parentcall = () =>{
        alert("parent call");
    }

    const childcall = () =>{
        alert("child call");
    }

    parent.addEventListener('click',parentcall,false);
    child.addEventListener('click',childcall,false);
</script>

👍 Event Capturing (top to bottom) :

💯In the capturing phase, events propagate from the Window down through the DOM tree to the target node.
🎱Example : if the user clicks a hyperlink, that click event would pass through the <html> element, the <body> element, and the <p> element containing the link.

Code : 

<div id="wrap">DIV
    <p class="hint">P
        <a href="#">A</a>
    </p>
</div>

    function showTagName() {
        alert("Capturing: "+ this.tagName);
    }
    
    var elems = document.querySelectorAll("div, p, a");
    for(let elem of elems) {
        elem.addEventListener("click", showTagName, true); // true use for capturing phase false for bubbling(default)
    }

    image.png

*/