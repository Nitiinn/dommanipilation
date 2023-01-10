// parentelement
 var itemlist = document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'green';
// console.log(itemlist.parentElement.parentElement.parentElement);

// last elementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello world';

// first elementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'hello firstelement';

//last child
//console.log(itemlist.lastChild);

//first child
//console.log(itemlist.firstChild);

//next sibling
//console.log(itemlist.nextSibling);

//nextelementsibling
// console.log(itemlist.nextElementSibling);

// previoussibling
// console.log(itemlist.previousSibling);

//previouselemwntsibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'red';

// create a element
 var newdiv = document.createElement('div');

// // add class
 newdiv.className = 'hello class';

// // add id
 newdiv.id = 'hello1';

// // add attr
 newdiv.setAttribute('title','hello attribute');

// // create text node
 var newdivtext = document.createTextNode('HEllo');

// // add text to div
// newdiv.appendChild(newdivtext);
// var container = document.querySelector('header .container' );
// var h1 = document.querySelector('header h1');
// console.log(newdiv);
// container.insertBefore(newdiv,h1);

// add element before items
parentnode = document.getElementById('items');
console.log(parentnode);
parentnode.innerHTML = '<li class="list-group-item">Item 1</li> <li class="list-group-item">Item 2</li> <li class="list-group-item">Item 3</li> <li class="list-group-item">Item 4</li>'
parentnode.innerHTML = '<li> hello world </li>' + parentnode.innerHTML;