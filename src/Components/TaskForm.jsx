import { useState, useContext } from "react"
import { TaskContext } from "./TaskContext"

export default function TaskForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({name, description})
        setName("")
        setDescription("")
    }
    return (
            <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
                <input className="outline-none border-blue-500 mr-3 h-10 w-50 border-4" required autoFocus value={name}
                onChange={(e) => setName(e.target.value)} type="text" placeholder="Escribe el Titulo"/>
                <input className="mr-5 h-10 w-80 outline-none border-blue-500 border-4" required value={description}
                onChange={(e)=> setDescription(e.target.value)} placeholder="Inserte Descripción"></input>
                <button className="rounded-full py-2 px-3 bg-blue-500 hover:bg-blue-400"> Guardar </button>
            </form>
)
}

