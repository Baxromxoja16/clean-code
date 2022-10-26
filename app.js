// Create elements
const newTask = document.querySelector("#new-task");
const taskRowWrapper = document.querySelector(".task-row-wrapper");
const tableList = document.querySelector("#incompleteTasks");
const editBtn = document.querySelectorAll(".edit");

// Event handling, user interaction is what starts the code execution.
taskRowWrapper.childNodes[1].addEventListener("click", addHandler);
editBtn.forEach((x) => {
  x.addEventListener("click", editHandler);
});

// add task
function addHandler(e) {
  e.preventDefault();
  // Validation
  if (newTask.value !== "") {
    // create list 
    tableList.innerHTML += `
    <li>
      <input type="checkbox">
      <label class="task">${newTask.value}</label>
      <input type="text" class="task" value=""${newTask.value}>
      <button class="edit">Edit</button>
      <button class="delete"><img src="./remove.svg"></button>
    </li>
    `;
  }
}

// edit task
function editHandler() {
  let listItem = this.parentNode;
  const taskLabel = listItem.querySelector(".task");
  const taskInput = listItem.querySelector("input[type=text]");

  if (this.textContent === "Save") {
    // change input
    taskLabel.style.display = "block";
    taskLabel.textContent = taskInput.value;
    taskInput.style.display = "none";
    // change btn text
    this.textContent = "Edit";
  } else if ("Edit") {
    // change input
    taskLabel.style.display = "none";
    taskInput.style.display = "block";
    // change btn text
    this.textContent = "Save";
  }
}
