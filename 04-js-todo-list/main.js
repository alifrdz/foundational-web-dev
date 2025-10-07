// Select essential elements from the DOM
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const newTaskButton = document.getElementById('new-task');
const inputWrapperHidden = document.querySelector('.input-wrapper');

// All the functions that define the application's logic.
function addTaskToDoList() {
    const newTodoListText = taskInput.value;
    if (newTodoListText === '') {
        alert('Tugas tidak boleh kosongan');
        return;
    }

// Create a new <li> element
    const newLi = document.createElement('li');
    newLi.textContent = newTodoListText;

// Create the delete button    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

// Append the delete button inside the <li>
    newLi.append(deleteButton);
// Append the new <li> to the main task list (the <ul>)
    taskList.append(newLi);
 // Clear the input field for the next entry
    taskInput.value = '';
// Save the new list to localStorage
    saveTask();
}

addButton.addEventListener('click', addTaskToDoList);

taskList.addEventListener('click', function(event) {
    if (event.target.matches('.delete-button')) {
        event.target.closest('li').remove();

        saveTask();
    }
});

newTaskButton.addEventListener ('click', function(){
    inputWrapperHidden.classList.toggle('hidden');
});

// Saves the current list of tasks to localStorage.
function saveTask(){

    const tasks = [];

    const allLiElements = document.querySelectorAll('#task-list li');

    allLiElements.forEach(function(li){
        const taskText = li.firstChild.textContent;
        tasks.push(taskText);
    });

// Convert the array to a JSON string and save it
    localStorage.setItem('task', JSON.stringify(tasks));
    console.log('Tasks have been saved to localStorage.');
}

// Loads tasks from localStorage when the page is opened.
function loadTasks() {
    console.log('1. Memulai fungsi loadTasks...');

    const savedTasks = localStorage.getItem('task');
    console.log('2. Data mentah dari localStorage:', savedTasks);

    if (savedTasks === null) {
        console.log('3. Tidak ada data tersimpan, fungsi berhenti.');
        return;
    }

    const tasksArray = JSON.parse(savedTasks);
    console.log('4. Data setelah di-parse (jadi Array):', tasksArray);

    tasksArray.forEach(function(taskText) {
        console.log('5. Membuat elemen untuk tugas:', taskText);
        
        const newLi = document.createElement('li');
        newLi.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('delete-button');
        newLi.append(deleteButton);

        taskList.append(newLi);
    });

    console.log('6. Selesai memuat semua tugas.');
}

loadTasks();