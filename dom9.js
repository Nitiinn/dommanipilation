var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
 // now form submit event to take submit action
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);



 // add items
 function addItem(e)
 {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    // create new li element
    var li = document.createElement('li');
    // add new class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    
    
    //for 2nd box
    var newItem2 = document.getElementById('decription').value;
    // create new li element
    var li2 = document.createElement('li');
    // add new class
    li2.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem2));




// Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);





  // create edit button
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn1 btn1-prime btn-sm float-right edit ';
  // Append text node
  editBtn.appendChild(document.createTextNode('edit'));
  // Append button to li
  li.appendChild(editBtn);
    itemList.appendChild(li);
 }



 function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }




//function for searching
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });




    //function for searching for text node 2
    var text2 = e.target.value.toLowerCase();
    // Get lis
    var items2 = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items2).forEach(function(item){
      var itemName = item.childNodes[1].textContent; // change in this line firstnode to childnode2
      if(itemName.toLowerCase().indexOf(text2) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }