// AddTask.js
import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    onAddTask(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
