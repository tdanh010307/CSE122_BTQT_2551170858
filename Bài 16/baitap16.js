let tasks = [
    { text: "Đọc chương HTML5 cơ bản", completed: false },
    { text: "Làm bài tập CSS Grid", completed: false },
    { text: "Quay video OBS nộp bài", completed: false }
];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let uncompletedCount = 0;

    tasks.forEach((task, index) => {
        if (!task.completed) {
            uncompletedCount++;
        }
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;
        li.innerHTML = `
        <div class="task-info" onclick="toggleTask(${index})">
        <div class="checkbox"></div>
        <span class="task-text">${task.text}</span>
        </div>
        <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>
        `;
        taskList.appendChild(li);
    });
    document.getElementById("taskStatus").innerText = `Còn ${uncompletedCount} việc chưa hoàn thành`;

}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    tasks.push({ text: text, completed: false });
    input.value = "";
    renderTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();