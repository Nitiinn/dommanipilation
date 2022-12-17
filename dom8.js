var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
 // now form submit event to take submit action
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
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
  editBtn.className = 'btn btn-prime btn-sm float-right edit ';

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

 








