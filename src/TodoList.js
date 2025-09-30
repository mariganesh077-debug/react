import React from "react";
import "./TodoList.css"; // Import styles

export default function TodoList() {
  const tasks = ["Buy milk", "Study React", "Exercise"];
  // Try with: const tasks = []; to test "no tasks"

  return (
    <div className="todo-container">
      <h1 className="app-title">✨ My Stylish Todo List ✨</h1>

      {tasks.length === 0 ? (
        <p className="no-task">No tasks for today 🎉</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              ✅ {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}