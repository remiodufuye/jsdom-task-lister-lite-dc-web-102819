document.addEventListener("DOMContentLoaded", () => {
  // your code here

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
    event.target.reset()

}


