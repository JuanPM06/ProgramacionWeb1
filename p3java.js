function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Por favor ingresa una tarea válida');
        return;
    }

    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    
    // Marcar tarea como completada
    taskText.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateLocalStorage();
    });

    // Botón eliminar tarea individual
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateLocalStorage();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    updateLocalStorage();
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('li.completed');
    completedTasks.forEach(task => task.remove());
    updateLocalStorage();
}

// LocalStorage functions
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(task => {
        tasks.push({
            text: task.querySelector('span').textContent,
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        
        if (task.completed) {
            li.classList.add('completed');
        }

        taskText.addEventListener('click', function() {
            li.classList.toggle('completed');
            updateLocalStorage();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            updateLocalStorage();
        });

        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', loadTasks);