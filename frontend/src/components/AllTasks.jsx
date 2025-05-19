import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TaskCard from './TaskCard'

const AllTasks = () => {
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
    }, []);
    return (
        <div className="all-tasks">
            <h1>All Tasks</h1>
            {task?.length == 0
                ? (<div className="no-tasks">No tasks available</div>)
                : task.map((tasks) => (
                    <TaskCard task={tasks} />
                ))}
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Tasks fetched successfully!</div>}
        </div>
    )
}

export default AllTasks
