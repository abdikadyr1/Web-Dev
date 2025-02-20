const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const listContainer = document.getElementById('list-container');


function addTask() {
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
    }
    else {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        listContainer.appendChild(newTask);

        const span = document.createElement('span');
        span.innerHTML = '&times;';
        newTask.appendChild(span);
        taskInput.value = '';
        saveData();
    }
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
    if (localStorage.getItem('data')) {
        listContainer.innerHTML = localStorage.getItem('data');
    }
}
loadData();