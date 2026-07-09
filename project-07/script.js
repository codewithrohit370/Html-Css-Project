let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
let submitArray = JSON.parse(localStorage.getItem('submitArray')) || [];
displayTodo()
displaySubmit()


function displayTodo(){
    let todoHTMl = ''
    for(let i = 0; i<todoArray.length;i++){
        const todoOB = todoArray[i];
        const todoName = todoOB.todo;
        const todoDate = todoOB.date;
        let html = `<div class="todo-item">
        <div class="task-name">${todoName}</div>
        <div class = "task-date">${todoDate[2]}/${todoDate[1]}/${todoDate[0]}</div>
        <button onclick='todoArray.splice(${i},1);
        displayTodo();
        localStorage.setItem("todoArray" , JSON.stringify(todoArray))
        ' class = "delete-btn"><i class="fa-solid fa-trash"></i></button>
        <button onclick=submitTodo(${i});
        class = "submit-btn"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
        `;
        todoHTMl += html;
    }
    document.querySelector('.todo-list').innerHTML = todoHTMl;
}

function submitTodo(i){
      submitArray.push(todoArray[i])
      localStorage.setItem("submitArray",JSON.stringify(submitArray));
      todoArray.splice(i,1);
        displayTodo();
       localStorage.setItem("todoArray" , JSON.stringify(todoArray)) 
      displaySubmit();
}

function displaySubmit(){
    let todoHTMl = ''
    for(let i = 0; i<submitArray.length;i++){
        const todoOB = submitArray[i];
        const todoName = todoOB.todo;
        const todoDate = todoOB.date;
        let html = `<div class="todo-item">
        <div class="task-name">${todoName}</div>
        <div class = "task-date-2">${todoDate[2]}/${todoDate[1]}/${todoDate[0]}</div>
        <button onclick='submitArray.splice(${i},1);
        displaySubmit();
        localStorage.setItem("submitArray" , JSON.stringify(submitArray))
        ' class = "delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
    
        todoHTMl += html;
    }
    document.querySelector('.submit-list').innerHTML = todoHTMl
    
}

function clearTodo(){
    todoArray = [];
    submitArray = [];
    localStorage.setItem('todoArray' , JSON.stringify(todoArray))
    localStorage.setItem('submitArray' , JSON.stringify(submitArray))
    displayTodo();
    displaySubmit();
}

function addTodo(){
    let todoInput = document.querySelector('.input-js');
    let todoData = todoInput.value;
    let dateInput = document.querySelector('.due-date-js');
    let dateData = dateInput.value.split('-');

    todoArray.push({
        todo: todoData,
        date: dateData
    })
    console.log(todoArray);
    displayTodo();

    todoInput.value = '';
    dateInput.value = [];
    localStorage.setItem('todoArray',JSON.stringify(todoArray));


}

