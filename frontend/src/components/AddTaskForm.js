import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import uuid to generate unique IDs

const AddTaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      // Create a new task object that matches the structure of existing tasks
      const newTask = {
        id: uuidv4(), // Generate unique ID
        Task: taskTitle,
        Due_Date: new Date().toLocaleDateString('en-us', { month: 'short', day: '2-digit' }), // Set a placeholder due date
      };
      onAddTask(newTask); // Pass the new task to the parent component
      setTaskTitle(''); // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTaskForm;
