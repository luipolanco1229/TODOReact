import React, {
    useContext,
    useReducer,
    useEffect,
    useRef,
    useState,
    createContext,
} from "react";
import Todo from './Todo'


const Todos = () => {
    const [task, setTask] = useState({
        name: "",
        completed: false,
    });

    const deleteTask = (task)=>{
        tasks=tasks.filter(element=> element !== task)
        localStorage.setItem("todos", JSON.stringify(tasks));
        window.location.reload(true);
        
    }

    var tasks = localStorage.getItem("todos");
    tasks = tasks === null ? [] : JSON.parse(tasks);

    const newTask = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    
    const isCompleted = () => {
        localStorage.setItem("todos", JSON.stringify(tasks));
        window.location.reload(true);
    }

    const add = () => {
        tasks.push(task);
        localStorage.setItem("todos", JSON.stringify(tasks));
        window.location.reload(true);
    };

    return (
        <div className="newtask-div">
            <input placeholder="Agrega una tarea" onChange={newTask} name='name' />
            <button onClick={add} >Agregar</button>
            {tasks.map(task => <Todo task={task} deleteTask={deleteTask} isCompleted={isCompleted}/>)}
           
        </div>
        
    );
};

export default Todos;