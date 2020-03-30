import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);

            } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(()=> {
        getTodos();
    },[])
      
        return <div className="p-5">
                {todos.map(todo => 
                    <ul key={todo.todo_id} className="list-group">
                        <TodoItem todos={todos} setTodos={setTodos} todo={todo} />
                    </ul>)}
                </div>  ;
          
}

export default TodoList;