import { createContext, useState, useEffect } from "react"
import {tasks as data } from './Tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])
    function createTask({name, description}) {
        setTasks([...tasks, {
            id: tasks.length,
            name: name,
            description: description 
        }])
        }  
        
function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
    
}

useEffect(()=>{
    setTasks(data)
}, []) //Monitorea una vez si el componente cambia

    return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
)
}
