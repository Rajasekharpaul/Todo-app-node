import { useState } from 'react'
import axios from 'axios';

const TaskManager = () => {
    const [tasks, settasks] = useState({ title: "", description: "", completed: false });
    const [error, seterror] = useState('');
    const [success, setsuccess] = useState(false);
    const handleChange = (e) => {
        settasks({ ...tasks, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/todo", tasks);
            seterror('');
            setsuccess(true);
        } catch (err) {
            const message = err.response?.data?.message || 'Something went wrong';
            seterror(message);
        }
    };

    return (
        <div className="task-manager">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                ></textarea>
                <label htmlFor="completed">
                    <input
                        type="checkbox"
                        name="completed"
                        checked={tasks.completed}
                        onChange={e => settasks({ ...tasks, completed: e.target.checked })}
                    />
                    Completed
                </label>
                <button type="submit">Create task</button>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Task created successfully!</div>}
            </form>
        </div>
    );
}

export default TaskManager
