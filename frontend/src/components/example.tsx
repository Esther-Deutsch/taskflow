import React, { useEffect, useState } from "react";
import { TaskService } from "../services/taskService";

export default function TestTasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  useEffect(() => {
    TaskService.getAll()
      .then((tasksFromServer) => {
        console.log("📦 tasks from server:", tasksFromServer);
        setTasks(tasksFromServer); // <-- כאן אתה מעדכן את ה-state
      })
      .catch((err) => console.error("❌ error:", err));
  }, []);

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
