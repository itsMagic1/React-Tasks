import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TasksList = () => {
    const { tasks } = useContext(TaskContext)
    if(tasks.length === 0){
        return (
        <div className='flex flex-col items-center container bg-black pl-16 p-10'>
            <span className='rounded-full px-44 py-5 bg-white'>No hay tareas</span>
        </div>
        )
    }
    
    return ( 
        <div className=' grid grid-cols-4 gap-2 p-4 rounded-md'>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))
            }
        </div>
    );
}

export default TasksList;
