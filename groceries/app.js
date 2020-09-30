// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// SUBMIT FORM
form.addEventListener("submit", addItem);
// CLEAR ITEMS
clearBtn.addEventListener("click", clearItems);
// LOAD ITEMS
window.addEventListener("DOMContentLoaded", setupItems);
const deleteBtn = document.querySelector(".delete-btn");
console.log;
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  //   if (value) {
  //     console.log("value is none");
  //   }
  const id = new Date().getTime().toString();
  //   console.log(id);
  if (value && !editFlag) {
    createListItem(id, value);
    // DISPLAY ALERT
    displayAlert("item added to the list", "danger");
    // SHOW CONTAINER
    container.classList.add("show-container");
    // ADD TO LOCAL STORAGE
    addToLocalStorage(id, value);
    // SET BACK TO DEFAULT
    setBackToDefault();
  } else if (value && editFlag) {
    // console.log("editing");
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // EDIT LOCAL STORAGE
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// DISPLAY ALERT
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //   REMOVE ALERT
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// CLEAR ITEMS
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}
// DELETE FUNCTION
function deleteItem(e) {
  // console.log("item deleted");
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item remove", "danger");
  setBackToDefault();
  //   REMOVE FROM LOCAL STORAGE
  removeFromLocalStorage(id);
}
// EDIT FUNCTION
function editItem(e) {
  //   console.log("item edited");
  const element = e.currentTarget.parentElement.parentElement;
  // SET EDIT ITEM
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // SET FORM VALUE
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}
// SET BACK TO DEFAULT
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  //   console.log(grocery);
  let items = getLocalStorage();
  //   console.log(items);

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// LOCAL STORAGE API
// SET ITEM
// GET ITEM
// REMOVE ITEM
// SAVE AS STRINGS
// localStorage.setItem("orange", JSON.stringify(["item1", "item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange");
// console.log(oranges);
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  // ADD CLASS
  element.classList.add("grocery-item");
  // ADD ID
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn" type="button">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn" type="button">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  // APPEND CHILD
  list.appendChild(element);
}
