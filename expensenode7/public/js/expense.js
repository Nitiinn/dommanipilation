
  async function addNewExpense(e) {
    try{
  e.preventDefault();

  const expenseDetails = {
    
    description: e.target.description.value,
    catagory: e.target.catagory.value,
    amount: e.target.amount.value
  };

  console.log("string",expenseDetails);
 const response= await axios.post("http://localhost:3000/get/addExpense", expenseDetails)
     addNewExpenseToUI(response.data.message);
      console.log("ressss",response.data);

      
    
  }catch(err){
            document.body.innerHTML += `<div style = "color:red;">${err}</div>` 
}

  }

  


window.addEventListener("load", () => {
 axios.get("http://localhost:3000/get/expense")
    .then((response) => {
      if (response.status === 200) {
        console.log("addevent",response.data)
        response.data.forEach((Expense) => {
          addNewExpenseToUI(Expense);
        });
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

function addNewExpenseToUI(Expense) {
  console.log("add new",Expense);
  const parentElement = document.getElementById("listofexpense");
  const expenseElemId = `Expense-${Expense.id}`;
  parentElement.innerHTML += `
    <li id=${expenseElemId}> 
    ${Expense.description} - ${Expense.catagory} - ${Expense.amount}
    <button onclick='deleteExpense(event, ${Expense.id})'>
    Delete Expense
    </button>
    </li>`;
}


function deleteExpense(e,expenseid)
{
  
  axios.get(`http://localhost:3000/get/deleteExpense/${expenseid}`).then((response)=>{
    removeExpenseFromUI(expenseid);
  }).catch((err=>{
    console.log(err);
  }))
}

function removeExpenseFromUI(expenseid)
{
  const expenseElemId = `Expense-${expenseid}`
  document.getElementById(expenseElemId).remove();
}
