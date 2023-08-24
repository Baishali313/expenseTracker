var count=1; //id
function submitForm(event) {
    event.preventDefault();
   
    addListItem();
    
    
  }


function addListItem(){

   
    const ulElement= document.getElementById("l");
    const newitemList=document.createElement("li");

    newitemList.textContent=document.getElementById("expenseAmount").value+"-"+ document.getElementById('description').value+"-"
    +document.getElementById('category').value;
    ulElement.appendChild(newitemList);

    const editbtn=document.createElement('button');
    const deletebtn=document.createElement('button');
  
    editbtn.textContent="Edit Expenses";

    deletebtn.textContent='Delete Expenses';
    newitemList.appendChild(editbtn);
    editbtn.classList.add('editButton');
    newitemList.appendChild(deletebtn);
    deletebtn.classList.add("deleteButton");


    editbtn.addEventListener("click", function() {
        ulElement.removeChild(newitemList);
        localStorage.removeItem(user.id);
        document.getElementById("expenseAmount").value= obj.amoount;
        document.getElementById('description').value=obj.description;
        document.getElementById('category').value=obj.category;
    });

    deletebtn.addEventListener("click",function(){
        ulElement.removeChild(newitemList);
        localStorage.removeItem(user.id);
    });
   
    const amount = document.getElementById("expenseAmount");
    const desc = document.getElementById("description");
    const category = document.getElementById("category");
    var user={
        id:count++,
        amount: amount.value,
        description:desc.value,
        category:category.value
    }
    var userJSON= JSON.stringify(user);
    localStorage.setItem(user.id, userJSON);


   
    
   
}




