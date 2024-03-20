document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);

        // Add a delete button to each task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        li.appendChild(deleteBtn);

        // Add event listener to delete button
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });
    }
});
