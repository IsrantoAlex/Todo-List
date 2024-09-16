const todoBtn = document.getElementById('td-btn');
const todoInput = document.getElementById('td-input');
const todoList = document.getElementById('td-list');

todoBtn.addEventListener('click', adAlert);
todoList.addEventListener('click', editDelete);





function adAlert(event){
    event.preventDefault();


    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    editButton.classList.add('edit-button');
    todoDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv)

    todoInput.value = ''

    editButton.addEventListener('click', () => {
        todoDiv.contentEditable = true;
    })
 
}

function editDelete(e){
    const Item = e.target;
    if(Item.classList[0] === 'delete-button'){
        const deleteItem = Item.parentElement;
        deleteItem.remove();
    }

    
}

