var ToDoList;

function List() {
    this.tasks = [];
}

List.prototype.addTask = function (task) {
    this.tasks.push(task);

    const Http = new XMLHttpRequest();
    const url = '/api/task/add';
    Http.open("POST", url);
    Http.send('list=' + task);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

List.prototype.doTask = function (taskId) {
    this.tasks = this.tasks || [];
    for (let index = 0; index < this.tasks.length; index++) {
        const id = 'task' + this.tasks[index].id;
        if (id == taskId) {
            this.tasks[index].do();
            return true;
        }
    }
    return false;
}

List.prototype.undoTask = function (taskId) {
    this.tasks = this.tasks || [];
    for (let index = 0; index < this.tasks.length; index++) {
        const id = 'task' + this.tasks[index].id;
        if (id == taskId) {
            this.tasks[index].undo();
            return true;
        }
    }
    return false;
}

// List.prototype.save = function () {
//     localStorage.setItem('ToDoList', JSON.stringify(this));
// }


window.idCounter = 0;

function Task(_title, _isDone = false) {

    this.id = idCounter++;
    this.title = _title;
    this.isDone = _isDone;
}


Task.prototype.do = function () {
    this.isDone = true;
}

Task.prototype.undo = function () {
    this.isDone = false;
}

function load() {
    var todos = localStorage.getItem('ToDoList');
    todos = todos && JSON.parse(todos);
    var todoTasks = todos && todos.tasks;
    todoTasks = todoTasks || [];
    ToDoList = new List();
    for (let index = 0; index < todoTasks.length; index++) {
        const elem = todoTasks[index];
        ToDoList.addTask(new Task(elem.title, elem.isDone))
    }
}

function save() {
    localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
}

// var saveInterval = window.setInterval(save, 200);

function showTasks() {
    var tasks = ToDoList.tasks;
    if (!tasks) {
        return false;
    }
    for (let index = 0; index < tasks.length; index++) {
        const elem = tasks[index];
        showTask(elem);
    }
}

function showTask(elem) {
    if (!elem) {
        return false;
    }
    var listDiv = document.getElementById('list');

    var newDiv = document.createElement("div");
    newDiv.classList.add('task');
    newDiv.id = "div" + elem.id;

    var newInput = document.createElement("input");
    newInput.type = 'checkbox';
    newInput.id = 'task' + elem.id;
    newInput.setAttribute('onchange', "checkTask(this.id);");
    newInput.checked = elem.isDone;

    var newLabel = document.createElement("label");
    newLabel.setAttribute('for', newInput.id);
    newLabel.innerHTML = elem.title;
    newLabel.style.textDecoration = elem.isDone ? "line-through" : '';

    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);

    listDiv.appendChild(newDiv);
    return true;
}

function init() {
    load();
    showTasks();
    save();
}

function checkTask(taskId) {
    var elem = document.getElementById(taskId);
    if (elem.checked) {
        ToDoList.doTask(taskId);
        elem.nextElementSibling.style.textDecoration = "line-through";
    }
    else {
        ToDoList.undoTask(taskId);
        elem.nextElementSibling.style.textDecoration = "";
    }
    save();
}

function addTask(input) {
    if (!input || !input.value) {
        return false;
    }
    console.log(input.value);
    var newTask = new Task(input.value);
    ToDoList.addTask(newTask);
    showTask(newTask);
    input.value = "";
    save();
}



