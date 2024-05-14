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
            checkboxColorClassName = 'personal';
        }
            
        todoInfoDiv.innerHTML = `
        
        <div class="task">
            <div class="task-description">
                <input class="${checkboxColorClassName}" type="checkbox" name="checkbox" onchange="strikeTask(this)">
                <p class="task__text">${task}</p>
            </div>
            
            <div class="btns">
                <button class="edit-task" onclick="editTask(this)">Edit</button>
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


function editTask(editButton) {
    const parentDiv = editButton.closest('.task');
    const taskDescription = parentDiv.querySelector('.task__text');
    taskDescription.setAttribute('contentEditable', 'true');

    taskDescription.focus();

    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(taskDescription);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}
