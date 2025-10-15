const inputUser = document.getElementById ('input-user');
const buttonAdd = document.getElementById ('button-add');
const listItem = document.getElementById ('list-item');

function addTask (){
    const taskText = inputUser.value;

    if(taskText === ''){
        alert('Tugas ga boleh kosong');
        return;
    }

    const newLi = document.createElement ('li');
    const deleteButton = document.createElement ('button');

    newLi.textContent = taskText;

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add ('delete-button');

    newLi.append(deleteButton);
    listItem.append(newLi);
}

buttonAdd.addEventListener ('click', addTask);

listItem.addEventListener ('click',function(event){ 
    if(event.target.matches('.delete-button')){
       event.target.closest('li').remove();
    }

});