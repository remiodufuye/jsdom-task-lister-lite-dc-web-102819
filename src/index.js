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
    // var uniqueNumber = new Date().getTime();
    // listEl.id = `task${uniqueNumber}`; 
    listEl.id = 'task1'; 
    listEl.innerText = taskDesc
    let deleteButton = document.createElement("button")
    listEl.appendChild(deleteButton)
    deleteButton.innerHTML = "Delete Task"
    deleteButton.addEventListener("click", deleteTask)
    event.target.reset()
}


function deleteTask(){
  let deleteTask = document.getElementById("task1") 
  deleteTask.style.display = 'none';
}


