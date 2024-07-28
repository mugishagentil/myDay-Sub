import { useState } from "react"

function Food(){
    const [Todo, setTodo] = useState([])
    const newTodo = () => {
        const todoItem = document.getElementById("myTodo").value;
        document.getElementById("myTodo").value = ""
        setTodo([...Todo, todoItem])
    }
    return(
        <div>
            <h2>My Todo List</h2><hr></hr>
            <ol>
                {Todo.map((todo, index) => <li key={index}>{todo}</li>)}
            </ol>
            <input type="text" id="myTodo"/>
            <button onClick={newTodo}>Add Todo</button>
        </div>
    )
}
export default Food