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
    listEl.id = `task${Math.random().round()}`;
    listEl.innerText = taskDesc
    let deleteButton = document.createElement("button")
    listEl.appendChild(deleteButton)
    deleteButton.innerHTML = "Delete Task"
    deleteButton.addEventListener("click", deleteTask)
    event.target.reset()
}


function deleteTask(){

}

// button.addEventListener ("click", function() {
//   alert("did something");
// });

