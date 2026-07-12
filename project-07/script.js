let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
let submitArray = JSON.parse(localStorage.getItem('submitArray')) || [];
displayTodo()
displaySubmit()


function displayTodo() {
    let todoHTMl = ''
    for (let i = 0; i < todoArray.length; i++) {
        const todoOB = todoArray[i];
        const todoName = todoOB.todo;
        const todoDate = todoOB.date;
        let html = `<div class="todo-item">
        <div class="task-name">${todoName}</div>
        <div class="task-actions">
        <div class = "task-date">${todoDate[2]}/${todoDate[1]}/${todoDate[0]}</div>
        <button onclick='todoArray.splice(${i},1);
        displayTodo();
        localStorage.setItem("todoArray" , JSON.stringify(todoArray))
        ' class = "delete-btn"><i class="fa-solid fa-trash"></i></button>
        <button onclick=submitTodo(${i});
        class = "submit-btn"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
        </div>
        `;
        todoHTMl += html;
    }
    document.querySelector('.todo-list').innerHTML = todoHTMl;
}

function submitTodo(i) {
    submitArray.push(todoArray[i])
    localStorage.setItem("submitArray", JSON.stringify(submitArray));
    todoArray.splice(i, 1);
    displayTodo();
    localStorage.setItem("todoArray", JSON.stringify(todoArray))
    displaySubmit();
}

function displaySubmit() {
    let todoHTMl = ''
    for (let i = 0; i < submitArray.length; i++) {
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

function clearTodo() {
    todoArray = [];
    submitArray = [];
    localStorage.setItem('todoArray', JSON.stringify(todoArray))
    localStorage.setItem('submitArray', JSON.stringify(submitArray))
    displayTodo();
    displaySubmit();

}

function addTodo() {
    let todoInput = document.querySelector('.input-js');
    let todoData = todoInput.value;
    console.log(todoData);
    let dateInput = document.querySelector('.due-date-js');
    let dateData = dateInput.value.split('-');
    console.log(dateData)


    if (todoData === "" || dateInput.value === "") {
        displaypopup2();
    } else {
        todoArray.push({
            todo: todoData,
            date: dateData
        })
        displaypopup();
        displayTodo();

        todoInput.value = '';
        dateInput.value = [];
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
    }
}

function displaypopup() {
    let main = document.querySelector('body')
    main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="popup-background">
             <div class="popup">
                <i class="fa-regular fa-circle-check"></i>
                <p>Task Added</p>
                <p>Succefully</p>
            </div>
        </div>
        `
    );
    gsap.from(".popup", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })
    setTimeout(function () {
        gsap.to(".popup", {
            scale: 0,
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.querySelector(".popup-background").remove();
            }
        })
    }, 2000)
}

function displaypopup2() {
    let main = document.querySelector('body')
    main.insertAdjacentHTML(
        "beforeend",
        `
        <div class="popup-background">
             <div class="Task-not-add-popup">
                <i class="fa-regular fa-circle-xmark"></i>
                <p>Task not Added</p>
                <p>UnSuccefully</p>
            </div>
        </div>
        `
    );
    gsap.from(".Task-not-add-popup", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })
    setTimeout(function () {
        gsap.to(".Task-not-add-popup", {
            scale: 0,
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.querySelector(".popup-background").remove();
            }
        })
    }, 2000)
}

function clearPopup() {
     if(todoArray.length === 0 && submitArray.length === 0 ){
        let btns = document.querySelector('body')
        btns.insertAdjacentHTML(
        "beforeend",

        `<div class="popup-background-2">
             <div class="popup-2">
                <p>Add Todo First</p>
            </div>
        </div>    `
    )
    gsap.from(".popup-2", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })
    setTimeout(()=>{
         gsap.to(".popup-2",{
            opacity:0,
            scale: 0,
            duration: 0.6,
            onComplete: () =>{
               document.querySelector(".popup-background-2").remove();
            }
         })
    },2000)
    }else{
    let btns = document.querySelector('body')
    btns.insertAdjacentHTML(
        "beforeend",

        `<div class="popup-background-2">
             <div class="popup-2">
                <p>Are you Sure ?</p>
                <div class="btns-2">
                    <button onclick="yesBtn()">Yes</button>
                    <button onclick="NoBtn()">no</button>
                </div>
            </div>
        </div>    `
    )
    gsap.from(".popup-2", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })};
}
function yesBtn() {
    gsap.to(".popup-2", {
        scale: 0,
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector(".popup-background-2").remove();
        }
    })
    clearTodo();
}

function NoBtn() {
    gsap.to(".popup-2", {
        scale: 0,
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector(".popup-background-2").remove();
        }
    })
}



