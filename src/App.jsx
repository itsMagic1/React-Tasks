import React from 'react';
import TaskForm from './Components/TaskForm';
import TasksList from './Components/TasksList';
import { TaskContextProvider } from './Components/TaskContext';

function App() {
  return (
      <main className='bg-zinc-900 h-screen p-16'>
    <div className='container'>
      <TaskContextProvider>
          <TaskForm></TaskForm>
          <TasksList></TasksList>
        </TaskContextProvider>
    </div>
    </main>
  );
}

export default App;
