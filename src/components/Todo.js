const Todo = ({task, deleteTask, isCompleted}) => {
    const Delete = () => {
        deleteTask(task)
    }

    const CompletedCheckbox =()=>{
    
        task.completed = !task.completed;
        isCompleted();
    }

    return(
        <div className="todo">
            <p className="task-name">{task.name}</p>
            <button onClick={Delete} className="button-delete">Borrar</button>
            <div>
                <input onChange= {CompletedCheckbox}  type="checkbox" checked={task.completed}/>
            </div>
        </div>
    )

}
 export default Todo;