const addLabel = document.querySelector(".add-label");
const todoMain = document.querySelector(".todo-main");
const add = document.querySelector("#add");
const valueArr = [];

// create input for edit
const createInput = document.createElement("input");
createInput.type = "text";

if (localStorage.getItem("value")) {
  const storage = JSON.parse(localStorage.getItem("value"));
  storage.forEach((x) => {
    valueArr.push(x);
    todoMain.innerHTML += `
    <div class="todo-item">
        <input type="checkbox" id="">
        <span class="write">${x}</span>
        <label class="edit" for="">Edit</label>
        <i class="fa-regular fa-circle-xmark"></i>
    </div>
    `;
  });
}

addLabel.addEventListener("click", addHandler);

function addHandler(event) {
  if (add.value !== "") {
    todoMain.innerHTML += `
        <div class="todo-item">
            <input type="checkbox" id="">
            <span class="write">${add.value}</span>
            <label class="edit" for="">Edit</label>
            <i class="fa-regular fa-circle-xmark"></i>
        </div>
        `;

    valueArr.push(add.value);

    localStorage.setItem("value", JSON.stringify(valueArr));

    add.value = "";
    
    // const edit = document.querySelectorAll(".edit");

    // edit.forEach((element) => {
    //   console.log(element);
    //   element.addEventListener("click", editHandler);
    // });
  }
}

// const edit = document.querySelectorAll(".edit");

// edit.forEach((element) => {
//   element.addEventListener("click", editHandler);
// });

// function editHandler() {
//   createInput.value;
//   this.parentNode.removeChild(this.parentNode.children[1]);
//   this.parentNode.replaceChild(createInput, this.parentNode.children[1]);
//   console.log();
// }
