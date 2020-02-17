let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    const todo = document.createElement("div");
    todo.classList.add("all-tasks");

    const todoBar = document.createElement("div");
    todoBar.classList.add("todo-element-bar");

    const todoDate = document.createElement("div");
    todoDate.classList.add("todo-element-bar");
    const date = new Date();
    // const dateText = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()} godz.: ${date.getHours()}
    todoDate.innerText = dateText;

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("#button-delete");
    todoDelete.classList.add("button")
    todoDelete.innerHTML = "<i class="fas fa - trash - alt"></i>";


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
}