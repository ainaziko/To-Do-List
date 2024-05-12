var tasksList = document.querySelector('.tasks');


document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedRadioButton = document.querySelector('input[name="category-option"]:checked');
    const task = document.querySelector('input[name="task"]').value;    

    //add task
    const todoInfoDiv = document.createElement('div');
        todoInfoDiv.classList.add('todo-info');

        todoInfoDiv.innerHTML = `
        
        <div class="task">
            <div class="task-description">
                <input type="radio" class="${selectedRadioButton.className}">
                <p class="task__text">${task}</p>
            </div>
            
            <div class="btns">
                <button class="edit-task">Edit</button>
                <button class="delete-task">Delete</button>
            </div>
        </div>

        `;

        tasksList.appendChild(todoInfoDiv);


        //delete task
        const deleteTaskBtn = todoInfoDiv.querySelector('.delete-task');
        deleteTaskBtn.addEventListener('click', function(event) {
            event.preventDefault();
            todoInfoDiv.remove();
        });       
});

