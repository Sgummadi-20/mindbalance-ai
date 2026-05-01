
window.onload = function () {
    loadTasks();
};
function analyze() {
    let mood = document.getElementById("mood").value;
    let hours = parseInt(document.getElementById("hours").value);
    let result = document.getElementById("result");

    if (!hours) {
        result.innerHTML = "<p>⚠️ Please enter study hours</p>";
        return;
    }

    let suggestions = "";
    let status = "";

    if (mood === "Stressed" && hours > 5) {
        status = "🔴 High Burnout Detected";
        suggestions = `
            <div class="card">🚶 Take a short walk</div>
            <div class="card">🧘 Practice deep breathing</div>
            <div class="card">🎧 Listen to calming music</div>
        `;
    }
    else if (mood === "Neutral" && hours >= 3) {
        status = "🟡 Moderate Load";
        suggestions = `
            <div class="card">💧 Drink water</div>
            <div class="card">🤸 Do light stretching</div>
            <div class="card">⏱ Take a 10 min break</div>
        `;
    }
    else if (mood === "Happy" && hours >= 3) {
        status = "🟢 Good Productivity";
        suggestions = `
            <div class="card">💪 Maintain consistency</div>
            <div class="card">📘 Continue learning</div>
        `;
    }
    else {
        status = "📌 Improve Focus";
        suggestions = `
            <div class="card">🎯 Set small goals</div>
            <div class="card">📵 Avoid distractions</div>
        `;
    }

    result.innerHTML = `
        <h3>${status}</h3>
        <div class="cards-container">
            ${suggestions}
        </div>
    `;
}
function quickHelp() {
    let result = document.getElementById("result");

    result.innerHTML = `
        <h3>⚡ Quick Recovery</h3>
        <div class="card">⏱ Take a 5 min break</div>
        <div class="card">💧 Drink water</div>
        <div class="card">🎧 Listen to calm music</div>
    `;
}
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
