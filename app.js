// ---------------- TASK SYSTEM ----------------
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Mark complete
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // Delete button
    let del = document.createElement("button");
    del.innerText = "❌";
    del.style.marginLeft = "10px";

    del.onclick = function () {
        li.remove();
    };

    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
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

    // Decision logic
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