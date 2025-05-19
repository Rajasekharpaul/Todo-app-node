import React, { useState } from 'react'
import axios from 'axios';

const TaskCard =({task, onDelete, onEdit})=> {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editCompleted, setEditCompleted] = useState(task.completed);
  const [error, setError] = useState('');
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/${task.id}`);
      if (onDelete) onDelete(task.id);
    } catch (err) {
      setError(err.response?.data?.message || 'Delete failed');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/todo/${task.id}`, {
        title: editTitle,
        description: editDescription,
        completed: editCompleted
      });
      setIsEditing(false);
      setError('');
      if (onEdit) onEdit();
    } catch (err) {
      setError(err.response?.data?.message || 'Edit failed');
    }
  };

  if (isEditing) {
    return (
      <div className={`task-card ${editCompleted ? 'completed' : 'not-completed'}`}>
        <form onSubmit={handleEditSubmit} className="task-card-content">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            required
          />
          <textarea
            value={editDescription}
            onChange={e => setEditDescription(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={editCompleted}
              onChange={e => setEditCompleted(e.target.checked)}
            />
            Completed
          </label>
          <div className="task-card-actions">
            <button type="submit" className="edit-btn">Save</button>
            <button type="button" className="delete-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className={`task-card ${task.completed ? 'completed' : 'not-completed'}`}>
      <div className="task-card-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? "Completed" : "Not Completed"}</p>
      </div>
      <div className="task-card-actions">
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default TaskCard
