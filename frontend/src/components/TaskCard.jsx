import React from 'react'

const TaskCard =({task})=> {
  return (
    <div className={`task-card ${task.completed ? 'completed' : 'not-completed'}`}>

        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? "Completed" : "Not Completed"}</p>
    </div>
  )
}

export default TaskCard
