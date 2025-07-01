const body = document.body;
const clockEl = document.getElementById("clock");
const greetingEl = document.getElementById("greeting");
const themeToggle = document.getElementById("theme-toggle");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll(".filter-btn");


const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let notes = JSON.parse(localStorage.getItem("notes") || "[]");

let currentFilter = "all";


function updateClockAndGreeting() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString();

    const hour = now.getHours();
    let greeting = "Good evening";
    if (hour >= 5 && hour < 12) greeting = "Good morning";
    else if (hour >= 12 && hour < 18) greeting = "Good afternoon";
    greetingEl.textContent = greeting;
}
updateClockAndGreeting();
setInterval(updateClockAndGreeting, 1000);

const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
    body.classList.add("dark");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    updateThemeIcon();
});
function updateThemeIcon() {
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

todoForm.addEventListener("submit", addTodo);
function saveToDo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function addTodo(e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) {
        return
    }
    todos.push({ id: Date.now(), text, completed: false });
    console.log(todos);
    todoInput.value = "";
    saveToDo();
    readTodo();
}
function checkBoxTodo(id) {
    const todo = todos.find((item) => item.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    saveToDo();
    readTodo();
}
function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    saveToDo();
    readTodo();
}
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        filterButtons.forEach((b) => b.classList.remove("bg-blue-500", "text-white"));
        btn.classList.add("bg-blue-500", "text-white");
        readTodo();
    });
});
function readTodo() {
    todoList.innerHTML = "";
    let todofilter = todos;
    if (currentFilter === "active") todofilter = todos.filter((t) => !t.completed);
    else if (currentFilter === "completed") todofilter = todos.filter((t) => t.completed);
    todofilter.forEach((todo) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded";

        //li.textContent = todo.text;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => checkBoxTodo(todo.id));

        const span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed) {
            span.classList.add("line-through", "opacity-60");
        }
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => deleteTodo(todo.id));

        li.append(checkbox, span, delBtn);
        todoList.appendChild(li);
    });
}

noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = noteInput.value.trim();
    if (!text) return;
    notes.push({ id: Date.now(), text });
    noteInput.value = "";
    saveNotes();
    readNote();
});

function deleteNote(id) {
    notes = notes.filter((n) => n.id !== id);
    saveNotes();
    readNote();
}

function readNote() {
    notesContainer.innerHTML = "";
    notes.forEach((note) => {
        const div = document.createElement("div");
        div.className = "relative p-4 bg-yellow-100 dark:bg-yellow-200 rounded shadow";

        const p = document.createElement("p");
        p.textContent = note.text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.className = "absolute top-1 right-1 text-sm hover:text-red-500";
        delBtn.addEventListener("click", () => deleteNote(note.id));

        div.append(p, delBtn);
        notesContainer.appendChild(div);
    });
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

readNote();
readTodo();