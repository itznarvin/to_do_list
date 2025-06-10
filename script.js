// Select elements
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const viewBtn = document.getElementById("view-btn");
const taskList = document.getElementById("task-list");


addBtn.addEventListener("click", () => {
    const input = document.getElementById("add-task-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

     
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = ""; 
    }
});

// Remove task by name
removeBtn.addEventListener("click", () => {
    const input = document.getElementById("remove-task-input");
    const taskToRemove = input.value.trim().toLowerCase();

    if (taskToRemove !== "") {
        const tasks = document.querySelectorAll("#task-list li");
        let found = false;

        tasks.forEach(task => {
            const taskName = task.firstChild.textContent.trim().toLowerCase();
            if (taskName === taskToRemove) {
                task.remove();
                found = true;
            }
        });

        if (!found) alert("Task not found.");
        input.value = "";
    }
});

// View completed tasks
viewBtn.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll("#task-list li.completed");
    if (completedTasks.length === 0) {
        alert("No completed tasks.");
    } else {
        let message = "Completed Tasks:\n";
        completedTasks.forEach(task => {
            message += `- ${task.firstChild.textContent.trim()}\n`;
        });
        alert(message);
    }
});
