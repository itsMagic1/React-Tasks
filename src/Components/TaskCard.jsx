import { useContext } from 'react'
import {TaskContext } from './TaskContext'


export default function TaskCard({task}) {
    const {deleteTask} = useContext(TaskContext)
    return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{task.name}</h1>
            <h5 className='text-white text-sm'>{task.description}</h5>
            <button onClick={() => deleteTask(task.id)} className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">Eliminar</button>
        </div>
)
}
