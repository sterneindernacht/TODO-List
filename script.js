let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    console.log("I'm adding new task to the list")
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