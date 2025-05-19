import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TaskCard from './TaskCard'

const AllTasks = ({ refresh }) => {
    const [task, settask] = useState([]);
    const [error, seterror] = useState('');
    const [success, setsuccess] = useState(false);
    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/todo");
            settask(response.data.tasks);
            seterror('');
            setsuccess(true);
        } catch (err) {
            const message = err.response?.data?.message || 'Something went wrong';
            seterror(message);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, [refresh]);
    const handleDelete = (id) => {
        settask(task.filter(t => t._id !== id));
    };
    const handleEdit = () => {
        fetchTasks();
    };
    return (
        <div className="all-tasks">
            <h1>All Tasks</h1>
            {task?.length == 0
                ? (<div className="no-tasks">No tasks available</div>)
                : task.map((tasks) => (
                    <TaskCard key={tasks._id} task={{
                        id: tasks._id,
                        title: tasks.title,
                        description: tasks.description,
                        completed: tasks.completed
                    }} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default AllTasks
