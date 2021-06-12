const todo = document.getElementById("todo");
const btn = document.getElementById("btn");
const todos = document.getElementById("todos");
let myTodos = JSON.parse(localStorage.getItem('todos'));

// function triggered when add todo button is clicked
btn.addEventListener('click', () => {
    // to check if value is not empty
    if (todo.value !== '') {
        // create a list value function
        createList(todo.value);
        // pushing the new value to localstorage array
        myTodos.push(todo.value);
        // clearing the input field after todo is saved
        todo.value = "";
        // storing the todos array to local storage as a string
        localStorage.setItem('todos', JSON.stringify(myTodos))
    }
})

// on load of the page, run the function
window.onload = function populateTodos() {
    // if the array of todos is present in local storage
    if (myTodos) {
        // loop through the array and create a list
        myTodos.forEach(todo => {
            createList(todo);
        })
    }
}

// function to create a new list item and append it to ul tag in html
function createList(todo) {
    // create a new li tag
    let list = document.createElement('li');
    // add the style class
    list.classList.add('list');
    // populate the inner text with the value passed as parameter
    list.innerText = todo;
    // append the list to the last position in the ul tag
    todos.append(list);
}