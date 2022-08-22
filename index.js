//SELECTORS
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoClearButton = document.querySelector('.clear-button')

//EVENT LISTENERS
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click', deleteCheck)
todoClearButton.addEventListener('click', clearBtn)

//FUNCTIONS
function addTodo (event) {
    //Prevent form from submitting
    event.preventDefault();
    //To-do DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //Create LI
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Check complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'complete';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'delete';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear To-do input value
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //Delete to-do
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transition', function (){
            todo.remove();
        })
    }
    //complete to-do
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function clearBtn (event) {
    event.preventDefault();
    todoList.remove()
}

