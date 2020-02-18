let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {

    const todoElementBar = document.createElement("div");
    todoElementBar.classList.add("todo-element-bar");

    const divDate = document.createElement("div");

    const hDate = document.createElement("h6");
    hDate.setAttribute("id", "date");
    const date = new Date();
    const dateText = date.getDate + " " + date.getMonth + " " + date.getFullYear + " " + date.getHours + " " + date.getMinutes;
    hDate.innerHTML = dateText;

    const divTask = document.createElement("div");

    const task = document.createElement("div");
    task.classList.add("all-tasks");
    task.setAttribute("id", "tasks-all");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("all-tasks");
    deleteButton.setAttribute("id", "button-delete");
    deleteButton.title = "delete task";

    const iconDelete = document.createElement("i");
    iconDelete.classList.add("fas fa-trash-alt");

    deleteButton.appendChild(iconDelete);
    divDate.appendChild(hDate);
    divTask.appendChild(task);
    divTask.appendChild(deleteButton);
    todoElementBar.appendChild(divDate);
    todoElementBar.appendChild(divTask);
    todoList.appendChild(todoElementBar);
}

document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.querySelector("#todoList");
    const todoForm = document.querySelector("#todoForm");
    const todoSearch = document.querySelector("#todoSearch");


    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskInput = this.querySelector("#taskInput");
        if (taskInput.value !== "") {
            addTask(taskInput.value);
            taskInput.value = "";
        }


    });

});
