import './App.css';
import React, { useState } from 'react';
import AllTasks from './components/AllTasks';
import TaskManager from './components/TaskManager';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <>
      <TaskManager onTaskAdded={() => setRefresh(r => r + 1)} />
      <AllTasks refresh={refresh} />
    </>
  );
}

export default App;
