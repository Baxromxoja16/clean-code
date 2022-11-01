// Create elements
const newTask = document.querySelector("#new-task");
const taskRowWrapper = document.querySelector(".task-row-wrapper button");
const incompleteTasks = document.getElementById("incompleteTasks");
const completedTasks = document.getElementById("completed-tasks");

// Event handling
taskRowWrapper.addEventListener("click", addTask);

// Create tags
function createNewTaskTags(labelText) {
  let listTask = document.createElement("li");
  // input chechbox
  let inputCheckBox = document.createElement("input");
  // label
  let label = document.createElement("label");
  // input text
  let inputCheckText = document.createElement("input");
  // button.edit
  let btnEdit = document.createElement("button");

  // delete button
  let deleteBtn = document.createElement("button");
  let deleteBtnImg = document.createElement("img");

  inputCheckBox.type = "checkbox";

  label.innerText = labelText;
  label.className = "task";

  inputCheckText.type = "text";
  inputCheckText.className = "task";
  inputCheckText.value = labelText

  btnEdit.className = "edit";
  btnEdit.innerText = "Edit";

  deleteBtn.className = "delete";
  deleteBtnImg.src = "./remove.svg";

  deleteBtn.appendChild(deleteBtnImg);

  // appending
  listTask.appendChild(inputCheckBox);
  listTask.appendChild(label);
  listTask.appendChild(inputCheckText);
  listTask.appendChild(btnEdit);
  listTask.appendChild(deleteBtn);

  return listTask;
}

function addTask() {
  if(!newTask.value) return

  let taskValue = createNewTaskTags(newTask.value)
  incompleteTasks.appendChild(taskValue)

  bindTasks(taskValue,checkTaskTrue)

  newTask.value = ""
}

function editTask() {

  let listItem = this.parentNode

  let editInput = listItem.querySelector("input[type=text]")
  let editLabel = listItem.querySelector("label")
  let editBtn = listItem.querySelector("button.edit")
  
  if(editBtn.innerText === "Edit"){
    editBtn.innerText = "Save"
  }else{
    editBtn.innerText = "Edit"
    editLabel.innerText = editInput.value
  }

  // add class(editMode) to tag li 
  listItem.classList.toggle("editMode")
}

function deleteTask() {
  this.parentNode.remove()
}

// checkbox true
function checkTaskTrue() {
  let listItem = this.parentNode
  completedTasks.appendChild(listItem)
  bindTasks(listItem,checkTaskFalse)
}

// checkbox false
function checkTaskFalse() {
  let listItem = this.parentNode
  incompleteTasks.appendChild(listItem)
  bindTasks(listItem,checkTaskTrue)
}

let bindTasks = function (taskItemList,checkTask) {
  //edit task handler
  taskItemList.children[3].onclick=editTask

  // delete task handler
  taskItemList.children[4].onclick=deleteTask

  // check task handler
  taskItemList.children[0].onchange=checkTask
}

for (let i = 0; i < incompleteTasks.children.length; i++) {
  bindTasks(incompleteTasks.children[i],checkTaskTrue);
}

for (let i = 0; i < completedTasks.children.length; i++) {
  bindTasks(completedTasks.children[i],checkTaskFalse);
}

