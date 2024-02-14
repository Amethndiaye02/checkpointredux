// App.js
import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './Tasklist';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Task 1", isDone: false },
    { id: 2, description: "Task 2", isDone: false },
    { id: 3, description: "Task 3", isDone: true }
  ]);

  const handleAddTask = (description) => {
    const newTask = { id: tasks.length + 1, description, isDone: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
