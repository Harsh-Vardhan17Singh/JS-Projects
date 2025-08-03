/*As soon as I load task
what I wnat is -
1.read from the local storage and grab all the task 
2.Store the task inside the array
3.immediatly run a loop and read all the  individual task and call teh method for each of the task so that it can render it*/


document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById("toggle-theme")
  const todoinput = document.getElementById("todo-input");
  const addtaskButton = document.getElementById("add-task-button");
  const todolist = document.getElementById("todo-list");


  // check localstorage and apply tehme if saved
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode")
  }

  toggleThemeButton.addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark")
  } else{
    localStorage.setItem("theme","light")
  }

  

  })

  //Save preference to localStorage
  
  // Get tasks from localStorage or initialize as empty array
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Render all existing tasks on load
  tasks.forEach(task => renderTask(task));

  // Add a new task on button click
  addtaskButton.addEventListener("click", () => {
    const tasktext = todoinput.value.trim(); // remove leading/trailing spaces
    if (tasktext === "") return; // Do nothing if input is empty

    const newTask = {
      id: Date.now(),     // Unique task ID based on timestamp
      text: tasktext,     // Task content
      completed: false    // New task starts as not completed
    };

    tasks.push(newTask);       // Add task to the array
    saveTasks();               // Save array to localStorage
    renderTask(newTask);       // Show the new task in the UI
    todoinput.value = "";      // Clear input field
  });

  // Save all tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Render a single task in the UI
  function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id); // Custom attribute to identify task

    if (task.completed) li.classList.add('completed'); // Add CSS class if done

    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    // Toggle completed state when clicking the task (except the button)
    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return; // Don't toggle if delete button clicked
      task.completed = !task.completed;
      li.classList.toggle('completed');
      saveTasks(); // Save updated state
    });

    // Delete a task
    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent toggle from firing
      tasks = tasks.filter(t => t.id !== task.id); // Remove from array
      li.remove(); // Remove from UI
      saveTasks(); // Save updated array
    });

    todolist.appendChild(li); // Add the list item to the task list
  }
});
