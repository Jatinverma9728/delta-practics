// ++++++++++++++++DOM++++++++++++++

//DOM (Document Object Model) ek programming interface hai jo HTML aur XML documents ke liye hota hai. Jab bhi ek webpage load hota hai, browser us page ka ek DOM Tree create karta hai, jisme HTML elements ko JavaScript se access aur modify kiya ja sakta hai.

// DOM ka Kaam Kya Hai?
// DOM ek tree structure me kaam karta hai jisme har element ek node hota hai. Iske through hum:
// ✅ HTML elements ko select kar sakte hain
// ✅ Elements ka content update kar sakte hain
// ✅ Naye elements add ya remove kar sakte hain
// ✅ CSS properties ko change kar sakte hain
// ✅ User ke events handle kar sakte hain (jaise click, hover, input, etc.)

// ++++++++++Selection++++++++++++++

// in JS there are many ways to select elements.

//getElementById()
//getElementsByClassName()
//getElementsByTagName()
//querySelector()
//querySelectorAll()
//parentNode, children, firstChild, lastChild, nextSibling, previousSibling

//+++++++getElementById()++++++++++++++++++++

//return the element as an object or null(if not found) by the element id

// document.getElementById("hello").innerText = "k hal h "; // dom me element ko acces kiya h by id and manipulate the innerText.

// ++++++++++++++getElemenysByClassName()++++++++++++++++++++++

//return the element as an HTML collection or empty collection (if not found)

//  document.getElementsByClassName("images")

// ++++++++++++++++getElementsByTagName++++++++++++++

//return the elements as an HTML Collection or empty collection(if not found)

// document.getElementsByTagName("h2")[1].style.backgroundColor = "green";

// +++++++++Query Selector+++++++++++++++

// allows us to use any css selector

//we can use this selectors for all like tages IDs Classes
// document.querySelector('p')
// document.querySelector('.container')
// document.querySelector('#about')
// document.querySelectorAll("nav a")

//+++++++++++USING PROPERTIES & METHODS++++++++++++++++++

//innerText - shows the visible text contained in a node
//textContext - shows all the full text
// innerHTML - shows the full markup

// ++++++++++++++++++==maipulating attribute +++++++++++++

// let heading = document.querySelector('h1');
// heading.getAttribute('id') // abhi kuch nhi aayega kyu ki heading me koi bhi id nhi h

// heading.setAttribute('id','id-h-ye') // ab hum iss me id dalnge by setAttribute. iss me phele to bo h jo attribute dalna h jese id,class. and jo second wala h vo h ki attrribute ki value kya hogi.

// console.log(heading.getAttribute("id")); // id h ye print hoga/ or iss heading ki ab ek id bhi hogyi h jo h ' id-h-ye ' , ab iss ke sath kuch bhi krsakte h

// +++++++++change styling with dom+++++++++++=

// let links = document.querySelectorAll("nav a");
// for (link of links) {
//   link.style.color = "yellow"; //inline styling
// }

// ++++++++++Maipulating style+++++++++++++++

//using classList

// abc.classList

// classList.add() // add class by adding name in perenthesis
// let heading = document.querySelector("h1");
// heading.classList.add("mainHeading",'underline'); // add class in html dyanamicaly

//classList.remove() // remove class by adding name in perenthesis
// heading.classList.remove('underline') // remove class

//classList.contains() // to check if class exists
// heading.classList.contains('underline') // false
// heading.classList.contains('mainHeading') // true

// classList.toggle() to toggel between add and remove

// heading.classList.toggle('green') // kya krta h ? ye krta h ki agr koi class h to use hta dega nhi h to add krdega. output boolean hoga

// +++++++++++++++NAVIGATION+++++++++++++++++
// iss ki help se hum el element se dusre element pr ja sakete h

//parentElement
//children
//previousElementSibling / nextElementSibling

// let doc = document.querySelector(".container");

// ++++++++++++Adding elements +++++++++++++++

// let newP = document.createElement("P");
// newP.innerText = "hi im a new paragraph";

// ye element ko bna to dega but html me insert nhi kre ga to uske liye hume in ka use krna hoga

//appendChild(element)
//append(element)
//prepend(element)
// insertAdjecent(where,element)

// let body = document.querySelector('body')
// body.appendChild(newP)// add kr dega element ko but sabse last me
// body.append(newP) // ye bhi last me add krega but iss me kuch bhi append kr sakte h like string text
// body.prepend(newP) // sabse uper add krega
// body.insertAdjacentElement(position,element)// position kese denge to use hum 4 types se de sakte h. 1. Beforbegin, 2. afterbegin, 3.beforeend, 4.afterend

// let btn = document.createElement("button");
// btn.innerText = "click me";
// let cont = document.querySelector(".container");
// cont.appendChild(btn);

// let newBtn = document.createElement("button");
// newBtn.innerText = "NEW BUTTON";
// let hero = document.querySelector(".hero");
// hero.insertAdjacentElement("beforebegin", newBtn);
// hero.insertAdjacentElement("afterbegin", newBtn);
// hero.insertAdjacentElement("afterend", newBtn);
// hero.insertAdjacentElement("beforeend", newBtn);

// +++++++++++remove element++++++++++++++++

//removerChild()
//remove()

// ++++++++practics questionn++++++++++

// add the following elements to the container using only javascript and DOM methods.

// i.) a <p> with red text says "hey im red!"
// ii.) an h3 with blue text says "hey im blue h3!"
// iii.) a div with a black border and pink backgroud color with the follwing of it:- another h1 says i into a adiv. a p says "me too"

// let para1 = document.createElement("p");
// para1.innerText = "hey im red!";
// para1.style.color = "red";

// let h3 = document.createElement("h3");
// h3.innerText = "Hey im blue h3!";
// h3.style.color = "blue";

// let div = document.createElement("div");
// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";
// div.style.height = "100px";

// let newH1 = document.createElement("h1");
// newH1.innerText = "im in a div";
// let para2 = document.createElement("p");
// para2.innerText = "me too";
// div.append(newH1, para2);

// document.querySelector("body").append(para1, h3, div);

//++++++++++assignment question+++++++++++++++

//Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
let body = document.querySelector("body").append(input, btn);


//Qs2. Add following attributes to the element : Change placeholder value of input to "username" Change the id of button to "btn' 

input.setAttribute('placeholder','username')
btn.setAttribute('id','buttonId')

//Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white. 

let btnid= document.getElementById('buttonId')
btnid.style.backgroundColor = "blue";
btnid.style.color = "white";


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple. 

let h1= document.createElement('h1');
h1.innerText='DOM Practice';

body.append(h1)