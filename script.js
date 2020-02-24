let todoList = null;
let todoForm = null;
let todoSearch = null;
let doneList = null;

function addTask(text) {
    const date = new Date();
    const dateText = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

    todoList.innerHTML = `
    <div class="todo-element-bar">
        <div>
            <h6 id="date">${dateText}</h6></div>
        <div>
            <input class="all-tasks" type="checkbox" id="done-checkbox">
            <div class="all-tasks" id="tasks-all">${text}</div>
            <button class="all-tasks" id="button-delete" title="delete task">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
    ` + todoList.innerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
    todoList = document.querySelector("#todoList");
    const todoForm = document.querySelector("#todoForm");
    const todoSearch = document.querySelector("#todoSearch");
    doneList = document.querySelector(".done-tasks");


    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskInput = this.querySelector("#taskInput");
        if (taskInput.value !== "") {
            addTask(taskInput.value);
            taskInput.value = "";
        }


    });


    todoList.addEventListener("click", function (e) {
        if (e.target.closest("#button-delete") !== null) {
            e.target.closest(".todo-element-bar").remove();
        }


    });


    todoList.addEventListener("click", function (e) {
        if (e.target.closest("#done-checkbox") !== null) {
            document.querySelector('.done-tasks').appendChild(
                e.target.closest('.todo-element-bar')
            );

        }

    })

    todoSearch.addEventListener("input", function (e) {
        const valueText = this.value;
        const allElements = todoList.querySelectorAll(".todo-element-bar");

        allElements.forEach(element => {
            const text = element.querySelector("#tasks-all").innerText;

            if (text.indexOf(valueText) !== -1) {
                element.style.setProperty("display", "");

            } else {
                element.style.setProperty("display", "none");
            }

        });


    });


});




