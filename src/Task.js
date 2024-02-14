// Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
