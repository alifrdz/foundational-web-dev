const taskInput = document.getElementById ('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function toDoList (){
    const newTodoListText = taskInput.value; //buat si user bisa isi 
    
    if (newTodoListText === ''){
        //pengecekan ada isi/value nya engga dari user
        alert('Tugas tidak boleh kosongan');
        return; 
    }

    const newLi = document.createElement('Li');
    newLi.textContent = newTodoListText;
    taskList.append(newLi);

    taskInput.value = ('');
    console.log('ini berhasil nambah tugas di todolist');
}

addButton.addEventListener ('click' , toDoList);