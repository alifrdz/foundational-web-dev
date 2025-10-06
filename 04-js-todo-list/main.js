const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const newTaskButton = document.getElementById('new-task');
const inputWrapperHidden = document.querySelector('.input-wrapper');


function addTaskToDoList() {
    const newTodoListText = taskInput.value;
    if (newTodoListText === '') {
        alert('Tugas tidak boleh kosongan');
        return;
    }

    const newLi = document.createElement('li');
    newLi.textContent = newTodoListText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    newLi.append(deleteButton);

    taskList.append(newLi);
    taskInput.value = '';
}

addButton.addEventListener('click', addTaskToDoList);

taskList.addEventListener('click', function(event) {
    if (event.target.matches('.delete-button')) {
        event.target.closest('li').remove();
    }
});

newTaskButton.addEventListener ('click', function(){
    inputWrapperHidden.classList.toggle('hidden');
});

