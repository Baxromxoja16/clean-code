"use strict";
const addLabel = document.querySelector(".add-label");
const todoMain = document.querySelector(".todo-main");
const add = document.querySelector("#add");
const valueArr = [];

// create element
if (localStorage.getItem("value")) {
  const storage = JSON.parse(localStorage.getItem("value"));
  storage.forEach((x) => {
    valueArr.push(x);
    todoMain.innerHTML += `
    <div class="todo-item">
        <input type="checkbox" id="">
        <div class="edit-box">
          <span class="write">${x}</span>
          <label class="edit" for="">Edit</label>
        </div>
        <i class="delete-todo fa-regular fa-circle-xmark"></i>
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
            <div class="edit-box">
              <span class="write">${add.value}</span>
              <label class="edit" for="">Edit</label>
            </div>
            <i class="delete-todo fa-regular fa-circle-xmark"></i>
        </div>
        `;

    valueArr.push(add.value);

    localStorage.setItem("value", JSON.stringify(valueArr));

    add.value = "";

    const edit = document.querySelectorAll(".edit");

    edit.forEach((element) => {
      element.addEventListener("click", editHandler);
    });
  }

  // delete element
  const deleteIcon = document.querySelectorAll(".delete-todo");
  deleteIcon.forEach((element) => {
    element.addEventListener("click", deleteHandler);
  });

  function deleteHandler(param) {
    this.parentNode.style.display = "none";
  }
}

// edit element
let edit = document.querySelectorAll(".edit");
const span = document.querySelector(".write");

edit.forEach((element) => {
  element.addEventListener("click", editHandler);
});

function editHandler() {
  this.parentNode.innerHTML = `
    <input class="save-input" type="text" id="" value="${this.parentNode.childNodes[1].innerHTML}">
    <label class="save" for="">Save</label>
  `;

  const save = document.querySelector(".save");
  const saveInput = document.querySelector(".save-input");

  save.addEventListener("click", saveHandler);

  function saveHandler(e) {
    this.parentNode.innerHTML = `
    <span class="write">${saveInput.value}</span>
    <label class="edit" for="">Edit</label>
  `;

    edit = document.querySelectorAll(".edit");
    edit.forEach((element) => {
      element.addEventListener("click", editHandler);
    });
  }
}
