document.addEventListener("DOMContentLoaded", () => {
  let formEl = document.querySelector("form")

  formEl.addEventListener("submit", createNewTask )

});


function createNewTask(event) { 
   event.preventDefault() 
   console.log("You are in the createnew task method")
   let taskDesc = document.getElementById("new-task-description").value
   addTodo(taskDesc)
}

function addTodo(taskDesc) {
    let listEl = document.createElement("li")
    let unordedList = document.querySelector("ul") 
    unordedList.appendChild(listEl)
    listEl.innerText = taskDesc
    let deleteButton = document.createElement("button")
    let editButton = document.createElement("button")
    listEl.appendChild(deleteButton)
    listEl.appendChild(editButton)
    deleteButton.innerHTML = "Delete Task"
    editButton.innerHTML = "Edit Task"
    deleteButton.addEventListener("click", deleteTask)
    editButton.addEventListener("click", editTask)
    event.target.reset()
}


function deleteTask(event){
  let deleteTask = event.path[1]
  deleteTask.style.display = 'none'; 
}

function editTask(event) {
  let taskText = event.path[1].firstChild.data
  taskText = 
}



