//SELECTORS
const todoInput = document.querySelector('.todo-input')  //підключаємо переменну до HTML елемента
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoClearButton = document.querySelector('.clear-button')



//EVENT LISTENERS
todoButton.addEventListener('click',addTodo)  // даэмо слушатель кнопкі , виконує логіку функції addTodo
todoList.addEventListener('click', deleteCheck)
todoClearButton.addEventListener('click', clearBtn)



//FUNCTIONS
function addTodo (event) {
    //Prevent form from submitting / убираем стандартное поведение браузера
    event.preventDefault();
    //To-do DIV
    const todoDiv = document.createElement('div');  // створюємо div з класом
    todoDiv.classList.add('todo')
    //Create LI
    const newTodo = document.createElement('li')  // створюємо li і звязуємо його з інпутом та обявляємо що він є дочерним елементом родительского newTodo
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //Check complete button
    const completedButton = document.createElement('button');  // стврорюємо кнопку
    completedButton.innerHTML = 'complete'; // назва кнопки
    completedButton.classList.add('complete-btn'); // даємо класс кнопкі
    todoDiv.appendChild(completedButton); // кнопка є дочерним елементом родительського newTodo
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'delete';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);  // вставляємо це все в найголовніший Html тег
    //Clear To-do input value
    todoInput.value = '';   // чистимо інпут після нажатія
}

function deleteCheck(e) {       // логіка кнопок які ми получаємо в наших тудушках
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

