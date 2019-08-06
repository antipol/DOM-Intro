console.dir(document); //to get full document
console.log(document.domain); //to get domain
console.log(document.URL); //to get full URL
console.log(document.title); //get title
document.title = 123 //changes title of the website
console.log(document.doctype); //returns doctype eg html
console.log(document.head); //info about html head
console.log(document.body); //get body
console.log(document.all); //get all
console.log(document.all[10]); //get all -> element 10
console.log(document.all[10].textContent = 'penguin'); //get all -> element 10 -> change text to penguin
console.log(document.forms); //to get all forms
console.log(document.links); //get all links
console.log(document.images); //get all images


//get element by id
console.log(document.getElementById('header-title')); //target an HTML element by using the ID
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
headerTitle.textContent = 'Polar bear'; //text content only changes text content
console.log(headerTitle); //changes penguin to polar bear
headerTitle.innerHTML = '<h3>Iceberg</h3>'; //changes header to h3 and changes content
header.style.borderBottom = 'dotted 20px pink'; //creates a border on the bottom of main header


//get elements by class name
let items = document.getElementsByClassName('list-group-item');
console.log(items[2]); //to get element 2 (0 based index)
items[1].textContent = 'words'; //changes 'item 2' to 'words'
items[1].style.backgroundColor = 'lightblue';
items[1].style.fontWeight = 'bold';

// items.style.color = 'green'; //doesn't work, error: Cannot set property 'color' of undefined
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'lightblue';
}


// get elements by tag name
let li = document.getElementsByTagName('li');
li[0].style.color = 'hotpink';

//instead of for loop, use higher order function and spread operator
[...li].map(x => x.style.color = 'orangered'); //turns all li items to orangered


//Query selector
//use only for 1 item
let header2 = document.querySelector('#main-header');
header2.style.borderTop = 'solid 20px hotpink';

let input = document.querySelector('input');
input.value = 'This is the first input element';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'this is the submit button'; //use value instead of textContent, input elements don't have textContent, value is an attribute

let item2 = document.querySelector('.list-group-item');
item2.style.border = 'solid 5px black'; //changes border only first list item (targeted with use of class)

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.border = 'dotted 5px yellow'; //changes border on third list element


//Query selector all
let titles = document.querySelectorAll('.title');
titles[0].textContent = 'cat'; // changes first title to cat
[...titles].map(x => x.textContent = 'dog') //changes all titles to dog

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
[...odd].map(item => item.style.backgroundColor = 'chartreuse');
[...even].map(item => item.style.backgroundColor = 'yellow');
//or
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'turquoise';
  even[i].style.backgroundColor = 'chartreuse';
}


//Traversing the DOM
//= navigating up and down the DOM tree

let = itemList = document.querySelector('#items'); //ul element with id 'items'
//parent element
console.log(itemList); //shows the specific element
console.log(itemList.parentElement); //shows the parent of that element
itemList.parentElement.style.backgroundColor = 'orange'; //changes parent element background color to orange
console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
console.log(itemList.children); //to show children of itemList
console.log(itemList.children[2]); //to access third child
itemList.children[3].style.fontWeight = 'bold'; //changes third child of itemList


// first element child
console.log(itemList.firstElementChild); //access first child (first li) of itemList (ul -> li)
itemList.firstElementChild.textContent = 'many words'; //changes text in first child in the ui (itemList)


//last element child
itemList.lastElementChild.textContent = 'so many words'; //changes last child of itemList


//next element sibling
itemList.nextElementSibling.style.backgroundColor = 'red'; //targets next sibling of the ul (itemList)


//previous element sibling
itemList.previousElementSibling.style.backgroundColor = 'blue'; //targets previous sibling of the ul (itemList)



//create element

//create div
let newDiv = document.createElement('div');
newDiv.className = 'hello'; //assign class name
newDiv.id = 'helloID'; //assign id
newDiv.setAttribute('title', 'Hello Div'); //to add attribute and value

//create text node
let newDivText = document.createTextNode('Hello');

//add text to div from text node
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '22px';
container.insertBefore(newDiv, h1);

console.log(newDiv);


// .closest
//returns the closest ancestor that matches the specified search string
// can also return itself or null
let ulItems = document.getElementById('items');
console.log(ulItems.closest('div')); //return div with the id main


// .matches (BOOLEAN)
//similar to includes(), returns boolean
//to find out if the specified element has e.g. a class matching the search word
console.log(ulItems.matches('.item')); //false
console.log(ulItems.matches('.list-group')); //true





//
