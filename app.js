const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");
let tasks = [];

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
    
});

// Create a new task
function createTask(text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>   ${text} </span>
        <div class="btn">
        <button class="edit">Edit</button>
        <button class= "delete" id="btnedit">delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    // const deleteBtn = taskItem.querySelector(".delete");
    // deleteBtn.addEventListener("click", () => {
    //     taskItem.remove();
    // });

    const deleteBtn = taskItem.querySelector(".delete");

    function handleDeleteClick() {
    taskItem.remove();
    // tasks = tasks.filter(task => task !== taskData);
    //     saveToBackup();
    }

    deleteBtn.addEventListener("click", handleDeleteClick);


    // edit task
    const editBtn = taskItem.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        const taskSpan = taskItem.querySelector("span");
        const currentText = taskSpan.textContent;
        const newText = prompt("Edit the task", currentText);
        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
            taskItem.querySelector("span").textContent = newText.trim();
            saveToBackup();
        }
    });

    function saveToBackup(){
        console.log("Tasks saved to backup", tasks)
    }

    // Mark as completed
    taskItem.addEventListener("dblclick", () => {
        taskItem.classList.toggle("completed");
    });
}

