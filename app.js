// Load tasks when page loads
window.onload = function () {
    loadTasks();
};

// ---------------- TASK SYSTEM ----------------
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    loadTasks();
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        li.onclick = function () {
            li.style.textDecoration = "line-through";
        };

        let del = document.createElement("button");
        del.innerText = "❌";
        del.style.marginLeft = "10px";

        del.onclick = function () {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        };

        li.appendChild(del);
        taskList.appendChild(li);
    });
}


// ---------------- BURNOUT INTELLIGENCE ----------------
function analyze() {
    let mood = document.getElementById("mood").value;
    let hours = parseInt(document.getElementById("hours").value);
    let result = document.getElementById("result");

    if (!hours) {
        result.innerText = "⚠️ Please enter study hours";
        return;
    }

    if (mood === "Stressed" && hours > 5) {
        result.innerText = "🔴 High burnout risk. Take a break and relax.";
    }
    else if (mood === "Neutral" && hours >= 3) {
        result.innerText = "🟡 Moderate load. Maintain balance.";
    }
    else if (mood === "Happy" && hours >= 3) {
        result.innerText = "🟢 Great productivity! Keep going.";
    }
    else {
        result.innerText = "📌 Try to improve consistency and focus.";
    }
}