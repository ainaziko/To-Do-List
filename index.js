var tasksList = document.querySelector('.tasks');


document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedRadioButton = document.querySelector('input[name="category-option"]:checked');
    const task = document.querySelector('input[name="task"]').value;    

    //add task
    const todoInfoDiv = document.createElement('div');
        todoInfoDiv.classList.add('todo-info');

        var checkboxColorClassName = 'business';
        if (selectedRadioButton.className === 'personal') {
            checkboxDesignClassName = 'personal';
        }
            
        todoInfoDiv.innerHTML = `
        
        <div class="task">
            <div class="task-description">
                <input class="${checkboxColorClassName}" type="checkbox" name="checkbox" onchange="strikeTask(this)">
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


//mark task as done
function strikeTask(checkbox) {
    const parentDiv = checkbox.closest('.task-description');
    const taskText = parentDiv.querySelector('.task__text');
    
    if(checkbox.checked) {
        taskText.classList.add('strikeout');
    } else {
        taskText.classList.remove('strikeout');
    }

}