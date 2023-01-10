// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// document.title=123;              // manipulate the header of the title.
// console.log(document.doctype);

var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'hello';
// headertitle.innerText = 'goodbye';
header.style.borderBottom = 'solid 3px #000';
var additemsbold = document.getElementsByClassName('title');
additemsbold[0].style.fontWeight = 'bold';
additemsbold[0].style.color = '#008000';
console.log(additemsbold);


