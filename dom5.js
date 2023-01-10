//getelementsbytagname change the 5th element of the li tag even without same class name.
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold'; 
}


// // getelementsbyclassname does not change the 5th li tag element without the same class name.
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold'; 
// }